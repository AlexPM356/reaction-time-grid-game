import { useReducer, useState, useEffect } from "react";
import { GridLayout } from "components/grid/Grid";
import { UserResults } from "components/ui/Results";
import { reducer, initialState } from "hooks/gameLogic";
import { ACTION } from "data/reducerData";

export function Game() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    dispatch({ type: ACTION.RESET });
  }, []);

  const handleSquareClick = (numberID) => {
    if (!state.enableClick) return;
    
    const isCorrect = numberID === state.activeClass;
    const time = Date.now() - startTime;
    
    if (isCorrect) {
      dispatch({ type: ACTION.CORRECT, numberID, time });
    } else {
      dispatch({ type: ACTION.INCORRECT, numberID });
    }

    setTimeout(() => {
      dispatch({ type: ACTION.RESET });
      setStartTime(Date.now());
    }, 2000);
  };
  console.log(state.inputData)

  return (
    <>
      {/* <UserResults data={state.inputData} /> */}
      <GridLayout
        targetValue={state.targetValue}
        activeClass={state.activeClass}
        enableClick={state.enableClick}
        handleSquareClick={handleSquareClick}
      />
    </>
  );
}