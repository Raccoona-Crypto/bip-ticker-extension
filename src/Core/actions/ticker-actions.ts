import { BIPHistory, BIPPrice } from 'Core/bip-client';
import ActionTypes from './action-types';

export default class TickerActions {
    public static updateTicker(ticker: BIPPrice) {
        return {
            type: ActionTypes.UPDATE_TICKER,
            ticker: ticker,
        };
    }


    public static updateHistory(history: BIPHistory) {
        return {
            type: ActionTypes.UPDATE_HISTORY,
            history: history,
        };
    }
}
