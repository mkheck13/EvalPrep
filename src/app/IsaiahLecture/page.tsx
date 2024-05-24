"use client";

import PaginationComponent from "@/components/PaginationComponent";
import InputComponent from "@/components/InputComponent";
import React, { useState } from "react";

const page = () => {
  const [changeText, setChangetext] = useState<string>("");
  const ChangeTextFunc = (text: string) => {
    setChangetext(text);
  };

  return (
    <>
      <div className="flex flex-col items-center  p-24">
        <h1>Isaiah Lecture</h1>
      </div>
      <div className="text-center">
        <p>
          We are going to change the color of the text in our component if
          certain requirements are met.
        </p>
        <InputComponent changeText={ChangeTextFunc} />
        <p>
          Password must contain
          <span style={{ color: /[A-Z]/.test(changeText) ? "green" : "red" }}>
            Uppercase
          </span>
          <span>and a </span>
          <span style={{ color: /[0-9]/.test(changeText) ? "green" : "red" }}>
            Number
          </span>
          {/* Spans allow us to keep text in the same line while still being able to individually style them */}
          {/* Spans are the div tags of p Tags */}
          {/* .test is just for tesing the input for any of the specified things in the square brackets */}
        </p>
      </div>

      <div className="flex min-h-screen flex-col items-center  p-24">
        <PaginationComponent />
      </div>
    </>
  );
};

export default page;
