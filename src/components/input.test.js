import React from 'react'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme'
import Input from './input'
import { findByTestAttr, storeFactory } from '../../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;
}

describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = { success : false }
        wrapper = setup(initialState)
    })
    test('renders without errors', () => {
        const component = findByTestAttr(wrapper, 'component-input');
        expect(component.length).toBe(1)
    })
    test('renders input box', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.length).toBe(1)
    })
    test('renders submit button', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.length).toBe(1)
    })
})
describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = { success : true }
        wrapper = setup(initialState)
    })
    test('renders without errors', () => {
        const component = findByTestAttr(wrapper, 'component-input');
        expect(component.length).toBe(1)
    })
    test('does not renders input box', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.length).toBe(0)
    })
    test('does not renders submit button', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');
        expect(submitButton.length).toBe(0)
    })
})
describe('redux props', () => {
    test('has success piece of state', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
    })
    test('`guessWord` action creator is a function prop', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function)
    })
})