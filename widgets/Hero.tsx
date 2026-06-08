import { Container } from "@/components/Container";

export function Hero() {
  return (
    <div className="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/heroImage.jpg')] bg-center bg-cover h-[60vh]">
      <Container className="justify-center h-full flex flex-col  gap-8 text-white ">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl md:text-6xl ">
          Timeless Luxury, Redefined
        </h1>
        <p>
          Discover curated pieces that embody heritage, craftsmanship, and quiet
          sophistication.
        </p>
      </Container>
    </div>
  );
}
