import img1 from "../../assets/images/contact/img1-contact.png";
import ContactForm from "./components/ContactForm";
import ContactInfoCard from "./components/ContactInfoCard";
import LocationCard from "./components/LocationCard";
import Banner from "../../components/Banner";
import banner from "../../assets/images/contact/banner-contact.jpg";
export default function Contact() {
  return (
    <div className="bg-light min-h-screen mb-16">
      <Banner title="Contact" image={banner} />
      <div className="container mx-auto pt-8 px-8">
        <div className="mb-16 px-16">
          <ContactInfoCard image={img1} />
        </div>
        <LocationCard />
        <ContactForm />
      </div>
    </div>
  );
}
