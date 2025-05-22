export function Button(startGame) {
    return(
        <button className={`${startGame === 'START' ? 'start': 'stop'}`}>
        </button>
    )
} 