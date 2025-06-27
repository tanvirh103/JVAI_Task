import Link from "next/link";

export default function Login() {
  return (
    <div className="my-auto">
      <center className="">
          <div className="flex justify-center mb-28 mt-24">
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
        <div className="mt-6 mb-4">
          {" "}
          <p className="text-[30px] font-[700] text-[#000000]">
            Hello, Welcome!
          </p>
          <p className="text-[14px] font-[400] text-[#5b6471]">
            Please Enter Your Details Below To Continue
          </p>
        </div>
      </center>
      <div className="max-w-[450px] mx-auto">
        <div>
          <p className="text-[14px] font-[400] text-[#000000]">Your Email</p>
          <input
            type="text"
            className="w-[450px] h-[36px] border-[#d1d5db] border rounded-[8px] focus:outline-[#5582ff] text-[#000000] text-[14px] font-[400] px-2 mt-2"
            placeholder="Enter Email"
          />
          <p className="text-[14px] font-[400] text-[#000000] mt-4">Password</p>
          <input
            type="password"
            className="w-[450px] h-[36px] border-[#d1d5db] border rounded-[8px] focus:outline-[#5582ff] text-[#000000] text-[14px] font-[400] px-2 mt-2"
            placeholder="Enter Password"
          />
        </div>
        <div className="flex justify-between mt-4 items-center">
          <div className="flex justify-start gap-1">
            <input type="checkbox" />
            <p className="text-[14px] font-[400] text-[#000000]">Remember me</p>
          </div>
          <div className="flex justify-end">
            <Link href={'/forgot'} className="text-[14px] font-[400] text-[#5e82f6]">
              Forgot Password?
            </Link>
          </div>
        </div>
        <div className="mt-6">
          <input
            type="submit"
            className="rounded-[8px] text-[14px] font-[400] w-[450px] py-2 px-6 bg-[#225cff] text-white"
            value="Login"
          />
          <p className="flex justify-center mt-4 text-[14px] font-[400] text-[#7192aa]">
            create account, <Link href={'/signup'} className="text-[#5e82f6]">sign up</Link>

          </p>
        </div>
      </div>
    </div>
  );
}
