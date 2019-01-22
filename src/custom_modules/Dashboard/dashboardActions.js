import {

}
    from 'modules/constants';

// ------------------------------------
// Actions
// ------------------------------------
export function getDashboardData(value) {
    console.log('getDashboardData',value);
    return {
        type: '',
        payload: value
    };
}

export const actions = {
    getDashboardData
};