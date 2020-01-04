import { combineReducers } from "redux";

import pokemonReducer from "./pokemonReducer";

const rootReducer = combineReducers({ pokemonReducer },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootReducer;
