import { useState } from "react";

export function DifficultyOption() {
    const DIFFICULTYOPTIONS = {
        EASY: 'Easy',
        NORMAL: 'Normal',
        HARD: 'Hard',
    }

    const [difficulty, setDifficulty] = useState('');
    const handleDifficulty = (event) => {
        setDifficulty(event.target.value);
    };
    
    return(
        <fieldset className="difficulty-options">
            <legend>Select Difficulty:</legend>

            <label htmlFor={DIFFICULTYOPTIONS.EASY}>
                <input
                    type="radio"
                    value={DIFFICULTYOPTIONS.EASY}
                    checked={difficulty === DIFFICULTYOPTIONS.EASY}
                    onChange={handleDifficulty}
                />
                {DIFFICULTYOPTIONS.EASY}
            </label>

            <label htmlFor={DIFFICULTYOPTIONS.NORMAL}>
                <input
                    type="radio"
                    value={DIFFICULTYOPTIONS.NORMAL}
                    checked={difficulty === DIFFICULTYOPTIONS.NORMAL}
                    onChange={handleDifficulty}
                />
                {DIFFICULTYOPTIONS.NORMAL}
            </label>

            <label htmlFor={DIFFICULTYOPTIONS.HARD}>
                <input
                    type="radio"
                    value={DIFFICULTYOPTIONS.HARD}
                    checked={difficulty === DIFFICULTYOPTIONS.HARD}
                    onChange={handleDifficulty}
                />
                {DIFFICULTYOPTIONS.HARD}
            </label>
        </fieldset>
    )
}