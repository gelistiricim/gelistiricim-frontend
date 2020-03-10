// Oluşturulan reducerlar burada birleştirilir.
import {combineReducers} from "redux";
import changeMessageBoxReducer from "./changeMessageBoxReducer";

const rootReducer = combineReducers({
    changeMessageBoxReducer
});

export default rootReducer;