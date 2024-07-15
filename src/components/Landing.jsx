"use client";
import React, { useState } from "react";
import SearchForm from "./SearchForm";
import BooksList from "./BooksList";

export default function Landing() {
  const [searchItem, setSearchItem] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  return (
    <div className="h-[calc(100vh-30px)] w-full">
      <div className="bg-[url('../../public/library.jpg')] bg-[#111] min-h-[75vh] relative">
        <div className="text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full md:w-2/3 z-[99]">
          <h2 className="font-extrabold text-6xl mb-10">
            Find Your Book Of Choice
          </h2>
          <p className="mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non saepe
            pariatur cumque a maiores nisi alias. Repellat, officia dolorum,
            minima maiores, saepe iure voluptatum et aspernatur deleniti
            corporis repellendus laborum.
          </p>
          <SearchForm searchItem={searchItem} setSearchItem={setSearchItem} searchResult={searchResult} setSearchResult={setSearchResult} loading={loading} setLoading={setLoading}/>
        </div>
        <div className="bg-gradient-to-r from-black to-black opacity-50 absolute z-40 w-full h-full"></div>
      </div>
      <BooksList searchItem={searchItem} searchResult={searchResult} loading={loading} setLoading={setLoading}/>
    </div>
  );
}
