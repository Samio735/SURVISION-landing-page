import Chart from "./Chart.js";
import Progress from "./Progress";
import Responses from "./Responses.js";
import Table from "./Table.js";

function page() {
  return (
    <div className="py-8 px-8 lg:py-16 lg:px-40 min-h-[70vh] text-md lg:text-lg font-bold  bg-backgroundWhite">
      <h1 className=" mb-4 font-bold ">
        Cola Survey <span className="font-medium"> Ongoing </span>
      </h1>
      <div className="lg:grid grid-cols-[60%_40%] flex flex-col gap-4 ">
        <div className=" rounded-lg bg-backgroundWhite shadow-md shadow-gray-300">
          <h2 className="text-lightGrey px-4 py-2 lg:px-8 lg:py-4">
            Responders Over Time
          </h2>
          <Chart></Chart>
        </div>
        <div className=" rounded-lg bg-backgroundWhite shadow-md shadow-gray-300">
          <h2 className="text-lightGrey px-4 py-2 lg:px-8 lg:py-4">Progress</h2>
          <div className="flex justify-center items-center h-full lg:scale-150">
            {" "}
            <Progress></Progress>
          </div>
        </div>

        <Responses></Responses>

        <div className=" rounded-lg bg-backgroundWhite shadow-md shadow-gray-300">
          <h2 className="text-lightGrey px-4 py-4 lg:px-8 lg:py-4 border-b  ">
            Top Wilayas
          </h2>
          <div className="flex px-4 py-4 lg:px-8 lg:py-4 border-b w-full justify-between ">
            <h3>Algeirs</h3>
            <h3>320</h3>
          </div>
          <div className="flex px-4 py-4 lg:px-8 lg:py-4 border-b w-full justify-between ">
            <h3>Setif</h3>
            <h3>136</h3>
          </div>
          <div className="flex px-4 py-4 lg:px-8 lg:py-4 border-b w-full justify-between ">
            <h3>Oran</h3>
            <h3>72</h3>
          </div>
          <div className="flex px-4 py-4 lg:px-8 lg:py-4 border-b w-full justify-between ">
            <h3>Constantine</h3>
            <h3>47</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
