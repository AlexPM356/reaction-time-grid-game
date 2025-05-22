import { createPortal } from "react-dom"

export function UserResults(dataResults) {
    //const average = dataNumbers.reduce((total, current) => total + current, 0);
    
    return createPortal(
        <ol>
            {dataResults.map((result) =>
                <li>{result}</li>
            )}
        </ol>,
        document.body
    )
}