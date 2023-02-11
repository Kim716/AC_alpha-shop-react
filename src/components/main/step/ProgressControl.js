import React from "react";
import iconRightArrow from "../../../icons/icon_right_arrow.svg";
import iconLeftArrow from "../../../icons/icon_left_arrow.svg";
import styles from "./styles/progress_control.module.scss";

function Button({ way, content, source }) {
  return (
    <button className={styles[way]}>
      {content}
      <img src={source} alt="" className="cursor-point" />
    </button>
  );
}

export default function ProgressControl() {
  return (
    <section className="progress-control-container col  col-12">
      {/* 第一步 */}
      <section
        className={`${styles.button_group} col col-12`}
        data-phase="address"
      >
        <Button way="next" content="下一步" source={iconRightArrow} />
      </section>
      {/* 第一步end */}

      {/* 第二步 */}
      <section
        className={`${styles.button_group} col col-12 ${styles.d_none}`}
        data-phase="shipping"
      >
        <Button way="prev" content="上一步" source={iconLeftArrow} />
        <Button way="next" content="下一步" source={iconRightArrow} />
      </section>
      {/* 第二步end */}

      {/* 第三步 */}
      <section
        className={`${styles.button_group} col col-12 ${styles.d_none}`}
        data-phase="credit-card"
      >
        <Button way="prev" content="上一步" source={iconLeftArrow} />
        <button className={styles.next}>確認下單</button>
      </section>
      {/* 第三步end */}
    </section>
  );
}
