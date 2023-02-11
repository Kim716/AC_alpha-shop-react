import React from "react";
import iconCheck from "../../../icons/icon_check.svg";
import styles from "./styles/step_progress.module.scss";

function ProgressGroup({ phase, order, label, onProgress = "" }) {
  return (
    <span className={styles.progress_group} data-phase={phase}>
      <span className={styles.progress_icon}>
        <span className={`${styles.text} ${onProgress}`}>{order}</span>
        <img
          className="cursor-point d-none"
          src={iconCheck}
          alt=""
          style={{ width: "10px", height: "10px" }}
        />
      </span>
      <span className={`${styles.progress_label} ${onProgress}`}>{label}</span>
    </span>
  );
}

function ProgressBar({ order, onProgress }) {
  return (
    <span
      className={`${styles.progress_bar} ${onProgress}`}
      data-order={order}
    ></span>
  );
}

export default function StepProgress() {
  return (
    <>
      {/* <!-- register-title --> */}
      <h2 className={`${styles.register_title} col col-12`}>結帳</h2>
      {/* <!-- register-progress --> */}
      <section className={`${styles.progress_container} col col-12`}>
        <ProgressGroup
          phase="address"
          order="1"
          label="寄送地址"
          onProgress={styles.on_progress}
        />

        <ProgressBar order="1" onProgress={styles.on_progress} />

        <ProgressGroup phase="shipping" order="2" label="運送方式" />

        <ProgressBar order="2" />

        <ProgressGroup phase="credit-card" order="3" label="付款資訊" />
      </section>
    </>
  );
}
