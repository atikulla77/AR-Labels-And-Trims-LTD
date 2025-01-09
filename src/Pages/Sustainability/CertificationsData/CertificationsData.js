import React from "react";
import certifications1 from "../../../Assets/Certifications/certification_1.jpg";
import certifications2 from "../../../Assets/Certifications/certification_2.jpg";
import certifications3 from "../../../Assets/Certifications/certification_3.jpg";
import certifications4 from "../../../Assets/Certifications/certification_4.jpg";
import certifications5 from "../../../Assets/Certifications/certification_5.jpg";
import certifications6 from "../../../Assets/Certifications/certification_6.jpg";
import certifications7 from "../../../Assets/Certifications/certification_7.jpg";
import certifications8 from "../../../Assets/Certifications/certification_8.jpg";

const CertificationsData = () => {
  const CertificationsJson = [
    {
      id: 1,
      tittle: "Certification of ISO-9001-2015",
      image: certifications1,
    },
    {
      id: 2,
      tittle: "Certification of ISO-14001-2015",
      image: certifications2,
    },
    {
      id: 3,
      tittle: "Certification of Oeko-Tex",
      image: certifications3,
    },
    {
      id: 4,
      tittle: "Certification of GRS",
      image: certifications4,
    },
    {
      id: 5,
      tittle: "Certification of GOTS",
      image: certifications5,
    },
    {
      id: 6,
      tittle: "Certification of amfor BSCI",
      image: certifications6,
    },
    {
      id: 7,
      tittle: "Certification of FSC",
      image: certifications7,
    },
    {
      id: 8,
      tittle: "Certification of BCI",
      image: certifications8,
    },
  ];

  return (
    <div className="bg-[#fff] GeologicaFont">
      <main className="xl:w-[1230px] w-[96%] mx-auto  py-[3rem] px-5">
        <div className="w-full text-center text-black relative z-10 sm:pb-[25px] pb-[15px]">
          <h1 className="[@media(min-width:800px)]:text-[30px] [@media(min-width:600px)]:text-[27px] [@media(min-width:500px)]:text-[25px] text-[22px] font-semibold">
            Our Certifications
          </h1>
          <div className="flex items-center mt-[5px] justify-center">
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[22px] w-[19px] [@media(min-width:420px)]:h-[6px] h-[5px] mx-[5px] bg-[#018496] inline-flex"></div>
            <div className="[@media(min-width:420px)]:w-[21px] w-[18px] [@media(min-width:420px)]:h-[3px] h-[2px] bg-[#FA0472] inline-flex"></div>
          </div>
        </div>
        <div className="">
          {" "}
          <div className="flex flex-wrap justify-between ">
            {CertificationsJson.map((key) => {
              return (
                <div
                  className="w-[250px] h-[250px] rounded-[12px] flex justify-center items-center my-[15px] py-[10px] shadow-[0_0px_9px_1px_#7d7d7d24] mx-auto"
                  key={key.id}
                >
                  <div className="w-full h-full flex flex-col justify-center my-auto items-center text-center">
                    <div className="w-[150px] h-[150px] mb-4">
                      <img
                        alt="team"
                        className="flex-shrink-0 rounded-[50%] w-full object-cover object-center shadow-[0_0px_9px_1px_#7d7d7d24]"
                        src={key.image}
                      />
                    </div>
                    <h2 className="title-font font-medium [@media(min-width:500px)]:text-[16px] text-[15px] text-gray-900 [@media(min-width:500px)]:px-[10px] px-[15px]">
                      {key.tittle}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CertificationsData;
