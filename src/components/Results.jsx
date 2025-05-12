import { createPortal } from "react-dom"

export function UserResults(dataResults) {
    return createPortal(
        <ol>
            {dataResults.map((result) =>
                <li>{result}</li>
            )}
        </ol>,
        document.body
    )
}