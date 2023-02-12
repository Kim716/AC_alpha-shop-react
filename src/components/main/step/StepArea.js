import StepProgress from "./StepProgress";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ProgressControl from "./ProgressControl";

export default function StepArea() {
  return (
    <section
      className="register-container col col-lg-6 col-sm-12"
      data-phase="1"
      data-total-price="0"
    >
      <StepProgress />

      <section className="form-container col col-12">
        <Step1 />
        {/* <Step2 /> */}
        {/* <Step3 /> */}
      </section>

      <ProgressControl />
    </section>
  );
}
