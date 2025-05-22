import { SquareGrid } from "components/grid/Square";
import { numbers } from "data/gridData";

export function GridLayout({targetValue, activeClass, enableClick, handleSquareClick}){
    return(<>
        <section className="rt-grid">
            {numbers.map((numberID) => (
                <SquareGrid
                    key={numberID}
                    squareID={numberID}
                    targetValue={targetValue}
                    activeClass={activeClass}
                    enableClick={enableClick}
                    onClick={handleSquareClick}
                />
            ))}
        </section>
    </>)
}