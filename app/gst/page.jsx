import React from "react";
import Contact from "../../components/Contact";
import GstInfo from "../../components/GstInfo";

function page() {
  return (
    <div>
      <div className="w-full text-[#012AB1] relative bg-white overflow-hidden flex-wrap flex flex-col items-center justify-center  mt-36 ">
        <section className="flex flex-col flex-wrap items-start justify-start ">
          <div className="flex flex-row items-center flex-wrap justify-center py-0 pr-[21px] pl-5 ">
            <GstInfo />
          </div>
        </section>
        <section className="w-full mt-28 ">
          <Contact />
          {/* <FrameComponent /> */}
        </section>
      </div>
    </div>
  );
}

export default page;
