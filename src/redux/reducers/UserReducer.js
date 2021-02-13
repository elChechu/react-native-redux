export const userReducer = (state = {}, action) => {

    switch (action.type) {
        case 'FETCH_EMPLOYES':
            return {
                ...state,
                employes: action.payload
            };

        case 'FETCH_EMPLOYESBYID':
            return {
                ...state,
                employesbyid: action.payload
            };

        case 'FETCH_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };

        case 'ON_ERROR':
            return {
                ...state,
                appError: action.payload
            };
    
        default:
            return state;
    }
}
