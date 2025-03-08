"use client";

import { useEffect, useState } from "react";

import {
  getNotionDataPrimaryDbId,
  getNotionDataPages,
  isNotionDataLoaded,
  isNotionDataValid,
  useNotionData,
  isNotionDataLive,
  hasNotionDataNextCursor,
} from "@/lib/notionData";

import getQuery from "@/lib/getQuery"

const useFetchWeatherEvents = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData); // Log the fetched data to console
      } catch (err) {
        setError(err);
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Dependency array with `url` ensures effect runs again if `url` changes

  // Return the data, loading state, and error state
  return { data, loading, error };
};

const WeatherData = () => {
  const url =
    "https://notion-dgmd-cc.vercel.app/api/query?d=1b04ffe6f70c8076bfa2faa2944fbfc8&r=true&n=a"; // Replace with your JSON endpoint
//   const { data, loading, error } = useFetchWeatherEvents(url); // my own version

  const showLiveData = getQuery('liveData')

  if (!showLiveData) return
  const { notionData, data } = useNotionData(url);

  if (!isNotionDataLoaded(notionData)) return <div>loading...</div>;
  if (!isNotionDataValid(notionData)) return <div>corrupt data</div>;

  const primaryDbId = getNotionDataPrimaryDbId(notionData);
  const primaryPages = getNotionDataPages(notionData, primaryDbId);


  console.log("show live data", showLiveData)

  return (
    <div style={{ width: "250px" }}>
      {showLiveData && JSON.stringify(primaryPages, null, 4)}
    </div>
  );
};

export default WeatherData;
