"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [advice, setAdvice] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/advice")
      .then((res) => res.json())
      .then((data) => {
        setAdvice(data.advice);
        setStory(data.story);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Navbar />
    <div className="container mx-auto flex flex-col items-center mt-20">
      {loading && <Loader />}
      {!loading && (
        <div className="flex flex-col items-center p-6">
          <h1 className="text-4xl font-bold text-center">{advice}</h1>
          <p className="text-lg text-center mt-4 text-justify">{story}</p>
        </div>
      )}
    </div>
    </>
  );
}
