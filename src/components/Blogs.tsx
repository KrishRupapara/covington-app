import CarouselComponent from "./CarouselComponent";

export default function BlogsPage() {
  return (
    <section className="w-screen" style={{ height: "calc(100vh - 6rem)" }}>
      <div className="flex items-center justify-center text-xl font-extrabold h-1/6 tracking-widen">
        LATEST FROM BLOG
      </div>
      <div className="w-screen mx-auto h-5/6">
        <CarouselComponent />
      </div>
    </section>
  );
}
