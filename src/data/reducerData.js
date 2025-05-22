export const initialState = {
    activeClass: null,
    targetValue: Array(9).fill(null),
    inputData: [],
    enableClick: true,
}

export const ACTION = {
    CORRECT: 'correct',
    INCORRECT: 'incorrect',
    RESET: 'reset',
}