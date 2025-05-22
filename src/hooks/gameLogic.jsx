import { randomNumber } from "data/randomNumber";
import { ACTION } from "data/reducerData";

export const initialState = {
    activeClass: randomNumber(),
    targetValue: Array(9).fill(null),
    inputData: [],
    enableClick: true,
}

export function reducer(state, action) {
    switch (action.type) {
        case ACTION.CORRECT:
            return {
                ...state,
                targetValue: state.targetValue.map((value, ID) => ID === action.numberID ? 'correct': value ),
                enableClick: false,
                inputData: [...state.inputData, `✅ ${action.time} ms`]
            };
        
        case ACTION.INCORRECT:
            return {
                ...state,
                targetValue: state.targetValue.map((value, ID) => ID === action.numberID ? 'incorrect': value ),
                enableClick: false,
                inputData: [...state.inputData, '❌']
            };

        case ACTION.RESET:
            return {
                ...state,
                activeClass: randomNumber(),
                targetValue: Array(9).fill(null),
                enableClick: true
            };

        default:
            return state;
    }
}