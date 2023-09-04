import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen min-h-screen flex-row items-center justify-center px-10">
      <div className="flex-1 lg:flex items-center justify-center hidden p-10">
        <Image
          className="w-96"
          src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_1280.png"
          width={300}
          height={300}
        />
      </div>
      <div className="flex-1 flex items-center p-[16px] justify-center h-full">
        <div className="flex-1 h-[60%] items-center justify-start">
          <h1 className="text-7xl font-bold mb-14 ">Happening Now</h1>
          <h2 className="text-3xl font-bold tracking-wide mb-7">Join Today.</h2>
          <div className=" flex gap-3 flex-col sm:w-1/2 w-full sm:px-0 px-10">
            <button className="py-2  px-10 rounded-full bg-white  border shadow-lg">
              <span></span>Sign Up with Web 2.0
            </button>{" "}
            <button className="py-2 px-10 rounded-full bg-white  border shadow-lg">
              <span></span>Sign Up with Web 3.0
            </button>{" "}
          </div>
          <div className="flex gap-2 w-1/2 items-center justify-center">
            <div className="border border-gray-500 w-full"></div>
            <span className="bg-transparent">or</span>
            <div className="border border-gray-500 w-full"></div>
          </div>
          <div className="flex flex-col w-1/2">
            <button className="py-2 px-10 rounded-full hover:bg-sky-600 bg-sky-500 text-white font-bold  border shadow-lg">
              Login As Guest
            </button>
            <h4 className="text-xs my-1 px-2">
              By signing up, you agree to the Terms of Service and Privacy
              Policy, including Cookie Use.
            </h4>
          </div>
          <div className="flex my-1 px-2 flex-col mt-10 font-bold w-1/2">
            <h3 className="mb-5">Already have an account?</h3>
            <button className="py-2 px-10 rounded-full hover:text-white bg-transparent hover:bg-sky-500 transition-all ease-in font-bold hover:border-0 shadow-md  ">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
