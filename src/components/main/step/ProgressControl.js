import React from "react";
import iconRightArrow from "../../../icons/icon_right_arrow.svg";
import iconLeftArrow from "../../../icons/icon_left_arrow.svg";

function Button({ way, content, source }) {
  return (
    <button className={way}>
      {content}
      <img src={source} alt="" className="cursor-point" />
    </button>
  );
}

export default function ProgressControl() {
  return (
    <>
      <div style={{ width: "100%", borderTop: "1px solid black" }} />
      <section className="progress-control-container col col-lg-6 col-sm-12">
        {/* 第一步 */}
        <section className="button-group col col-12" data-phase="address">
          <Button way="next" content="下一步" source={iconRightArrow} />
        </section>
        {/* 第一步end */}

        {/* 第二步 */}
        <section className="button-group col col-12" data-phase="shipping">
          <Button way="prev" content="上一步" source={iconLeftArrow} />
          <Button way="next" content="下一步" source={iconRightArrow} />
        </section>
        {/* 第二步end */}

        {/* 第三步 */}
        <section className="button-group col col-12" data-phase="credit-card">
          <Button way="prev" content="上一步" source={iconLeftArrow} />
          <button className="next">確認下單</button>
        </section>
        {/* 第三步end */}
      </section>
    </>
  );
}
