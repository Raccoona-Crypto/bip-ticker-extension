import { ObjectUtility } from 'Core/ObjectUtility';
import { ITickerStore } from 'Core/Interfaces';
import { ActionTypes } from 'Core/actions';

const initialTickerState: ITickerStore = {
    bipTicker: undefined,
    history: undefined,
};


interface ActionInterface {
    type: string

    [key: string]: any;
}

export default function tickerState(
    state: ITickerStore = initialTickerState,
    action?: ActionInterface,
) {
    switch (action.type) {
        case ActionTypes.UPDATE_TICKER: {
            return ObjectUtility.updateObject(state, { bipTicker: action.ticker });
        }

        case ActionTypes.UPDATE_HISTORY: {
            return ObjectUtility.updateObject(state, { history: action.history });
        }
    }

    return state;
}
