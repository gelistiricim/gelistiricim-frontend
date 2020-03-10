import * as actionTypes from './actionTypes';

export function changeMessageBox(message){
    return{
        type:actionTypes.CHANGE_MESSAGE_BOX,
        payload:message
    }
}