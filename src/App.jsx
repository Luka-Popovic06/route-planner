import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Option from "./Option";
import { inputsArray, optionsArray, InpArray } from "./data.js";
import Map from "./Map.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="planner-box">
        <h1 className="page-title">
          <span>
            <svg
              className="icon-1"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          Route planner
        </h1>
        <Input
          inputType={inputs.start.type}
          variation={inputs.start.variation}
          text={inputs.start.text}
        />
        {inputs?.stop?.map((input) => (
          <div key={input.id} className="inp-box">
            <Input
              inputType={input.type}
              variation={input.variation}
              text={input.text}
            />
            <Button
              btnType={input.button.type}
              variation={input.button.variation}
              clickAction={() => removeStop(input.id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="x-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </Button>
          </div>
        ))}
        <Input
          inputType={inputs.destination.type}
          variation={inputs.destination.variation}
          text={inputs.destination.text}
        />
        <Button
          btnType={"button"}
          variation={"standard"}
          clickAction={() => addStop()}
        >
          ADD STOP
        </Button>
        <select>
          {optionsArray.map((option, index) => (
            <Option key={index} value={option.value}>
              {option.text}
            </Option>
          ))}
        </select>
        <Button btnType={"button"} variation={"primary"}>
          CALCULATE ROUTE
        </Button>
        <div className="route-plan-box"></div>
      </div>
      <div className="map-box">
        <Map />
      </div>
    </>
  );
}

export default App;
