import Link from "next/link";

export default function Homepage() {
  return (
    <div className="bg-[#0a0f22]">
      <div className="my-auto pt-6 pb-36 max-w-1400px lg:max-w-[1400px] 2xl:max-w-[1560px] md:max-w-[1200px] sm:max-w-[1020px] mx-auto px-4 2xl:px-12 lg:px-8">
        <div className="absolute w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,rgba(59,130,246,0)_70%)] pointer-events-none z-2 opacity-0 transition-opacity duration-300 blur-xl"></div>
        <div className="flex justify-center mb-28 mt-16">
          <svg
            className="absolute w-[100px] h-[100px] animate-[pulse_5s_infinite] filter drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"
            viewBox="0 0 100 100"
          >
            <path
              d="M20 40 C20 25, 40 15, 50 15 C60 15, 80 25, 80 40 C80 50, 70 60, 60 65 C70 70, 80 80, 80 90 C80 105, 60 115, 50 115 C40 115, 20 105, 20 90 C20 80, 30 70, 40 65 C30 60, 20 50, 20 40 Z"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="2"
            ></path>
          </svg>

          <svg
            className="absolute w-[100px] h-[100px] animate-[glow_3s_infinite]"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M35 40 H65 M50 40 V80 M35 60 H65 M25 50 H75"
              stroke="#93c5fd"
              strokeWidth="1.5"
            />
            <circle cx="35" cy="40" r="2" fill="#93c5fd" />
            <circle cx="65" cy="40" r="2" fill="#93c5fd" />
            <circle cx="50" cy="60" r="2" fill="#93c5fd" />
            <circle cx="35" cy="80" r="2" fill="#93c5fd" />
            <circle cx="65" cy="80" r="2" fill="#93c5fd" />
          </svg>
        </div>
        <p className="font-[800] text-[#397EF5] text-[48px] flex justify-center">
          Clin Technologies
        </p>
        <p className="text-[28px] font-[400] text-[#8998AD] text-center">
          Revolutionizing clinical documentation through{" "}
          <span className="text-[#F59E0B] font-[600]">HIPAA COMPLIANT</span>{" "}
          advanced artificial
          <br /> intelligence, giving healthcare providers more time forwhat
          truly matters — patient care. try it for <br />{" "}
          <span className="text-[#F59E0B] font-[600]">FREE</span> today
        </p>

        <div className="mt-12">
          <p className="text-[23px] font-[400] text-[#E2E8F0] text-center">
            Our sophisticated AI platform intelligently processes clinical{" "}
            <br />
            conversations, creating accurate documentation that integrates{" "}
            <br /> with your existing EMR system.
          </p>
        </div>
        <div className="flex justify-center mt-16 gap-6 mb-6">
          <Link
            className="border-[#3b82f6] border-2 hover:bg-[#0E1B36] text-[#E5E6E9] font-[400] text-[16px] px-6 py-3 rounded-[20px]"
            href={"/login"}
          >
            Login
          </Link>

           <Link className="bg-[#2D6EEF] text-[#FFFFFF] font-[400] text-[16px] px-6 py-3 rounded-[20px] hover:shadow-[#2d6eefe8] hover:shadow-md hover:transition-all duration-300" href={'/signup'}>Signup</Link>
        </div>
        <div className="absolute mt-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-[fadeIn_1s_forwards_2s]">
          <div className="w-[24px] h-[38px] border-2 border-[rgba(148,163,184,0.5)] rounded-[12px] relative">
            <div className="absolute top-[6px] left-1/2 transform -translate-x-1/2 w-[6px] h-[6px] bg-[#60a5fa] rounded-full animate-[scrollDown_2s_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
}
