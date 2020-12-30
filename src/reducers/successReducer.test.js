import { successReducer } from './successReducer'
import { actionTypes } from '../actions'

describe('success reducer', () => {
    test('return default intial state of false when no action is passsed', () => {
        const newState = successReducer(undefined, {});
        expect(newState).toBe(false)
    })
    test('return state of true when action of type `CORRECT_GUESS` is passsed', () => {
        const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
        expect(newState).toBe(true)
    })
})
