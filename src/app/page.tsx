import About from "@/components/About";
import HomeComponent from "@/components/HomeComponent";
import LatestProj from "@/components/LatestProj";
import WhyApp from "@/components/WhyApp";
import BlogsPage from "@/components/Blogs";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <HomeComponent />
      <LatestProj />
      <WhyApp />
      <About />
      <BlogsPage />
      <Footer />
    </>
  );
}
