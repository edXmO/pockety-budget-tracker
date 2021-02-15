const formReducer = (state, action) => {
    switch (action.type) {
        case 'HANDLE_INPUT':
            return {
                ...state,
                [action.payload.field]: action.payload.value
            }
        default:
            return state;
    }
};

export default formReducer;