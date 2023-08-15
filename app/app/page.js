import Background from "../Background";
import dashboard from "../../public/Dashboard-screen.png";
import Image from "next/image";
import Footer from "../Footer";

function page() {
  return (
    <div className="font-bold">
      <Background></Background>
      <div className="lg:grid grid-cols-2 lg:px-40">
        <div className="text-backgroundWhite px-8 py-16 lg:py-32 lg:text-lg  ">
          <h1 className="text-xl lg:text-4xl mb-4 lg:mb-8">
            Join the SURVISION Collector Community
          </h1>
          <p className="mb-2 lg:mb-4">
            Step 1: Download the SURVISION App on your device.
          </p>
          <p className="mb-2 lg:mb-4">
            {" "}
            Step 2: Create an account and get responses
          </p>
          <p className="mb-4 lg:mb-8">
            Step 3: Gather enough credit and withdraw your money
          </p>
          <button className="flex bg-backgroundWhite text-darkBlue items-center gap-2 py-2 px-4 rounded-lg ">
            <svg
              className="w-8"
              viewBox="0 0 43 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 28.6757V36.8919C3 39.1514 4.84865 41 7.10811 41H35.8649C36.9544 41 37.9993 40.5672 38.7697 39.7968C39.5402 39.0263 39.973 37.9814 39.973 36.8919V28.6757M31.7568 16.3514L21.4865 26.6216L11.2162 16.3514M21.4865 24.1568V3"
                stroke="#0D1727"
                stroke-width="4.10811"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <p>Download the app</p>
          </button>
        </div>
        <div className="w-full mb-8 flex justify-center lg:justify-end">
          <Image
            src={dashboard}
            className="lg:w-[24vw] w-[40vw] "
            quality={100}
            alt="Dashboard"
          />
        </div>
      </div>
    </div>
  );
}

export default page;
