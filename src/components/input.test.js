import React from 'react'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme'
import Input from './input'
import { storeFactory } from '../../test/testUtils'

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;
}
setup();

describe('word has not been guessed', () => {
    test('renders without errors', () => {
        
    })
    test('renders input box', () => {

    })
    test('renders submit button', () => {

    })
})
describe('word has been guessed', () => {
    test('renders without errors', () => {
        
    })
    test('does not renders input box', () => {

    })
    test('does not renders submit button', () => {

    })
})