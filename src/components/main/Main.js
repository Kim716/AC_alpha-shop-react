import StepArea from "./step/StepArea";
import CartArea from "./cart/CartArea";

export default function Main() {
  return (
    <main class="site-main">
      <div class="main-container">
        <StepArea />
        <CartArea />
      </div>
    </main>
  );
}
