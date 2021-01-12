import React, { Component } from 'react';
import { connect } from 'react-redux';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/input';
import './App.css';
import { getSecretWord } from './actions'

export class UnconnectedApp extends Component {
  componentDidMount(){
    this.props.getSecretWord()
  }
  render(){
    const { success, guessedWords } = this.props
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input />
        <label className="text-danger">The secret word is {this.props.secretWord}</label>
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord }
}
export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
