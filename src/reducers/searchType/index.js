import {SEARCH_PRODUCT} from "../../actions/product";
import {SELECT_MONTH} from "../../actions/product";
import {SELECT_KIND} from "../../actions/product";

const initialState = {
    name: '',
    month: 'ck',
    kind: 'mc',
};

export default function searchContestReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_PRODUCT:
            return Object.assign({},state,{
                name: action.name,
            });
        case SELECT_MONTH:
            return Object.assign({},state,{
                month: action.month,
            });
        case SELECT_KIND:
            return Object.assign({},state,{
                kind: action.kind,
            });
        default:
            return state;
    }
}