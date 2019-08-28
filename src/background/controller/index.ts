import Redux from 'redux';
import { each } from 'lodash';
import bipClient from 'Core/bip-client';
import { IStore } from 'Core/Interfaces';


export class RootController {
    protected store: Redux.Store<IStore>;

    public constructor(store: Redux.Store<any>) {
        this.store = store;

        this.tickerUpdater();
        setInterval(() => this.tickerUpdater(), 60 * 1000);
    }


    protected async tickerUpdater() {
        const ticker = await bipClient.getPrice();

        this.store.dispatch(this.updateTicker(ticker));
    }

    protected updateTicker(ticker: any) {
        return {
            type: 'UPDATE_TICKER',
            ticker: ticker,
        };
    }
}
