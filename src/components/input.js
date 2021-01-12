import React, { Component } from 'react'
import { connect } from 'react-redux'
import { guessWord } from '../actions'
export class UnconnectedInput extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentGuess: ''
        }
    }
    updateCurrentGuess = (e) => {
        const { value } = e.target;
        if (value.length > 0){
            this.setState({ currentGuess: e.target.value })
        }
    }
    submit = (e) => {
        e.preventDefault()
        this.props.guessWord(this.state.currentGuess);
        this.setState({ currentGuess: ''});
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
                value={currentGuess}
                onChange={this.updateCurrentGuess}
            />
            <button
                data-test="submit-button"
                className="btn btn-primary m-2"
                type="submit"
                onClick={(e)=>this.submit(e)}
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