import Carousel from "./ui/Carousel";

export default function BlogsPage() {
  return (
    <section
      className="w-screen overflow-hidden"
      style={{ height: "calc(100vh - 6rem)" }}
    >
      <div className="h-1/6 flex items-center justify-center border-2 text-xl font-extrabold tracking-widen">
        LATEST FROM BLOG
      </div>
      <div className="h-5/6">
        <Carousel />
      </div>
    </section>
  );
}
