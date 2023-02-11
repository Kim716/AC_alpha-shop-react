import React from "react";
import HeaderArea from "./components/header/HeaderArea";
import Main from "./components/main/Main";
import FooterArea from "./components/footer/FooterArea";

// CSS
// import "bootstrap/dist/css/bootstrap.min.css";
import "./components/main/step/styles/reset.module.scss";
import "./components/main/step/styles/base.module.scss";

export default function () {
  return (
    <>
      <HeaderArea />
      <Main />
      <FooterArea />
    </>
  );
}

// hr
// 3 (initial, StepProgress)
// +1 (Step1)
// +0.5 (ProgressControl)
//  （閱讀 css module 資源 1-2 hr）
