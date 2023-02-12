import StepArea from "./step/StepArea";
import CartArea from "./cart/CartArea";

export default function Main() {
  return (
    <main className="site-main">
      <div className="main-container">
        <StepArea />
        <CartArea />
      </div>
    </main>
  );
}
