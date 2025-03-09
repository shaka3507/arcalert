"use client"
import dynamic from 'next/dynamic';
import Head from 'next/head';
import WeatherWidget from '@/components/ui/weather';


export default function Home() {
  return (
    <div>
        <WeatherWidget />
    </div>
  );
}