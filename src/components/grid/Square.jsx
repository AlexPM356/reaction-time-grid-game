
export function SquareGrid({squareID, targetValue, activeClass, enableClick, onClick}) {
    return (
        <div
            id={squareID}
            className={`${
                targetValue[squareID] === 'correct' ? 'correct':
                targetValue[squareID] === 'incorrect' ? 'incorrect':
                activeClass === squareID ? 'active' : 'inactive'
            }`}
            {...(enableClick && { onClick: () => onClick(squareID) })}
        ></div>
    )
}