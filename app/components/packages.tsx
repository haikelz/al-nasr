import { altReplace, tw } from "~/lib/helpers";
import { packagesList } from "~/lib/utils/data";
import { Layout } from "./layout";
import { Button, Heading, Image, Paragraph } from "./ui";

export default function Packages() {
  return (
    <Layout className="md:pt-20 pb-20">
      <div
        id="packages"
        className="flex flex-col justify-center w-full items-center"
      >
        <div className="text-start md:text-center w-full md:w-[821px] md:h-[234px]">
          <Heading>Al Nasr Special Umrah and Hajj Packages</Heading>
          <Paragraph>
            Choose your package according to your needs, guaranteed cheap and
            complete
          </Paragraph>
        </div>
        <div
          className={tw(
            "grid grid-cols-1",
            "sm:grid-cols-2 lg:grid-cols-3",
            "grid-rows-1 mt-20 gap-14"
          )}
        >
          {packagesList.map((item) => (
            <div key={item.id} className="rounded-lg bg-white drop-shadow-lg">
              <div className="p-6">
                <Image
                  className="cursor-pointer"
                  src={`/assets/${item.image}`}
                  alt={altReplace(item.image)}
                />
              </div>
              <div className="flex pl-6 justify-between items-center">
                <span className="text-[#FFC265] font-bold text-base">
                  {item.package}
                </span>
                <div className="bg-[#C1FFFA] rounded-l-full py-3 px-10">
                  <span className="text-[#1DA599] font-nunito font-bold text-base">
                    {item.seller}
                  </span>
                </div>
              </div>
              <div className="px-6 my-6">
                <Paragraph className="text-base font-bold font-kufam">
                  {item.name}
                </Paragraph>
                <Paragraph className="font-bold font-kufam text-xl mt-2">
                  $ {item.price}/<span className="text-[#1DA599]"> person</span>
                </Paragraph>
                <div className="flex my-6 justify-start space-x-4 w-full items-center">
                  {item.icons.map((icon, index) => (
                    <div
                      key={index + 1}
                      className="bg-[#C1FFFA] rounded-xl p-2"
                    >
                      <Image
                        src={`/assets/${icon}`}
                        alt={altReplace(icon)}
                        width={24}
                        height={24}
                      />
                    </div>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="text-[#FFC265] font-semibold"
                >
                  View Detail
                </Button>
              </div>
            </div>
          ))}
          <div className="rounded-lg bg-white drop-shadow-lg h-[549px] md:h-full flex justify-center items-center text-center">
            <Paragraph className="font-kufam text-[#1DA599]">
              Soon Program
            </Paragraph>
          </div>
        </div>
      </div>
    </Layout>
  );
}
