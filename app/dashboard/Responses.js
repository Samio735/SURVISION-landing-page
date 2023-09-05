"use client";
import { set } from "date-fns";
import Table from "./Table";
import { useState } from "react";

function Responses() {
  const data = [
    {
      question: "What is your favorite cola company ?",
      responses: [
        {
          id: 1,
          response: "Coca Cola",
          count: 320,
        },
        {
          id: 2,
          response: "Pepsi",
          count: 136,
        },
        {
          id: 3,
          response: "Mecca Cola",
          count: 72,
        },
        {
          id: 4,
          response: "Other",
          count: 47,
        },
      ],
    },
    {
      question: "How much do you drink soda daily ?",
      responses: [
        {
          id: 1,
          response: "1-2",
          count: 320,
        },
        {
          id: 2,
          response: "3-4",
          count: 136,
        },
        {
          id: 3,
          response: "5-6",
          count: 72,
        },
        {
          id: 4,
          response: "7-8",
          count: 47,
        },
      ],
    },
    {
      question: "what is your favorite soda flavor ?",
      responses: [
        {
          id: 1,
          response: "Cola",
          count: 320,
        },
        {
          id: 2,
          response: "Orange",
          count: 136,
        },
        {
          id: 3,
          response: "Lemon",
          count: 72,
        },
        {
          id: 4,
          response: "Other",
          count: 47,
        },
      ],
    },
  ];
  const incrementQuestion = () => {
    if (currentQuestion < data.length - 1)
      setCurrentQuestion(currentQuestion + 1);
  };
  const decrementQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <div className=" rounded-lg relative bg-backgroundWhite shadow-md shadow-gray-300">
      {data.map((item, index) => {
        if (index === currentQuestion)
          return (
            <Table
              question={item.question}
              responses={item.responses}
              key={index}
            />
          );
      })}
      <div className="h-full absolute flex items-center top-0 right-0 w-10">
        {currentQuestion < data.length - 1 && (
          <svg
            onClick={incrementQuestion}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h13M12 5l7 7-7 7" />
          </svg>
        )}
      </div>
      <div className="h-full absolute flex items-center top-0 left-0 w-10">
        <div className="h-full absolute flex items-center justify-end top-0 right-0 w-10">
          {currentQuestion > 0 && (
            <svg
              onClick={decrementQuestion}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M19 12H6M12 5l-7 7 7 7" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}

export default Responses;
