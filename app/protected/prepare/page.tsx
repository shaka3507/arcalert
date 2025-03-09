import HeaderFramerComponent from "@/framer/header";
import { ListCheck } from "lucide-react";

export default function Prepare() {
  return (
    <div className="flex flex-col items-center justify-center">
      <ListCheck size={48} />
      <HeaderFramerComponent title="Prepare" variant="H2" />
    </div>
  );
}
