import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = (props) => {
    let contents;
    if (props.guessedWords.length === 0){
        contents = <span data-test="guess-instructions">
            Try to guess the secret word!
        </span>
    } else {
        const guessedWords = props.guessedWords.map((word, index) => (
            <tr key={index} data-test="guessed-word">
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ));
        contents = <div data-test="guessed-words">
            <h3>Guessed Words</h3>
            <table>
                <thead>
                    <tr>
                        <td>Word</td>
                        <td>Letter Match</td>
                    </tr>
                </thead>
                <tbody>
                    {guessedWords}
                </tbody>
            </table>
        </div>
    }
    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    )
}
GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired,
}
export default GuessedWords;