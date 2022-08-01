import "./index.css";
import Button from "../Button";
import { useReducer } from "react";
import dettiSiciliani from "../../Assets/detti-siciliani";

const Counter_useReducer = () => {
  const initialPhraseIndex = 0;

  const reducer = (phraseIndex, action) => {
    switch (action.type) {
      case "precedente":
        return phraseIndex -1;

      case "prossimo":
        return phraseIndex +1;
    }
  };
  const [phraseIndex, dispatch] = useReducer(reducer, initialPhraseIndex);

  return (
    <div className="counter">
      <h1>{dettiSiciliani[phraseIndex].detto}</h1>
      <p>{dettiSiciliani[phraseIndex].traduzione}</p>
      <Button
        onBtnClick={() =>
          phraseIndex === 0
            ? (Button.disabled = "true")
            : dispatch({ type: "precedente" })
        }
        textContent="precedente"
      />
      <Button
        onBtnClick={() =>
          phraseIndex === dettiSiciliani.length - 1
            ? (Button.disabled = "true")
            : dispatch({ type: "prossimo" })
        }
        textContent="prossimo"
      />
    </div>
  );
};

export default Counter_useReducer;
