import { tw } from "~/lib/helpers";
import { Layout } from "./layout";
import { Heading, Image, Paragraph } from "./ui";

const facilitiesList = [
  {
    id: 1,
    title: "Safety & Security",
    description: "We take care of your security in 24 hours",
    icon: "safety.svg",
    alt: "safety",
  },

  {
    id: 2,
    title: "Conseling",
    description: "Provide counseling to stay fit spiritually and religius",
    icon: "conseling.svg",
    alt: "conseling",
  },
  {
    id: 3,
    title: "Vehicle in Saudi",
    description: "Bus and Car Vehicles While in Saudi",
    icon: "bus.svg",
    alt: "vehicle",
  },
  {
    id: 4,
    title: "Health in Saudi",
    description: "Free Health Facilities for every customer",
    icon: "health.svg",
    alt: "health",
  },
  {
    id: 5,
    title: "Hotel Rate 5",
    description: "5 star hotel accommodation every customer",
    icon: "bedroom.svg",
    alt: "bedroom",
  },
  {
    id: 6,
    title: "Food & Drink",
    description: "Provide food and drinks while in Saudi",
    icon: "food.svg",
    alt: "food",
  },
  {
    id: 7,
    title: "Membership",
    description: "Obtain a membership card for each customer",
    icon: "membership.svg",
    alt: "membership",
  },
  {
    id: 8,
    title: "Vaccine",
    description: "Free meningitis vaccine for all customers",
    icon: "vaccine.svg",
    alt: "vaccine",
  },
];

export default function Facilities() {
  return (
    <Layout className="bg-[#F3FFFE] py-10 md:py-20">
      <div className="flex justify-center items-center w-full flex-col">
        <div className="text-start md:text-center flex flex-col justify-center items-center">
          <Heading>Facilities We Provide For You</Heading>
          <Paragraph className="md:w-[660px] w-full">
            We provide comfort for our customers, with the various facilities we
            provide that we provide
          </Paragraph>
        </div>
        <div
          className={tw(
            "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
            "auto-rows-fr mt-[50px] gap-x-8 gap-y-10"
          )}
        >
          {facilitiesList.map((item) => (
            <div
              key={item.id}
              className={tw(
                "bg-white p-4 drop-shadow-lg rounded-md flex space-x-4",
                "justify-start items-start hover:scale-105 transition-all cursor-pointer"
              )}
            >
              <div className="bg-[#C1FFFA] p-2 rounded-lg">
                <Image
                  width={24}
                  height={24}
                  src={`/assets/${item.icon}`}
                  alt={item.alt}
                />
              </div>
              <div>
                <h4 className="text-[#4A4A4A] text-xl font-semibold font-kufam">
                  {item.title}
                </h4>
                <Paragraph className="text-sm mt-2">
                  {item.description}
                </Paragraph>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
