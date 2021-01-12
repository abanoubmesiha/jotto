import React from 'react'
import { storeFactory } from '../test/testUtils'
import { guessWord } from './actions';


describe('guessWord action dispatcher', () => {
    describe('no guessed words', () => {
        let store;
        const secretWord = 'party'
        const unsuccessfulGuess = 'train'
        const initialState = { secretWord };
        beforeEach(() => {
            store = storeFactory(initialState)
        })
        test('update state correctly from unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState()
            const expectedState = {
                ...initialState,
                success: false,
                guessedWord: [
                    { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }
                ]
            }
            expect(newState).toEqual(expectedState)
        })   
        test('update state correctly from successful guess', () => {

        })   
    })
    describe('some guessed words', () => {
        test('update state correctly from unsuccessful guess', () => {

        })   
        test('update state correctly from successful guess', () => {

        })   
    })
})
