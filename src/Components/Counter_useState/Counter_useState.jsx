import "./index.css";
import Button from "../Button";
import { useState } from "react";
import dettiSiciliani from "../../Assets/detti-siciliani";

const Counter_useState = () => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const prossimoFn = () => {
    phraseIndex === dettiSiciliani.length - 1
      ? (Button.disabled = "true")
      : setPhraseIndex(phraseIndex + 1);
  };
  const precedenteFn = () => {
    phraseIndex === 0
      ? (Button.disabled = "true")
      : setPhraseIndex(phraseIndex - 1);
  };

  return (
    <div className="counter">
      <h1>{dettiSiciliani[phraseIndex].detto}</h1>
      <p>{dettiSiciliani[phraseIndex].traduzione}</p>
      <Button onBtnClick={() => precedenteFn()} textContent="precedente" />
      <Button onBtnClick={() => prossimoFn()} textContent="prossimo" />
    </div>
  );
};

export default Counter_useState;
