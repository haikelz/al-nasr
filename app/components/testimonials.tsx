import { tw } from "~/lib/helpers";
import {
  testimonialsSectionOne,
  testimonialsSectionTwo,
} from "~/lib/utils/data";
import { Layout } from "./layout";
import { Button, Heading, Image, Paragraph } from "./ui";

export default function Testimonials() {
  return (
    <Layout className="pt-10 md:pt-20 pb-10">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex w-full justify-end items-end flex-col">
          <div className="flex w-full justify-end items-end text-end flex-col">
            <Heading className="md:w-[860px] w-full">
              Testimonials from our customers
            </Heading>
            <div
              className={tw(
                "flex w-full flex-col-reverse",
                "md:flex-row justify-end md:justify-between md:items-center",
                "items-end"
              )}
            >
              <Button
                variant="primary"
                className="flex justify-center md:mt-0 mt-7 items-center space-x-4"
              >
                <Image src="/assets/arrow-left.svg" alt="arrow left" />
                <span>Previous</span>
              </Button>
              <Paragraph className="md:w-[660px] w-full text-end">
                We have 100.000+ customers, here are our customer testimonials
              </Paragraph>
            </div>
          </div>
        </div>
        <div className="my-10 w-full space-y-10 flex flex-col justify-center items-center overflow-hidden">
          <div className="flex justify-center animate-marquee-two w-full p-1 items-center">
            {testimonialsSectionOne.map((item) => (
              <div
                key={item.id}
                className={tw(
                  "drop-shadow-lg p-4 flex",
                  "justify-center items-center bg-white rounded-lg mr-10"
                )}
              >
                <div className="flex space-x-4 w-full justify-between items-start">
                  <div className="w-[100px] flex flex-col justify-center items-center">
                    <Image src={`/assets/${item.image}`} alt={item.alt} />
                    <div
                      className={tw(
                        "bg-[#C1FFFA] mt-3 w-fit rounded-full px-3 py-1",
                        "flex justify-center items-center space-x-3"
                      )}
                    >
                      <Image
                        className="w-3 h-3"
                        alt="star"
                        src="/assets/star.svg"
                      />
                      <span className="font-semibold text-sm font-nunito text-[#1DA599]">
                        {item.star}
                      </span>
                    </div>
                  </div>
                  <div className="w-[301px]">
                    <div className="bg-[#C1FFFA] w-fit px-4 py-2 rounded-full">
                      <span className="font-nunito text-sm font-semibold text-[#1DA599] text-start">
                        {item.label}
                      </span>
                    </div>
                    <h4 className="font-semibold mt-2 mb-1 text-2xl text-[#4A4A4A] leading-relaxed">
                      {item.name}
                    </h4>
                    <Paragraph className="text-sm font-medium w-[301px] leading-relaxed">
                      {item.review}
                    </Paragraph>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full animate-marquee-one justify-center p-1 items-center">
            {testimonialsSectionTwo.map((item) => (
              <div
                key={item.id}
                className={tw(
                  "drop-shadow-lg p-4 mr-10 flex w-[476px]",
                  "justify-center items-center bg-white rounded-lg"
                )}
              >
                <div className="flex space-x-4 w-full justify-between items-start">
                  <div className="flex justify-center items-center w-[100px] flex-col">
                    <Image src={`/assets/${item.image}`} alt={item.alt} />
                    <div
                      className={tw(
                        "bg-[#C1FFFA] mt-3 w-fit rounded-full px-3 py-1",
                        "flex justify-center items-center space-x-3"
                      )}
                    >
                      <Image
                        className="w-3 h-3"
                        alt="star"
                        src="/assets/star.svg"
                      />
                      <span className="font-semibold text-sm font-nunito text-[#1DA599]">
                        {item.star}
                      </span>
                    </div>
                  </div>
                  <div className="w-[301px]">
                    <div className="bg-[#C1FFFA] w-fit px-4 py-2 rounded-full">
                      <span className="font-nunito text-sm font-semibold text-[#1DA599] text-start">
                        {item.label}
                      </span>
                    </div>
                    <h4 className="font-semibold mt-2 mb-1 text-2xl text-[#4A4A4A] leading-relaxed">
                      {item.name}
                    </h4>
                    <Paragraph className="text-sm font-medium w-[301px] leading-relaxed">
                      {item.review}
                    </Paragraph>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex justify-end items-center">
          <Button
            variant="primary"
            className="flex justify-center items-center space-x-4"
          >
            <span>Next</span>
            <Image src="/assets/arrow-right.svg" alt="arrow right" />
          </Button>
        </div>
      </div>
    </Layout>
  );
}
