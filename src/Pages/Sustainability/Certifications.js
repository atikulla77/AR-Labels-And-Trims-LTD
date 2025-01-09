import React from "react";
import DynamicBanner from "../../Shared/DynamicBanner/DynamicBanner";
import CertificationsData from "./CertificationsData/CertificationsData";
import dynamicBannerImage from "../../Assets/aboutUs.jpg";

const Certifications = () => {
  return (
    <div className="mt-[7rem]">
      {/*  banner section  */}
      <DynamicBanner webTittle={true} bg={dynamicBannerImage} />

      {/*  Apply Online section  */}
      <CertificationsData />
    </div>
  );
};

export default Certifications;
