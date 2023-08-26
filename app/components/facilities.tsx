import { tw } from "~/lib/helpers";
import { facilitiesList } from "~/lib/utils/data";
import { Layout } from "./layout";
import { Heading, Image, Paragraph } from "./ui";

export default function Facilities() {
  return (
    <Layout className="bg-[#F3FFFE] py-10 md:py-20">
      <div
        id="facilities"
        className="flex justify-center items-center w-full flex-col"
      >
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
