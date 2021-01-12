import { actionTypes } from '../actions'

export const guessedWords = (state=[], action) => {
    switch (action) {
        case actionTypes.GUESS_WORD:
            return [...state, action.payload]
        default:
            return state
    }
}