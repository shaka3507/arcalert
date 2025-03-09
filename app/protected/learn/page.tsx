import HeaderFramerComponent from "@/framer/header";
import WeatherCardFramerComponent from "@/framer/weather-card";
import BlendedImage from "@/components/ui/blended-image";
import { Book } from "lucide-react";


export default function Learn() {
  const events = [
    {
      id: "blizzard",
      title: "Blizzard",
      description:
        "A blizzard is a severe snowstorm with strong sustained winds and low visibility.",
      imageUrl:
        "https://i.abcnewsfe.com/a/af07437e-788e-456f-8956-ffbf89954116/buffalo-storm-gty-jef-221228_1672260702802_hpMain_16x9.jpg?w=608",
    },
    {
      id: "tornado",
      title: "Tornado",
      description:
        "A tornado is a rapidly rotating column of air that is in contact with both the surface of the Earth and a cumulonimbus cloud.",
      imageUrl:
        "https://amsweatherband.org/sites/weatherband/assets/Image/Tornado%20Story.jpg",
    },
    {
      id: "extreme-cold",
      title: "Extreme Cold",
      description:
        "Extreme cold can cause severe health problems, and it can be dangerous if not properly prepared for.",
      imageUrl:
        "https://media.cnn.com/api/v1/images/stellar/prod/230201083651-yakutsk-weather-0114.jpg?c=original",
    },
    {
      id: "fire",
      title: "Fire",
      description:
        "A fire is a rapid oxidation process that releases light and heat and can cause extensive damage.",
      imageUrl:
        "https://www.firstalertstore.com/store/images/products/large_images/HOME1-First-Alert-Rechargeable-Home-Fire-Extinguisher-UL-Rated-1-A-10-BC-Red-3.jpg",
    },
    {
      id: "wildfire",
      title: "Wildfire",
      description:
        "A wildfire is an uncontrolled fire in an area of combustible vegetation occurring in rural areas.",
      imageUrl: "https://capstonefire.com/wp-content/uploads/2018/04/cedarfire.jpg",
    },
    {
      id: "hurricane",
      title: "Hurricane",
      description:
        "A hurricane is a tropical cyclone with sustained winds of at least 74 miles per hour.",
      imageUrl:
        "https://media.sciencephoto.com/image/e1550101/800wm/E1550101-Satellite_image_of_Hurricane_Floyd.jpg",
    },
  ]
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="w-full p-4">
        <div className="flex flex-wrap gap-12 items-center justify-center overflow-y-auto">
          {events.map((event) => (
            <WeatherCardFramerComponent
              key={event.id}
              title={event.title.toUpperCase()}
              title2={event.description}
              // @ts-ignore
              image={event.imageUrl}
              background="#000"
            />
          ))}
        </div>
      </main>
    </div>
  );
}