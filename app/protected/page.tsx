import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import CardContainerFramerComponent from "@/framer/card-container";
export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-4">
      <CardContainerFramerComponent title="emergency?" background="#C95757" description="create an alert here" fontColor="white" />
      <CardContainerFramerComponent title="prepare for the future" background="#1C3036" description="Looking to prepare for the upcoming storm? Learn and prepare here." fontColor="white" />
      <CardContainerFramerComponent title="chicago, -2°F" background="#A1D6E3" description="mostly cloudy" fontColor="black" />
      <CardContainerFramerComponent title="learn more about extreme weather in chicago" background="#DFE3A1" description="heat waves, polar vertexes, tornadoes.." fontColor="black" />
    </div>
  );
}
