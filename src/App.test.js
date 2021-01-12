import { shallow } from 'enzyme';
import React from 'react';
import { storeFactory } from '../test/testUtils';
import App from './App';

const setup = (state={}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
}

describe('redux props', () => {
  test('has access to `success` state', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProps = wrapper.instance().props.success;
    expect(successProps).toBe(success);
  })
  test('has access to `guessedWords` state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const guessedWordsProps = wrapper.instance().props.guessedWords;
    expect(guessedWordsProps).toEqual(guessedWords);
  })
  test('has access to `secretWord` state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProps = wrapper.instance().props.secretWord;
    expect(secretWordProps).toBe(secretWord);
  })
  test('has access to `getSecretWord` action creator', () => {
    const wrapper = setup();
    const getSecretWordProps = wrapper.instance().props.getSecretWord;
    expect(getSecretWordProps).toBeInstanceOf(Function);
  })
})