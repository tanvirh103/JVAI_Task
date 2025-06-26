export default function SignUp() {
  return (
    <div className="my-auto">
      <center>
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
            <p className="text-[14px] font-[400] text-[#5e82f6]">
              Forgot Password?
            </p>
          </div>
        </div>
        <div className="mt-6">
          <input
            type="submit"
            className="rounded-[8px] text-[14px] font-[400] w-[450px] py-2 px-6 bg-[#225cff] text-white"
            value="Login"
          />
          fdfdfd
          <p className="flex justify-center mt-4 text-[14px] font-[400] text-[#7192aa]">
            create account, <span className="text-[#5e82f6]">sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
}
