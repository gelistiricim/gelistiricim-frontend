import * as actionTypes from '../actions/actionTypes';
import initialState from "./initialState";

export default function changeMessageBox(state=initialState.currentMessageBox,action) {
    switch (action.type) {
        case actionTypes.CHANGE_MESSAGE_BOX:
            return action.payload;
        default:
            return state;
    }
}