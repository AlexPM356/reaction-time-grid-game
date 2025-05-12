import { useState } from 'react';
import { CountdownTimer } from 'components/Countdown';

export function GamePage (){
    const [StartGame, setStartGame] = useState(false);
    const game = StartGame ? 'STOP': 'START';
    return (
        <main>
            <button
                className={`${
                    game === 'START' ? 'start': 'stop'
                }`}
                onClick={() => setStartGame(!StartGame)}
            >
                {game}
            </button>
            {StartGame && <CountdownTimer />}
        </main>
    )
}
