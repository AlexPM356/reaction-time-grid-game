import { useState, useEffect } from "react";
import { randomNumber } from "data/randomNumber";
import { UserResults } from "components/Results";

export const dataList = null;
export function GridGame (){
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [activeClass, setActiveClass] = useState(null);
    const [targetValue, setTargetValue] = useState(Array(9).fill(null));
    const [inputData, setInputData] = useState([]);
    const [allowClicks, setAllowClicks] = useState(true);
    const dataList = [...inputData];

    useEffect(() => {
        setActiveClass(randomNumber());
    }, [])

    const start = Date.now();
    const getTargetValue = (targetID) => {
        if (!allowClicks) return;

        if (activeClass === null) return;

        if (targetID === activeClass) {
            const rightTarget = [...targetValue];
            rightTarget[targetID] = 'correct';
            setTargetValue(rightTarget);
            setAllowClicks(false);
            
            setTimeout(() => {
                setTargetValue(Array(9).fill(null));
                setAllowClicks(true);
                setActiveClass(randomNumber());
            }, 2000);

            const end = Date.now();
            dataList.push((`✅ ${end - start} ms`));
            setInputData(dataList)
        } else {
            const wrongTarget = [...targetValue];
            wrongTarget[targetID] = '❌';
            setTargetValue(wrongTarget);
            dataList.push(wrongTarget)
            setInputData(dataList)

            setAllowClicks(false);
            setTimeout(() => {
                setTargetValue(Array(9).fill(null));
                setAllowClicks(true);
                setActiveClass(randomNumber());
            }, 2000);
        }
    }

    return(<>
        {UserResults(dataList)}
        <section className="rt-grid">
            {numbers.map((numberID) => (
                <div
                    id={numberID}
                    className={`${
                        targetValue[numberID] === 'correct' ? 'correct':
                        targetValue[numberID] === 'incorrect' ? 'incorrect':
                        activeClass === numberID ? 'active' : 'inactive'
                    }`}
                    {...(allowClicks && { onClick: () => getTargetValue(numberID) })}
                ></div>
            ))}
        </section>
    </>)
}