import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button, Heading, Image, Paragraph } from "./ui";
import { Layout } from "./layout";

const benefitsList = [
  {
    id: 1,
    icon: "/assets/airplane.svg",
    description: "Flight Jakarta Saudi - Saudi Jakarta",
  },
  {
    id: 2,
    icon: "/assets/ticket.svg",
    description: "Tickets are included in the cost",
  },
  {
    id: 3,
    icon: "/assets/hotel.svg",
    description: "Comfortable hotel with a rating of 4",
  },
  {
    id: 4,
    icon: "/assets/visa.svg",
    description: "We cover the Visa Fee and it's Included",
  },
];

export default function About() {
  return (
    <Layout className="py-20">
      <div
        id="about-us"
        className="flex flex-col md:flex-row justify-center md:space-x-14 items-start"
      >
        <Image width={506} height={591} src="/assets/about.png" alt="about" />
        <div className="mt-7">
          <div>
            <Heading>A Wonderful Agency To Fulfill your Dreams</Heading>
            <Paragraph>
              The Hajj and Umrah pilgrimages are smooth, the heart is clean. we
              have been trusted since 2006 and have obtained a license from
              SAUDI ARABIA to become this travel agency.
            </Paragraph>
            <ul className="w-full flex flex-col justify-start items-start space-y-4 my-8">
              {benefitsList.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-start items-start md:justify-center md:items-center space-x-3"
                >
                  <div className="bg-[#C1FFFA] w-9 h-9 flex items-center justify-center rounded-md">
                    <LazyLoadImage src={item.icon} />
                  </div>
                  <Paragraph>{item.description}</Paragraph>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex space-x-4 md:space-x-8">
            <Button variant="primary">Learn More</Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
