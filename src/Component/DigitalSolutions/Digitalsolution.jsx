import React from "react";
import { Link } from "react-router-dom";
import "../DigitalSolutions/digitalsolutions.css";
import Digitalswiper from "../digitasolutionswiper/Digitalswiper";

const Digitalsolution = () => {
  return (
    <section className="bg-[#fbf9f9]">
      <div className="gap-10 p-5 grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center  ">
        <div className="relative digitalsolutions">
          <img src="./digitalsolutions.jpg" className=" rounded" />
          <div className="absolute bottom-1 rounded-tl rounded-bl p-8 w-[300px] right-0 bg-[#fecf5b]">
            <span className="font-Rajdhani text-[22px] leading-7 font-bold text-[091a38] ">
              We are true partners who care about your success.
            </span>
          </div>
        </div>
        <div className="flex justify-center items-start text-start flex-col gap-3">
          <span className="font-Rajdhani text-lg font-bold text-[#ef7f1a] leading-[21.6px]">
            Digital Solutions
          </span>
          <h3 className="font-Rajdhani text-[43.95px] leading-[52.74px] font-bold text-[#091a38]">
            Let’s Design, Develop & Launch Your brand Online Together
          </h3>
          <p className="font-Pontano text-[17px] leading-[30px] font-medium text-[#091a38]">
            At Syncabout Solutions, we specialize in comprehensive web design
            and development services. Join us as we design, develop, and launch
            your brand online, creating a digital footprint that stands out.
            Let’s embark on this exciting journey together.
          </p>
          <p className="font-Pontano text-[17px] leading-[30px] font-medium text-[#091a38]">
            With a dedicated team of professionals, We bring your vision to
            life, ensuring not just a website but digital But a digital
            experience that engages and converts. Enhance Your Online Presence
            with Syncabout – Where innovation meets design.
          </p>
          <Link
            className="font-Pontano font-bold text-white text-base p-2 md:p-4 bg-[#091a38] hover:bg-[#ef7f1a] rounded"
            to={"/"}
          >
            Let’s Discuss Your Idea
          </Link>
        </div>
      </div>
      <div className="grid place-content-center mt-6 gap-4 p-5 place-items-start grid-cols-1 md:grid-cols-2">
        <div>
          <span className="font-Rajdhani text-start text-lg font-bold text-[#ef7f1a] leading-[21.6px]">
            WE WORK WITH POPULAR BRANDS
          </span>
          <h3 className="font-Rajdhani text-[43.95px] text-start leading-[52.74px] font-bold text-[#091a38]">
            Your Trusted Digital Partner
          </h3>
        </div>
        <div>
          <span className="flex items-start justify-center flex-col font-Pontano text-xl leading-9 font-normal text-[#091a38] ">
            Become part of a global success story with us as your trusted
            digital partner. Unlock incredible growth and innovation as we
            navigate the digital landscape together. Your success is our
            mission.
          </span>
        </div>
      </div>
      <Digitalswiper />
    </section>
  );
};

export default Digitalsolution;
