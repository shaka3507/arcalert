import FetchDataSteps from "@/components/tutorial/fetch-data-steps";
import { createClient } from "@/utils/supabase/server";
import { InfoIcon } from "lucide-react";
import { redirect } from "next/navigation";
import Link from "next/link";
import CardContainerFramerComponent from "@/framer/card-container";
import HeaderFramerComponent from "@/framer/header";
import Ticker from '@/components/ui/ticker';
import ContactsList from "@/components/ui/contacts";

const users = [
  {
    firstName: 'John',
    lastName: 'Smith',
    image: 'https://via.placeholder.com/70',
    number: '+1-(555)-1234567',
  },
  {
    firstName: 'Jane',
    lastName: 'Johnson',
    image: 'https://via.placeholder.com/70',
    number: '+1-(555)-2345678',
  },
  {
    firstName: 'Alex',
    lastName: 'Williams',
    image: 'https://via.placeholder.com/70',
    number: '+1-(555)-3456789',
  },
  {
    firstName: 'Chris',
    lastName: 'Jones',
    image: 'https://via.placeholder.com/70',
    number: '+1-(555)-4567890',
  },
  {
    firstName: 'Katie',
    lastName: 'Brown',
    image: 'https://via.placeholder.com/70',
    number: '+1-(555)-5678901',
  },
  {
    firstName: 'Mike',
    lastName: 'Davis',
    image: 'https://via.placeholder.com/70',
    number: '+1-(555)-6789012',
  },
  {
    firstName: 'Sarah',
    lastName: 'Miller',
    image: 'https://via.placeholder.com/70',
    number: '+1-(555)-7890123',
  },
  {
    firstName: 'David',
    lastName: 'Wilson',
    image: 'https://via.placeholder.com/70',
    number: '+1-(555)-8901234',
  },
  {
    firstName: 'Laura',
    lastName: 'Moore',
    image: 'https://via.placeholder.com/70',
    number: '+1-(555)-9012345',
  },
  {
    firstName: 'Tom',
    lastName: 'Taylor',
    image: 'https://via.placeholder.com/70',
    number: '+1-(555)-0123456',
  },
];


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
      <HeaderFramerComponent
        title="ArcAlert"
        variant="H2"
      />
      <Ticker />
      <Link href="/protected/alert">
        <CardContainerFramerComponent
          title="emergency?"
          background="#C95757"
          description="create an alert here"
          fontColor="white"
        />
      </Link>
      <ContactsList contacts={users} />
      <Link href="/protected/prepare">
        <CardContainerFramerComponent
          title="prepare for the future"
          background="#1C3036"
          description="Looking to prepare for the upcoming storm? Learn and prepare here."
          fontColor="white"
        />
      </Link>
      <Link href="/protected/weather">
        <CardContainerFramerComponent
          title="chicago, -2°F"
          background="#A1D6E3"
          description="mostly cloudy"
          fontColor="black"
        />
      </Link>
      <Link href="/protected/learn">
        <CardContainerFramerComponent
          title="learn more about extreme weather in chicago"
          background="#DFE3A1"
          description="heat waves, polar vertexes, tornadoes.."
          fontColor="black"
        />
      </Link>
    </div>
  );
}
