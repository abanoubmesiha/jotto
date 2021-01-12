import React, { Component } from 'react';
import { connect } from 'react-redux';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import Input from './components/input';
import './App.css';
import { getSecretWord } from './actions'

class App extends Component {
  render(){
    const { success, guessedWords } = this.props
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord }
}
export default connect(mapStateToProps, { getSecretWord })(App);
