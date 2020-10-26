export const SEARCH_PRODUCT = 'SEARCH_PRODUCT';
export const SELECT_MONTH = 'SELECT_MONTH';
export const SELECT_KIND = 'SELECT_KIND';

export const searchProduct= (name) => {
    return{
        type: SEARCH_PRODUCT ,
        name,
    }
};
export const selectMonth = (month) => {
    return{
        type: SELECT_MONTH ,
        month,
    }
};
export const selectKind = (kind) => {
    return{
        type: SELECT_MONTH ,
        kind,
    }
};