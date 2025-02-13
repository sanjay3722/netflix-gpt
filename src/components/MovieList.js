import React from "react";
import MovieCard from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  return (
    <div className="container mx-auto overflow-x-auto">
      <h1 className="mb-5 text-xl text-white">{title}</h1>
      <div className="flex gap-2">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>

    // <div className="flex flex-col bg-white m-auto p-auto">
    //   <h1 className="flex py-5 lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-4xl text-gray-800">
    //     {title}
    //   </h1>
    //   <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
    //     <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
    //       {movies?.map((movie) => {
    //         <div className="inline-block px-3">
    //           <MovieCard key={movie.id} posterPath={movie.poster_path} />
    //           {/* <div className="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div> */}
    //         </div>;
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};
