import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

export const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="bg-black p-4 flex justify-center pt-20">
      <form className="">
        <input
          type="text"
          className="p-2 m-4 w-[300px]"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 bg-red-700 text-white">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
