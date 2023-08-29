import { tw } from "~/lib/helpers";
import { menusFooterList, socialMediaList } from "~/lib/utils/data";
import { Image, Paragraph } from "./ui";
import { Link } from "@remix-run/react";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#1DA599] w-full flex justify-center items-center p-4"
    >
      <div className="flex justify-center items-center flex-col w-full max-w-7xl">
        <div className="flex md:space-x-12 flex-col md:flex-row py-16 justify-between items-start w-full">
          <div className="md:w-[294px] w-full">
            <div className="bg-white py-4 px-6 w-fit rounded-lg">
              <Image
                src="/assets/text-logo.svg"
                className="w-[238px]"
                alt="text logo"
              />
            </div>
            <Paragraph className="text-base mt-4 text-white">
              Comfortable and Quiet Worship, Our Service No. 1 in Indonesia
            </Paragraph>
          </div>
          <div
            className={tw(
              "flex flex-col md:flex-row space-y-8",
              "md:space-y-0 md:mt-0 mt-10",
              "w-full justify-end items-start md:space-x-8"
            )}
          >
            {menusFooterList.map((item) => (
              <div key={item.id}>
                <h4 className="font-nunito text-2xl font-bold text-white">
                  {item.title}
                </h4>
                <ul className="flex justify-start items-start space-y-2 mt-4 flex-col">
                  {item.list.map((name, index) => (
                    <span
                      key={index + 1}
                      className="text-xl font-nunito font-medium text-white"
                    >
                      {name}
                    </span>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div
          className={tw(
            "flex py-7 flex-col md:flex-row justify-between",
            "w-full items-center border-t border-t-white"
          )}
        >
          <Paragraph className="text-base text-white">
            Copyright © 2006 - 2023 Al Nasr Travel | All Reserverd
          </Paragraph>
          <div className="flex justify-center mt-7 md:mt-0 items-center space-x-3">
            {socialMediaList.map((item) => (
              <Link
                key={item.id}
                to={item.alt}
                rel="noopener noreferrer"
                target="_blank"
              >
                <button
                  key={item.id}
                  type="button"
                  aria-label={item.alt}
                  className="bg-white rounded-lg hover:-translate-y-1 transition-all p-2 drop-shadow-md"
                >
                  <Image src={`/assets/${item.src}`} alt={item.alt} />
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
