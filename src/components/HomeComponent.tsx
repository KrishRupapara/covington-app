import Image from "next/image";

export default function HomeComponent() {
  return (
    <section>
      <h1>Home</h1>
      <Image
        src="/images/bg-cover.jpeg"
        width={200}
        height={200}
        alt="Next.js Logo"
      />
    </section>
  );
}
