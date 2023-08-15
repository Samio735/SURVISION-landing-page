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
            To luanch your survey, all you need to do is to cantact us in the
            following coordenates{" "}
          </p>
          <p className="mb-2 lg:mb-4">
            {" "}
            0782277055 <br></br> survisiondz@gmail.com <br></br> N32 Les Pain
            Marytims, Alger{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
