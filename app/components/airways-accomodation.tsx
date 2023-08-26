import { tw } from "~/lib/helpers";
import { airwaysList } from "~/lib/utils/data";
import { Layout } from "./layout";
import { Heading, Image, Paragraph } from "./ui";

export default function AirwaysAccomodation() {
  return (
    <Layout className="pb-10 md:pb-20">
      <div
        className={tw(
          "overflow-hidden airplane-list overflow-x-scroll",
          "flex-col md:flex-row flex md:space-x-12 w-full justify-center items-center"
        )}
      >
        <div
          className={tw(
            "md:w-[400px] w-full flex",
            "md:justify-start justify-start items-start",
            "md:items-start space-y-4 flex-col"
          )}
        >
          <Heading className="text-[32px] leading-relaxed">
            Airways Accomadation
          </Heading>
          <Paragraph>
            We cooperate with several airlines for Umrah and Hajj{" "}
          </Paragraph>
          <div className="bg-[#C1FFFA] w-fit px-4 py-1 rounded-3xl">
            <div className="flex justify-center items-center space-x-2">
              <Image
                src="/assets/star.svg"
                alt="star"
                className="w-[20px] h-[20px]"
              />

              <span className="text-[#1DA599] font-medium text-xl font-nunito">
                5.0 Rating
              </span>
            </div>
          </div>
        </div>
        <div
          className={tw(
            "flex flex-col justify-center items-center",
            "md:justify-start w-full md:flex-row mt-10 md:mt-0",
            "space-y-10 md:space-y-0 md:space-x-10"
          )}
        >
          {airwaysList.map((item) => (
            <Image key={item.id} src={`/assets/${item.src}`} alt={item.alt} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
