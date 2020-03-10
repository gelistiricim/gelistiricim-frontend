import React, {Component} from 'react';
import {connect} from 'react-redux';
class ExampleComponent extends Component {
    render() {
        return (
            <div>
                <h1>Example Component 1</h1>
                Redux initial state:{this.props.currentMessageBox.msgBoxId}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentMessageBox: state.changeMessageBoxReducer
    }
}
export default connect(mapStateToProps)(ExampleComponent);