"use client";

import HeaderFramerComponent from "@/framer/header";
import ChatInput from "@/components/ui/chat";
import { AlertTriangle } from "lucide-react";
export default function Alert() {
  return (
    <div className="flex flex-col items-center justify-center">
      <AlertTriangle size={48} />
      <HeaderFramerComponent title="what's going on?" variant="H2" />
      <div className="flex flex-col items-center justify-center">
        <h3>
          <em>or create based on your current weather</em>
        </h3>
        <ChatInput />
      </div>
    </div>
  );
}
