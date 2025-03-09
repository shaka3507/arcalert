import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import ConversationalForm from "@/components/ui/alert/conversational-form";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";

import HeaderFramerComponent from "@/framer/header";
import Alert from "@/components/ui/alert";
import ChatInput from "@/components/ui/chat";


export default async function ProtectedPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="flex-1 flex flex-col gap-2" style={{ width: "400px", overflowX: "hidden"}}>
        <Alert />
    </div>
  );
}
