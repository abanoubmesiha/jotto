import React, { Component } from 'react'
import { connect } from 'react-redux'
import { guessWord } from '../actions'
class Input extends Component {
    render() {
        let contents;
        contents = this.props.success
        ? null
        : <form className="form-inline">
            <input
                data-test="input-box"
                className="m-2"
                type="text"
                placeholder="Enter guess..."
            />
            <button
                data-test="submit-button"
                className="btn btn-primary m-2"
                type="submit"
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
export default connect(mapStateToProps, { guessWord })(Input)