import React from "react";
import iconCheck from "../../icons/icon_check.svg";

function RegisterContainer({ children }) {
  return (
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase="1"
      data-total-price="0"
    >
      {children}
    </section>
  );
}

function ProgressContainer({ children }) {
  return (
    <section className="progress-container col col-12">{children}</section>
  );
}

function Title() {
  return <h2 className="register-title col col-12">結帳</h2>;
}

function ProgressGroup({ phase, order, label }) {
  return (
    <span className="progress-group" data-phase={phase}>
      <span className="progress-icon">
        <span className="text">{order}</span>
        <img
          className="icon cursor-point"
          src={iconCheck}
          alt=""
          style={{ width: "100px", height: "100px" }}
        />
        {/* <svg className="icon cursor-point"> */}
        {/* <use xlink:href="#svg-icon-pg-complete"></use> */}
        {/* </svg> */}
      </span>
      <span className="progress-label">{label}</span>
    </span>
  );
}

function ProgressBar({ order }) {
  return <span className="progress-bar" data-order={order}></span>;
}

export default function () {
  return (
    <RegisterContainer>
      {/* <!-- register-title --> */}
      <Title />

      {/* <!-- register-progress --> */}
      <ProgressContainer>
        <ProgressGroup phase="address" order="1" label="寄送地址" />

        <ProgressBar order="1" />

        <ProgressGroup phase="shipping" order="2" label="運送方式" />

        <ProgressBar order="2" />

        <ProgressGroup phase="credit-card" order="3" label="付款資訊" />
      </ProgressContainer>
    </RegisterContainer>
  );
}
