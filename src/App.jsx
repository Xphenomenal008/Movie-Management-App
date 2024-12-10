import List from "./list";
import Loading from "./Loading";
import Error from "./Error";
import Addmovie from "./Addmovie";
import useFetch from "./useFetch";

function App() {
  const {
    data: movies,
    loading,
    error,
    refetch, // Add refetch for manual fetching
  } = useFetch("https://sample-firebase-ai-app-ec115-default-rtdb.firebaseio.com/movies.json");

  // Transform the data
  const loadedMovies = [];
  for (const key in movies) {
    loadedMovies.push({
      id: key,
      title: movies[key].title,
      director: movies[key].director,
      date: movies[key].date,
    });
  }

  // Logic to send data to the database
  const onAddMovie = async (movie) => {
    try {
      await fetch("https://sample-firebase-ai-app-ec115-default-rtdb.firebaseio.com/movies.json", {
        method: "POST",
        body: JSON.stringify({
          title: movie.title,
          director: movie.director,
          date: movie.date,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      // Refetch data after adding a movie
      refetch();
    } catch (err) {
      console.error("Failed to add movie:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-500 text-gray-800">
      <header className="py-6 bg-blue-600 text-white shadow">
        <h1 className="text-center text-3xl font-bold">Movie Management System</h1>
      </header>
      <main className="flex flex-col items-center py-10 space-y-8">
        <Addmovie onaddmovie={onAddMovie} />
        <button
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md"
          onClick={refetch} // Manual fetch button
        >
          Fetch Movies
        </button>
        <div className="w-4/5">
          {!loading && loadedMovies.length > 0 && <List heredata={loadedMovies} />}
          {loading && <Loading />}
          {loadedMovies.length === 0 && !loading && !error && (
            <h1 className="text-center text-gray-600 font-medium">No data found</h1>
          )}
          {error && <Error message={error} />}
        </div>
      </main>
    </div>
  );
}

export default App;
