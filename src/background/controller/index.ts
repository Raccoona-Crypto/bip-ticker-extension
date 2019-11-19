import Redux from 'redux';
import moment from 'moment';
import bipClient from 'Core/bip-client';
import { IStore } from 'Core/Interfaces';
import { TickerActions } from 'Core/actions';


export class RootController {
    protected store: Redux.Store<IStore>;

    public constructor(store: Redux.Store<any>) {
        this.store = store;

        this.tickerUpdater();
    }


    protected async tickerUpdater() {
        const ticker = await bipClient.getPrice();
        const history = await bipClient.getHistory();

        const updateIn = moment(ticker.nextUpdate).diff(moment.now());

        if (updateIn && updateIn > 0) {
            setTimeout(
                () => this.tickerUpdater(),
                updateIn + 1000,
            );
        }

        this.store.dispatch(TickerActions.updateTicker(ticker));
        this.store.dispatch(TickerActions.updateHistory(history));
    }
}
