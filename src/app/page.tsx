import About from "@/components/About";
import HomeComponent from "@/components/HomeComponent";
import LatestProj from "@/components/LatestProj";
import WhyApp from "@/components/WhyApp";
import Loading from "./loading";
import BlogsPage from "@/components/Blogs";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      {/* <Loading /> */}
      <HomeComponent />
      <LatestProj />
      <WhyApp />
      <About />
      <BlogsPage />
      <Footer />
    </>
  );
}
