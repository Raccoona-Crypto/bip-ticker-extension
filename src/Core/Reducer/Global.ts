import { IGlobalStore } from 'Core/Interfaces';
import { ObjectUtility } from 'Core/ObjectUtility';

const initialState: IGlobalStore = {
};

interface ActionInterface {
    type: string;

    [key: string]: any;
}


/**
 * @param {IGlobalStore} state
 * @param {ActionInterface} action
 * @returns {IGlobalStore}
 */
export default function globalState(state: IGlobalStore = initialState, action: ActionInterface = null) {

    switch (action.type) {
        default:
            return state;
    }

    return state;
}
