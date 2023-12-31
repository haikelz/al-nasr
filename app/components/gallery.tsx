import { footagesList } from "~/lib/utils/data";
import { Layout } from "./layout";
import { Heading, Image, Paragraph } from "./ui";

export default function Gallery() {
  return (
    <Layout className="bg-[#F3FFFE] pt-10 md:pt-20 pb-20">
      <div
        id="gallery"
        className="flex justify-center w-full items-center flex-col text-start md:text-center"
      >
        <Heading>Gallery Footage In Saudi Arabia</Heading>
        <Paragraph>
          We provide comfort for our customers, with the various facilities we
          provide that we provide
        </Paragraph>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6 h-full md:h-[743px] w-full grid-rows-2">
          <div className="overflow-hidden md:row-span-full rounded-lg w-full">
            <Image
              src="/assets/footage-1.png"
              alt="footage 1"
              className="transition-all hover:scale-105 h-full w-full cursor-pointer"
            />
          </div>
          {footagesList.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-lg w-full">
              <Image
                src={item.src}
                alt={item.alt}
                className="cursor-pointer transition-all hover:scale-105 w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
