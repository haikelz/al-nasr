import { Image, Heading, Paragraph } from "./ui";
import { Button } from "./ui/button";
import { Layout } from "./layout";

export default function Banner() {
  return (
    <Layout className="pt-10">
      <div className="flex w-full justify-center flex-col-reverse md:flex-row md:space-x-4 items-center">
        <div>
          <div className="bg-[#C1FFFA] w-fit rounded-full mt-10 md:mt-0 mb-7 px-4 py-1">
            <span className="text-[#1DA599] font-medium font-nunito text-2xl">
              No. 1 in Indonesia
            </span>
          </div>
          <div>
            <Heading>
              Make it easy for your Umrah worship with Al Nasr Travel
            </Heading>
            <Paragraph className="leading-relaxed mb-5">
              Facilitate your Umrah pilgrimage with us, we already have hundreds
              of thousands of customers, you can go for Umrah to Mecca and
              Medina
            </Paragraph>
            <Button type="button" aria-label="contact use" variant="primary">
              Contact Us
            </Button>
          </div>
        </div>
        <Image src="/assets/hero.png" alt="hero" />
      </div>
    </Layout>
  );
}
