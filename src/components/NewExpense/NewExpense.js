import { useState } from "react";
import ErrorMessage from "../ErrorMessage";

function NewExpense(props) {
  const [errorMsg, setErrorMsg] = useState("");
  const [inputs, setInputs] = useState({});
  const handleChangeDate = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        date: e.target.value,
      };
    });
  };
  const handleChangeName = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        name: e.target.value,
      };
    });
  };
  const handleChangePrice = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        price: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setErrorMsg("");
      if (!inputs.name) throw new Error("invalid name, please select a name");
      if (!inputs.date) throw new Error("invalid date, please select a date");
      if (!inputs.price)
        throw new Error("invalid price, please select a price");
      props.onSaveExpense(inputs);
      setInputs({
        date: "",
        name: "",
        price: "",
      });
    } catch (err) {
      setErrorMsg(err.message);
    }
  };
  const [newBtnExpanded, setNewBtnExpanded] = useState(false);
  const handleExpandNew = () => {
    setNewBtnExpanded((prev) => !prev);
    console.log(newBtnExpanded);
  };
  const run = function () {
    if (newBtnExpanded) {
      return (
        <div className="flex w-full flex-wrap gap-5">
          <div className="flex">
            <label className="w-16 mt-1">name</label>
            <input
              type="text"
              onChange={handleChangeName}
              placeholder="Keeway MotorCycle"
              value={inputs.name}
              className="rounded-md bg-sky-200 text-sky-950  px-2 py-1 w-30 "
            />
          </div>
          <div className="flex">
            <label className="w-16 mt-1">date</label>
            <input
              type="date"
              onChange={handleChangeDate}
              value={inputs.date}
              className="rounded-md bg-sky-200 text-sky-950  px-2 py-1 w-30"
            />
          </div>
          <div className="flex">
            <label className="w-16 mt-1">price</label>
            <input
              type="number"
              onChange={handleChangePrice}
              placeholder="2000$"
              value={inputs.price}
              min={0.1}
              step={0.1}
              className="rounded-md bg-sky-200 text-sky-950 px-2 py-1   "
            />
          </div>
          <button
            type="submit"
            className="bg-sky-500 hover:text-sky-950 py-1 px-4 rounded-md hover:bg-sky-400"
          >
            Confirm
          </button>
          {errorMsg ? <ErrorMessage message={errorMsg} /> : ""}

        </div>
      );
    }
  };
  return (
    <div className="max-w-xl mx-auto  bg-sky-800 p-5 m-4  rounded-lg text-sky-50 font-bold align-middle">
      <form
        className="flex gap-5 w-full flex-wrap mb-3"
        onSubmit={handleSubmit}
      >
        <div className="w-full mb-1 flex" onClick={handleExpandNew}>
          <h1 className="flex-1 " >
            New Expense
          </h1>
          <div   className="w-4 h-4 mt-1 bg-yellow-200 hover:bg-yellow-500 rounded-full">
          </div>
        </div>
        {run()}
      </form>
    </div>
  );
}

export default NewExpense;
