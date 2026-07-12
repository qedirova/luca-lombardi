import { Metadata } from "next";
import { ContactForm } from "./widgets/ContactForm";

export const metadata: Metadata = {
  title: {
    absolute: "Contact us",
  },
};

export default function ContactPage() {
  return (
    <div className="pt-20 pb-30 flex flex-col items-center gap-15">
      <div className="flex flex-col items-center text-center gap-5">
        <h1 className="text-3xl sm:text-4xl font-semibold ">
          Get In Touch With Us!
        </h1>
        <p className="max-w-150 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          aspernatur blanditiis earum expedita nobis qui repellendus tenetur
          unde ut voluptate.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
