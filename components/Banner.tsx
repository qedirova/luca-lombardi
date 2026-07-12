import clsx from "clsx";
import { Container } from "./Container";

interface BannerProps {
  title: string;
  text: string;
  bgClass: string;
}

export function Banner({ title, text, bgClass }: BannerProps) {
  return (
    <div
      className={clsx(bgClass, "h-[60vh] bg-center bg-cover text-[#f6f6f6]")}
    >
      <Container className="flex flex-col items-center text-center justify-center h-full gap-8 sm:items-start sm:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p>{text}</p>
      </Container>
    </div>
  );
}
