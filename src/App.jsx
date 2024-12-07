import { useCallback, useEffect, useMemo, useState } from "react";
import List from "./list";
import Loading from "./Loading";
import Error from "./Error";
import Addmovie from "./Addmovie";
  
function App() {
  
  const[error,seterror]=useState()
  const[heredata,setdata]=useState([])
  const[loading, setloading]=useState(false)
 


  //lodic to play with our stored data with error handling and all
  const handleFetch= useCallback(async()=>{
    try{
      seterror("")
      setloading(true)
      const data1="https://sample-firebase-ai-app-ec115-default-rtdb.firebaseio.com/movies.json"
      
      let res=await fetch(data1)
      if(!res.ok){
        throw new Error("error can't go further");
      } 
      let data=await res.json() 
      console.log(data)   
      const loadedmovies=[]
      for(const key in data){
        loadedmovies.push({
          id:key,
          title:data[key].title,
          director:data[key].director,
          date:data[key].date,
        })
      }
       
       setdata(loadedmovies)
       setloading(false) 
    }catch(e){
      console.log(e)
seterror(e.message)
setloading(false)
    }
    
  },[])

   useEffect(()=>{
    handleFetch()
  },[handleFetch])




  //logic to send data to database

  const onaddmovie=async(movie)=>{
    const data=await fetch('https://sample-firebase-ai-app-ec115-default-rtdb.firebaseio.com/movies.json',
      {method:'POST',
        body: JSON.stringify({
          title: movie.title,
          director: movie.director,  
        date: movie.date, 
        }),
      headers:{
        'Content-Type':'application/json'
        },

  })
    
    
  }
  
  return (
    <div className="min-h-screen bg-gray-500 text-gray-800">
      <header className="py-6 bg-blue-600 text-white shadow">
        <h1 className="text-center text-3xl font-bold">Movie Management System</h1>
      </header>
      <main className="flex flex-col items-center py-10 space-y-8">
        <Addmovie onaddmovie={onaddmovie} />
        <button
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md"
          onClick={handleFetch}
        >
          Fetch Movies
        </button>
        <div className="w-4/5">
          {!loading && heredata.length > 0 && <List heredata={heredata} />}
          {loading && <Loading />}
          {heredata === 0 && !loading && !error && (
            <h1 className="text-center text-gray-600 font-medium">No data found</h1>
          )}
          {error && <Error message={error} />}
        </div>
      </main>
    </div>
  );
}  

export default App;
