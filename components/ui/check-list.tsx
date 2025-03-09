"use client";

import React, { useState } from "react";
import HeaderFramerComponent from "@/framer/header";
import ModernButtonFramerComponent from "@/framer/modern-button";
import { X } from "lucide-react";

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

const Modal = ({ showModal, closeModal }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className={`modal ${showModal ? "show" : ""}`}>
        <div className="modal-content">
          <button className="close-button" onClick={closeModal}>
            <X size={24} />
          </button>
          <HeaderFramerComponent title="Alert Created" variant="H2" />
          <div className="p-2">
            <h2>Craft first message to group</h2>
            <div className="max-w-md mx-auto my-8 p-4 border shadow-md flex items-center justify-center py-4">
              <input
                type="text"
                placeholder="we have supplies ready for pick up..."
                value={inputValue}
                onChange={handleInputChange}
                className="flex-grow border-none outline-none text-lg px-6"
              />
            </div>
            <button
              className="px-12 py-2 bg-cyan-500 text-white mt-4"
              onClick={() => {
                closeModal()
                console.log("new page...");
              }}
            >
              MESSAGE
            </button>
          </div>
        </div>
      </div>
      <div
        className={`modal-overlay ${showModal ? "show" : ""}`}
        onClick={closeModal}
      ></div>
    </>
  );
};

function CrisisChecklist({ event }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [finalList, setFinalList] = useState([]);

  const toggleModal = () => setShowModal(!showModal);

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
      .filter((item) => selectedItems[item.id]?.quantity > 0)
      .map((item) => ({
        itemType: item.itemType,
        quantity: selectedItems[item.id].quantity,
      }));

    console.log("Selected List", selectedList);
    setFinalList(selectedList);
    toggleModal();
  };

  const itemsForEvent = crisisItems.filter(
    (item) => item.event.toLowerCase() === event.toLowerCase()
  );

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <HeaderFramerComponent
        title={`Suggested Essentials for ${event}`}
        variant="H2"
        className="mb-4"
      />
      <Modal showModal={showModal} closeModal={toggleModal} />
      <ul className="p-2 max-h-96 overflow-y-scroll" style={{ width: "350px" }}>
        {itemsForEvent.map((item) => (
          <li key={item.id} className="flex items-center gap-4 mb-2">
            <span className="flex-grow">{item.itemType.toLowerCase()}</span>
            <button
              className="px-2 py-1 rounded"
              onClick={() => handleQuantityChange(item.id, -1)}
            >
              -
            </button>
            <span>{selectedItems[item.id]?.quantity || 0}</span>
            <button
              className="px-2 py-1 rounded"
              onClick={() => handleQuantityChange(item.id, 1)}
            >
              +
            </button>
          </li>
        ))}
      </ul>
      <button
        className="px-12 py-2 bg-red-500 text-white mt-4"
        onClick={updateFinalList}
      >
        ALERT
      </button>
    </div>
  );
}

export default CrisisChecklist;
