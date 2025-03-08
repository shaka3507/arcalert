"use client";
import HeaderFramerComponent from "@/framer/header";
import ChatInput from "@/components/ui/chat";
export default function Alert() {
  return (
    <>
      <HeaderFramerComponent title="what's going on?" variant="H2" />
      <div style={{ padding: "8px" }}>
        <h3>
          <em>or create based on your current weather</em>
        </h3>
      </div>
      <ChatInput />
    </>
  );
}
