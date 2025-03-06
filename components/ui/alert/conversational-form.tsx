"use client";

import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import CardContainerFramerComponent from "@/framer/card-container";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL; // Replace with your Supabase project URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const CrisisEventForm = ({ userId }) => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    type: "Weather", // Default to first option in the dropdown
    description: "",
  });

  const questions = [
    {
      label: "Event Type?",
      name: "type",
      type: "dropdown",
      options: ["Extreme Cold", "Extreme Heat", "Flood", "Tornado", "Wildfire"],
    },
    {
      label: "Description (Optional)",
      name: "description",
      placeholder: "Enter description",
      optional: true,
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    console.log("Crisis Event Data:", formData);

    if (!formData.type) {
      alert("Event type is required");
      return;
    }

    // Prepare the data to send
    const eventData = {
      title: `${formData.type} Alert`,
      type: formData.type,
      description: formData.description,
      created_by: userId, // Use the provided userId for created_by
    };

    // Send the data to Supabase
    try {
      const { data, error } = await supabase.from("crisis_events").insert([eventData]);
      
      if (error) throw error;

      alert("Crisis event created successfully!");
      console.log("Inserted data:", data);
    } catch (error) {
      alert(error.message);
      console.error("Error inserting data:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.bubble}>
        <p>{questions[step].label}</p>
        {questions[step].type === "dropdown" ? (
          <select
            name={questions[step].name}
            value={formData[questions[step].name]}
            onChange={handleChange}
            style={styles.dropdown}
          >
            {questions[step].options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type="text"
            name={questions[step].name}
            placeholder={questions[step].placeholder}
            value={formData[questions[step].name]}
            onChange={handleChange}
            style={styles.input}
          />
        )}
        <button onClick={handleNext} style={styles.button}>
          {step < questions.length - 1 ? "Next" : "Submit"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bubble: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  dropdown: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#f6f6f6",
    color: "#333",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default CrisisEventForm;