// GridCell.jsx
function GridCell({ numberID, targetValue, activeClass, allowClicks, onClick }) {
  return (
    <div
      id={numberID}
      className={`
        ${targetValue[numberID] === 'correct' ? 'correct' : ''}
        ${targetValue[numberID] === 'incorrect' ? 'incorrect' : ''}
        ${activeClass === numberID ? 'active' : 'inactive'}
      `}
      {...(allowClicks && { onClick: () => onClick(numberID) })}
    ></div>
  );
}

// GameGrid.jsx
function GameGrid({ numbers, targetValue, activeClass, allowClicks, onCellClick }) {
  return (
    <section className="rt-grid">
      {numbers.map((numberID) => (
        <GridCell
          key={numberID}
          numberID={numberID}
          targetValue={targetValue}
          activeClass={activeClass}
          allowClicks={allowClicks}
          onClick={onCellClick}
        />
      ))}
    </section>
  );
}

const initialState = {
  activeClass: null,
  targetValue: Array(9).fill(null),
  allowClicks: true,
  inputData: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'CORRECT_CLICK':
      return {
        ...state,
        targetValue: state.targetValue.map((val, i) => 
          i === action.numberID ? 'correct' : val),
        allowClicks: false,
        inputData: [...state.inputData, `✅ ${action.time} ms`]
      };
    case 'INCORRECT_CLICK':
      return {
        ...state,
        targetValue: state.targetValue.map((val, i) => 
          i === action.numberID ? 'incorrect' : val),
        allowClicks: false,
        inputData: [...state.inputData, '❌']
      };
    case 'RESET':
      return {
        ...state,
        targetValue: Array(9).fill(null),
        allowClicks: true,
        activeClass: randomNumber()
      };
    default:
      return state;
  }
}

export function GridGame() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [state, dispatch] = useReducer(reducer, initialState);
  const [startTime, setStartTime] = useState(Date.now());

  useEffect(() => {
    dispatch({ type: 'RESET' });
  }, []);

  const handleCellClick = (numberID) => {
    if (!state.allowClicks) return;
    
    const isCorrect = numberID === state.activeClass;
    const time = Date.now() - startTime;
    
    if (isCorrect) {
      dispatch({ type: 'CORRECT_CLICK', numberID, time });
    } else {
      dispatch({ type: 'INCORRECT_CLICK', numberID });
    }

    setTimeout(() => {
      dispatch({ type: 'RESET' });
      setStartTime(Date.now());
    }, 2000);
  };

  return (
    <>
      <UserResults data={state.inputData} />
      <GameGrid
        numbers={numbers}
        targetValue={state.targetValue}
        activeClass={state.activeClass}
        allowClicks={state.allowClicks}
        onCellClick={handleCellClick}
      />
    </>
  );
}
