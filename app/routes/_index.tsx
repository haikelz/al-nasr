import About from "~/components/about";
import AirwaysAccomodation from "~/components/airways-accomodation";
import Banner from "~/components/banner";
import Facilities from "~/components/facilities";
import Footer from "~/components/footer";
import Gallery from "~/components/gallery";
import Navbar from "~/components/navbar";
import Packages from "~/components/packages";
import Testimonials from "~/components/testimonials";

export default function Index() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#FFCE83]/0 to-[#FFC265]/5 w-full pb-10 md:pb-24 md:pt-10">
        <Navbar />
        <Banner />
      </div>
      <About />
      <Packages />
      <AirwaysAccomodation />
      <Facilities />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}
