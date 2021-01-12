import React, { Component } from 'react'
import { connect } from 'react-redux'
import { guessWord } from '../actions'
export class UnconnectedInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentGuess: null
        }
    }
    updateCurrentGuess = (e) => {
        e.preventDefault()
        const { value } = e.target;
        if (value && value.length > 0){
            this.setState({ currentGuess: e.target.value })
        }
    }
    render() {
        const { currentGuess } = this.state;
        let contents;
        contents = this.props.success
        ? null
        : <form className="form-inline">
            <input
                data-test="input-box"
                className="m-2"
                type="text"
                placeholder="Enter guess..."
                onChange={this.updateCurrentGuess}
            />
            <button
                data-test="submit-button"
                className="btn btn-primary m-2"
                type="submit"
                onClick={()=>this.props.guessWord(currentGuess)}
            >
                Submit
            </button>
        </form>
        return (
            <div data-test="component-input">
                {contents}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {success: state.success}
}
export default connect(mapStateToProps, { guessWord })(UnconnectedInput)