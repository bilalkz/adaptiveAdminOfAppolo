import { OPEN_MODAL, CLOSE_MODAL } from '../../../modules/constants';

const initialState = {
    title: '',
    isVisible: '',
    name: '',
    options: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return { ...state, isVisible: true, title: action.payload.title, name: action.payload.name, options: { ...action.payload.options } };

        case CLOSE_MODAL:
            return { ...state, isVisible: false, title: '', name: '', options: {} };

        default:
            return state;
    }
}

