import Image from "next/image";
import { DefaultSlider, RangePanel } from "./client";
import Iphone from "../public/Iphone.png";
import MainPhone from "../public/iPhone 12 Pro.png";
import mapPhoto from "../public/algeriaMap.png";
import Link from "next/link";
import Background from "./Background";
import Footer from "./Footer";
// pardon ma vie
export default function Home() {
  return (
    <main className="font-bold relative -mt-2 w-screen overflow-hidden">
      <div className="relative  ">
        <Background></Background>
        <div className="pt-12 xl:pt-24">
          <div className="  hidden xl:block xl:absolute -right-12 top-24">
            <Image
              src={MainPhone}
              alt="Picture of the app screen"
              style={{ maxWidth: "60%" }}
              quality={100}
            />
          </div>
          <div className="px-8 xl:px-40 py-16 flex">
            <div
              className=" w-full text-backgroundWhite
       "
            >
              <h3 className="font-thin text-lg lg:text-xl mb-4 max-w-2xl">
                Explore. Understand. Innovate.
              </h3>
              <h1 className="font-bold text-5xl lg:text-6xl mb-4 max-w-2xl lg:leading-[106px]">
                Unveiling the Future of Market Research
              </h1>
              <p className="opacity-90 max-w-2xl  lg:text-2xl font-medium">
                Revolutionizing FMCG market research through cutting-edge
                technology and community-driven insights.
              </p>
            </div>
          </div>
          <div className=" hidden xl:block opacity-0 xl:absolute right-36 top-4">
            <Image
              src={MainPhone}
              alt="Picture of the app screen"
              style={{ maxWidth: "60%" }}
              quality={100}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center  px-8 xl:px-40 py-8 xl:pt-12 xl:pb-0 text-sm lg:text-lg text-lightGrey font-bold max-w-[1100px] lg:mb-20">
        <div className="pe-3">
          <h3 className="text-darkBlue text-lg lg:text-3xl mb-2 ">230+</h3>
          <p className="opacity-70">Surveys secussfuly completed</p>
        </div>
        <div className="bg-lightGrey opacity-70 w-[1px] h-8"></div>
        <div className="p-3">
          <h3 className="text-darkBlue text-lg lg:text-3xl mb-2 ">1400+</h3>
          <p className="opacity-70">Survey collector in our fleet</p>
        </div>
        <div className="bg-lightGrey opacity-70 w-[1px] h-8"></div>

        <div className="p-3">
          <h3 className="text-darkBlue text-lg lg:text-3xl mb-2 ">24+</h3>
          <p className="opacity-70">Wilayas covered nationally</p>
        </div>
      </div>
      <div className="w-full flex justify-center lg:block">
        <div className="grid grid-rows-1  lg:grid-cols-3 max-w-[350px] lg:max-w-none gap-4 lg:gap-8 lg:mb-20 text-2 justify-center lg:text-2xl text-center font-medium  w-full px-8 xl:px-40">
          <div className=" flex flex-col items-center border rounded-lg px-3 py-3 me-4 lg:px-15 lg:py-10">
            <svg
              className=" m-2 p-1 w-10 lg:w-20 lg:m-4 "
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5933 22.3533C18.0978 22.3533 22.56 17.891 22.56 12.3866C22.56 6.88215 18.0978 2.41992 12.5933 2.41992C7.08889 2.41992 2.62666 6.88215 2.62666 12.3866C2.62666 17.891 7.08889 22.3533 12.5933 22.3533Z"
                stroke="#0D1727"
                stroke-width="1.99333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5933 6.40674V12.3867L16.58 14.3801"
                stroke="#0D1727"
                stroke-width="1.99333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3>Modern Technologies, Real-time Insights</h3>
          </div>
          <div className=" flex flex-col items-center border rounded-lg px-3 py-3 me-4 lg:px-15 lg:py-10">
            <svg
              className=" m-2 p-1 w-10 lg:w-20 lg:m-4 "
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9833 5.41016L5.02997 19.3635"
                stroke="black"
                stroke-width="1.99333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.52499 9.39666C7.9011 9.39666 9.01666 8.28111 9.01666 6.905C9.01666 5.52889 7.9011 4.41333 6.52499 4.41333C5.14888 4.41333 4.03333 5.52889 4.03333 6.905C4.03333 8.28111 5.14888 9.39666 6.52499 9.39666Z"
                stroke="black"
                stroke-width="1.99333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.4883 20.36C18.8644 20.36 19.98 19.2445 19.98 17.8684C19.98 16.4923 18.8644 15.3767 17.4883 15.3767C16.1122 15.3767 14.9967 16.4923 14.9967 17.8684C14.9967 19.2445 16.1122 20.36 17.4883 20.36Z"
                stroke="black"
                stroke-width="1.99333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3>Cost-Effective Excellence</h3>
          </div>
          <div className=" flex flex-col items-center border rounded-lg px-3 py-3 me-4 lg:px-15 lg:py-10">
            <svg
              className=" m-2 p-1 w-10 lg:w-20 lg:m-4 "
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.42 8.39992C17.374 8.39992 21.39 7.06125 21.39 5.40992C21.39 3.75859 17.374 2.41992 12.42 2.41992C7.46597 2.41992 3.44997 3.75859 3.44997 5.40992C3.44997 7.06125 7.46597 8.39992 12.42 8.39992Z"
                stroke="black"
                stroke-width="1.53333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.39 12.3867C21.39 14.0412 17.4033 15.3767 12.42 15.3767C7.43663 15.3767 3.44997 14.0412 3.44997 12.3867"
                stroke="black"
                stroke-width="1.53333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.44997 5.40991V19.3632C3.44997 21.0177 7.43663 22.3532 12.42 22.3532C17.4033 22.3532 21.39 21.0177 21.39 19.3632V5.40991"
                stroke="black"
                stroke-width="1.53333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <h3>Data You Can Trust</h3>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:py-10 lg:mb-32 relative ">
        <Image
          src={mapPhoto}
          className="absolute -z-10 top-[45%] xl:top-0"
        ></Image>

        <div className="px-8 xl:px-40 py-8 text-darkBlue  sticky bottom-0 lg:max-w-[60vw] z-10">
          <h1 className="text-3xl lg:text-5xl mb-4  z-10">Audience Panel</h1>
          <p className="font-medium lg:text-xl pe-20 text-lightGrey">
            Easily reach consumer and B2B survey respondents in 23+ Wialayas.
            <br></br>
            <br></br>
            Collect responses using personalized questions from your liking.
          </p>
        </div>
        <div>
          <div className="flex flex-col items-center mb-8 z-10">
            <h1 className="text-2xl lg:text-4xl font-medium mb-4">
              How many responses ?
            </h1>

            <RangePanel></RangePanel>
          </div>
        </div>
      </div>
      <div className="xl:grid grid-cols-[49%_1fr]  relative">
        <Background></Background>
        {/* <div className="w-full h-full absolute -z-10 overflow-hidden  -scale-y-100 ">
          <div className="w-full h-full scale-[180%] relative blur-[50px]">
            <div className="bg-lightBlue -z-30 w-[1500px] h-60 -left-10 top-[80%] rotate-[10deg] absolute"></div>
            <div className="bg-lightPurple -z-20 w-[250px] h-[250px] rounded-full left-[70%] top-[50%] absolute"></div>
            <div className="bg-lighOrange w-[1500px] h-[30%] -left-10 rotate-[10deg] top-40 -z-40 absolute"></div>
            <div className="bg-darkOrange w-full h-full -z-50 absolute"></div>
          </div> */}
        {/* </div> */}
        <div className="absolute bottom-0 left-32">
          <Image
            className="xl:block hidden"
            src={Iphone}
            style={{ maxWidth: "35vw", margin: "0 auto" }}
            quality={100}
          ></Image>
        </div>
        <div></div>
        <div className=" text-backgroundWhite  ">
          <div className="px-8 xl:pe-40 xl:py-16 pt-8">
            <h1 className="text-3xl xl:text-4xl mb-4">
              Unlocking Possibilities with our App
            </h1>
            <h2 className="mb-4 text-lg">
              Become a Surveys Collector, Influence Change!
            </h2>
            <p className="font-medium opacity-90 xl:text-lg mb-4">
              Our commitment to innovation extends to our SURVISION App,
              designed for those who want to be part of shaping tomorrow's
              products and services. By downloading our app, you join a
              community of dedicated survey collectors. You have the power to
              gather responses by interacting with people at public places,
              sparking conversations, and sharing insights.
            </p>
            <Link href={"/app"}>
              <button className="text-darkBlue font-medium mb-3 xl:text-lg bg-backgroundWhite px-3 py-2 rounded-lg drop-shadow-md hover:drop-shadow-lg active:drop-shadow-none active:shadow-inner transition-all ">
                Become a collector now{" "}
              </button>
            </Link>
          </div>
          <Image
            className="xl:hidden"
            src={Iphone}
            style={{ maxWidth: "100%", margin: "0 auto" }}
            quality={100}
          ></Image>
        </div>
      </div>
    </main>
  );
}
