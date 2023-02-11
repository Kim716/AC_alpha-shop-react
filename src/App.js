import React from "react";
import "./styles/reset.module.scss";
import "./styles/base.module.scss";
import StepProgress from "./components/step/StepProgress";
import Step1 from "./components/step/Step1";
import ProgressControl from "./components/step/ProgressControl";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function () {
  return (
    <>
      <StepProgress />
      <Step1 />
      <ProgressControl />
    </>
  );
}

// hr
// 3 (initial, StepProgress)
// +1 (Step1)
// +0.5 (ProgressControl)
//  （閱讀 css module 資源 1-2 hr）
