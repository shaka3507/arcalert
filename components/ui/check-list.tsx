"use client";
import React, { useState } from "react";
import HeaderFramerComponent from "@/framer/header";
import ModernButtonFramerComponent from "@/framer/modern-button";

const crisisItems = [
  {
    id: 1,
    event: "Blizzard",
    itemType: "Thermal Blanket",
    description: "To preserve body heat.",
  },
  {
    id: 2,
    event: "Blizzard",
    itemType: "Fire Starter",
    description: "Fire-starting tools for warmth.",
  },
  {
    id: 3,
    event: "Blizzard",
    itemType: "Hand warmers",
    description: "Warm clothing for extreme cold.",
  },
  {
    id: 26,
    event: "Blizzard",
    itemType: "Subzero Tents",
    description: "Tents for extreme cold.",
  },
  {
    id: 4,
    event: "Blizzard",
    itemType: "Portable Heater",
    description: "Battery-powered or propane heater.",
  },
  {
    id: 5,
    event: "Blizzard",
    itemType: "Snow Shovel",
    description: "For clearing paths and escape routes.",
  },
  {
    id: 6,
    event: "Hurricane",
    itemType: "First Aid Kit",
    description: "Basic first aid supplies to treat minor injuries.",
  },
  {
    id: 7,
    event: "Hurricane",
    itemType: "Water Bottles",
    description: "Fresh water to stay hydrated.",
  },
  {
    id: 8,
    event: "Hurricane",
    itemType: "Non-perishable Food",
    description: "Canned goods and dry food.",
  },
  {
    id: 9,
    event: "Hurricane",
    itemType: "Flashlight",
    description: "Battery-powered light source.",
  },
  {
    id: 10,
    event: "Hurricane",
    itemType: "Batteries",
    description: "Extra batteries for devices.",
  },
  {
    id: 11,
    event: "Flood",
    itemType: "Sandbags",
    description: "To prevent water entry.",
  },
  {
    id: 12,
    event: "Flood",
    itemType: "Waterproof Clothing",
    description: "Jackets and pants to stay dry.",
  },
  {
    id: 13,
    event: "Flood",
    itemType: "Portable Water Filter",
    description: "Device to purify water.",
  },
  {
    id: 14,
    event: "Flood",
    itemType: "Emergency Contact List",
    description: "Family and emergency services contacts.",
  },
  {
    id: 15,
    event: "Flood",
    itemType: "Evacuation Plan",
    description: "Written plan for evacuation.",
  },
  {
    id: 16,
    event: "Earthquake",
    itemType: "Hard Hat",
    description: "Protective gear for falling debris.",
  },
  {
    id: 17,
    event: "Earthquake",
    itemType: "Emergency Whistle",
    description: "To signal for help.",
  },
  {
    id: 18,
    event: "Earthquake",
    itemType: "Sturdy Shoes",
    description: "Durable footwear for debris.",
  },
  {
    id: 19,
    event: "Earthquake",
    itemType: "Dust Mask",
    description: "Protective mask against dust and debris.",
  },
  {
    id: 20,
    event: "Earthquake",
    itemType: "Non-Perishable Snacks",
    description: "Energy bars and snacks.",
  },
  {
    id: 21,
    event: "Tornado",
    itemType: "Radio",
    description: "Battery-powered or hand-crank radio.",
  },
  {
    id: 22,
    event: "Tornado",
    itemType: "Sturdy Shelter",
    description: "Basement or storm shelter.",
  },
  {
    id: 23,
    event: "Tornado",
    itemType: "Safety Goggles",
    description: "Protective eyewear.",
  },
  {
    id: 24,
    event: "Tornado",
    itemType: "Personal Documents",
    description: "Copies of IDs and insurance.",
  },
  {
    id: 25,
    event: "Tornado",
    itemType: "Multi-tool",
    description: "All-purpose tool for various tasks.",
  },
];

function CrisisChecklist({ event }) {
  const [selectedItems, setSelectedItems] = useState({});
  const [finalList, setFinalList] = useState([]);

  const handleQuantityChange = (id, delta) => {
    setSelectedItems((prev) => {
      const newQuantity = Math.max(0, (prev[id]?.quantity || 0) + delta);
      return {
        ...prev,
        [id]: {
          ...prev[id],
          quantity: newQuantity,
        },
      };
    });
  };

  const updateFinalList = () => {
    const selectedList = crisisItems
      .filter(
        (item) =>
          selectedItems[item.id]?.quantity && selectedItems[item.id].quantity > 0
      )
      .map((item) => ({
        itemType: item.itemType,
        quantity: selectedItems[item.id].quantity,
      }));
    console.log("selectedList", selectedList);
    setFinalList(selectedList);
  };

  const itemsForEvent = crisisItems.filter(
    (item) => item.event.toLowerCase() === event.toLowerCase()
  );

  return (
    <div
      style={{ height: "fit-content", overflowY: "scroll", padding: "20px 0px" }}
      className="flex flex-col items-center justify-center"
    >
      <div style={{ marginBottom: "20px"}}>
        <HeaderFramerComponent
          title={`Suggested essentials for ${event}`}
          variant="H2"
        />
        <ul className="p-2" style={{ overflowY: "scroll", maxHeight: "30vh" }}>
          {itemsForEvent.map((item) => (
            <li key={item.id} className="flex items-center gap-4 mb-2">
              <span className="flex-grow">{item.itemType.toLowerCase()}</span>
              <button
                className="px-2 py-1 bg-white-300 rounded hover:bg-gray-400"
                onClick={() => handleQuantityChange(item.id, -1)}
              >
                -
              </button>
              <span>{selectedItems[item.id]?.quantity || 0}</span>
              <button
                className="px-2 py-1 bg-white-300 rounded hover:bg-gray-400"
                onClick={() => handleQuantityChange(item.id, 1)}
              >
                +
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ModernButtonFramerComponent
        onClick={updateFinalList}
        text="create alert"
      />
    </div>
  );
}

export default CrisisChecklist;