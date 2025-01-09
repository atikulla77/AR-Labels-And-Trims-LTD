import React from "react";

import DynamicBanner from "../../Shared/DynamicBanner/DynamicBanner";
import ContactMap from "./ContactMap/ContactMap";
import OurNewsLetter from "../Home/OurNewsLetter/OurNewsLetter";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactUsImage from "../../Assets/contactUs.jpg";

const ContactUs = () => {
  return (
    <div className="mt-[7rem]">
      {/*  banner section  */}
      <DynamicBanner webTittle={false} tittle={"Contact Us"} bg={ContactUsImage} />

      {/*  Contact Information section  */}
      <ContactInfo />

      {/*  Map section  */}
      <ContactMap />

      {/*  Our News Letter section  */}
      <OurNewsLetter />
    </div>
  );
};

export default ContactUs;
