import React from "react";
import StepProgress from "./components/step/StepProgress";
import Step1 from "./components/step/Step1";
import ProgressControl from "./components/step/ProgressControl";

export default function () {
  return (
    <>
      <StepProgress />
      <Step1 />
      <ProgressControl />
    </>
  );
}

// 3(initial, StepProgress)+1(Step1) hr
