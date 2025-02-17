import FrameComponent1 from "../components/FrameComponent1";

import SimularProjects from "../components/SimularProjects";

const AdminDashboard = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-end justify-start pt-[26px] pb-[225px] pr-[68px] pl-14 box-border gap-[52px] leading-[normal] tracking-[normal] mq900:gap-[26px] mq1275:pl-7 mq1275:pr-[34px] mq1275:box-border">
      <header className="self-stretch flex flex-row items-start justify-between gap-[20px] text-left text-11xl text-black font-inter">
        <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
          <a className="[text-decoration:none] relative font-medium text-[inherit] whitespace-nowrap">
            MANAGEMENT
          </a>
        </div>
        <div className="h-[]w-[220px] flex flex-row items-end justify-start gap-[38px] text-sm">
          
              
          <button className="w-[187px]bg-transparant-100  hover:bg-sky-700 ... border-[1px] border-solid border-royalblue-200

             top-[0px] left-[0px] relative rounded-6xs w-full h-full cursor-pointer z-[1]">
               Admin
             </button>
          
          <div className="h-[58px] w-[58px] relative">
            <img
              className="absolute top-[5.9px] left-[5.9px] rounded-64xl w-[45.6px] h-[46.2px] object-contain"
              loading="lazy"
              alt=""
              src="/whatsapp-image-20240318-at-1224-1@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full z-[1] border-[0px] border-solid border-lightgray" />
          </div>
        </div>
      </header>
      <FrameComponent1 />
      <SimularProjects />
    </div>
  );
};

export default AdminDashboard;
