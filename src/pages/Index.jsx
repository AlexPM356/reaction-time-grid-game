import { useState } from 'react';
import { CountdownTimer } from 'components/ui/Countdown';
import { SidebarArea } from 'components/ui/Sidebar';

export function GamePage (){
    const [gameState, setGameState] = useState(false);
    const startGame = gameState ? 'STOP': 'START';

    return (<>
        <SidebarArea display={startGame} />
        <main>
            <button
                className={`${startGame === 'START' ? 'start': 'stop'}`}
                onClick={() => setGameState(!gameState)}
            >{startGame}
            </button>
            {gameState && <CountdownTimer />}
        </main>
    </>)
}
