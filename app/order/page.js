import Background from "../Background";
import dashboard from "../../public/Dashboard-screen.png";
import Image from "next/image";
import Footer from "../Footer";

function page() {
  return (
    <div className=" font-bold">
      <Background></Background>
      <div className="lg:grid grid-cols-2 lg:px-40">
        <div className="text-backgroundWhite px-8 py-16 lg:py-32 lg:text-lg  ">
          <h1 className="text-xl lg:text-5xl mb-4 lg:mb-8">
            Order your Survey Now !
          </h1>
          <p className="mb-2 lg:mb-4">
            To get started, simply reach out to us using the details below:

{" "}
          </p>
          <p className="mb-2 lg:mb-4">
            {" "}
            0541868191 <br></br> contact@survision.io <br></br> N32 Les Pain
            Marytims, El Mouhamadia, Alger{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
