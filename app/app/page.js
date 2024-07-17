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
            Join the SURVISION Collectors Team
          </h1>
          <p className="mb-2 lg:mb-4">
            1. Register: Complete a simple application form to get started.
          </p>
          <p className="mb-2 lg:mb-4">
            {" "}
            2. Training: Participate in online training to learn how to use our app and collect high-quality data.
          </p>
          <p className="mb-4 lg:mb-8">
            3. Start Collecting: Use the Survision app to gather data from surveys in your area.
          </p>
          <button className="flex bg-backgroundWhite text-darkBlue items-center gap-2 py-2 px-4 rounded-lg " onClick={() => window.location.href='https://docs.google.com/forms/d/1two7Wc0Lm6pRdU_QQO7BWDKVVXb-wvPGxPfHehmKQa0/prefill'}>
            
            <p>Application Form</p>
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
