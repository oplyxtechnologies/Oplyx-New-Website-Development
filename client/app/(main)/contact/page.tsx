import ContactForm from "@/components/contact/form";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us for any inquiries or support.",
};

export default function page() {
  return (
    <div>
      <ContactForm />
    </div>
  );
}
