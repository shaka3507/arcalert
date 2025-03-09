"use client";
import CardContainerFramerComponent from "@/framer/card-container";

export default function Home() {
  return (
    <>
      <CardContainerFramerComponent
        title="emergency?"
        background="#C95757"
        description="create an alert here"
        fontColor="white"
      />
      <CardContainerFramerComponent
        title="prepare for the future"
        background="#1C3036"
        description="Looking to prepare for the upcoming storm? Learn and prepare here."
        fontColor="white"
      />
      <CardContainerFramerComponent
        title="chicago, -2°F"
        background="#A1D6E3"
        description="mostly cloudy"
        fontColor="black"
      />
      <CardContainerFramerComponent
        title="learn more about extreme weather in chicago"
        background="#DFE3A1"
        description="heat waves, polar vertexes, tornadoes.."
        fontColor="black"
      />
    </>
  );
}
