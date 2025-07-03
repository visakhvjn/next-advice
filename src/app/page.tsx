"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [advice, setAdvice] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchAdvice = () => {
    setLoading(true);
    fetch("/api/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.advice);
        setStory(data.story);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto flex flex-col items-center md:mt-20 pb-20">
        {loading && <Loader />}
        {!loading && (
          <div className="flex flex-col items-start p-6">
            <h1 className="text-4xl font-bold text-left">{advice}</h1>
            <p className="text-lg text-left mt-4 text-justify">{story}</p>
          </div>
        )}
      </div>
      
      {/* Sticky button at bottom */}
      <button
        onClick={fetchAdvice}
        disabled={loading}
        className="fixed bottom-6 cursor-pointer right-6 bg-black hover:bg-gray-800 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 z-50"
      >
        
          Get New Gyan
      </button>
    </>
  );
}
