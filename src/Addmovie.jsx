import React, { useRef } from 'react';

const Addmovie = (props) => {
  const myref = useRef();
  const myref2 = useRef();
  const myref3 = useRef();

  const handlesubmit = (e) => {
    e.preventDefault();
    const movie = {
      title: myref.current.value,
      director: myref2.current.value,
      date: myref3.current.value,
    };
    props.onaddmovie(movie);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
      <h2 className="text-2xl font-semibold text-blue-600 text-center mb-6">Add a New Movie</h2>
      <form onSubmit={handlesubmit} className="space-y-6">
        <div>
          <label htmlFor="title" className="block text-gray-700 font-medium mb-2">
            Movie Title
          </label>
          <input
            ref={myref}
            type="text"
            id="title"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Enter movie title"
          />
        </div>
        <div>
          <label htmlFor="director" className="block text-gray-700 font-medium mb-2">
            Director
          </label>
          <input
            ref={myref2}
            type="text"
            id="director"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Enter director's name"
          />
        </div>
        <div>
          <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
            Release Date
          </label>
          <input
            ref={myref3}
            type="date"
            id="date"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-medium rounded-md shadow-md"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
  
};

export default Addmovie;
