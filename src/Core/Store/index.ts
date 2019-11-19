import { createStore, applyMiddleware, AnyAction, MiddlewareAPI, Dispatch } from 'redux';
import BadgeController from 'background/badge-controller';
import { ActionTypes } from 'Core/actions';
import rootReducer from 'Core/Reducer';
import { IStore } from 'Core/Interfaces';

const trackBudgeMiddleware = (api: MiddlewareAPI<IStore>) => {
    return (next: Dispatch<IStore>) => {
        return (action: AnyAction) => {
            next(action);

            const { ticker } = api.getState();

            if (!ticker) {
                return;
            }

            switch (action.type) {
                case ActionTypes.UPDATE_TICKER: {
                    BadgeController.updateBudgetTexts(action.ticker);

                    break;
                }

                default:
                    return;
            }
        };
    };
};

const store = createStore<IStore>(
    rootReducer,
    applyMiddleware(
        trackBudgeMiddleware as any,
    ),
);

export default store;
