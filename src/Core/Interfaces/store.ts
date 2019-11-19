import { BIPPrice, BIPHistory } from 'Core/bip-client';

export interface IGlobalStore {

}

export interface ITickerStore {
    bipTicker?: BIPPrice;
    history?: BIPHistory;
}

export interface IStore {
    global: IGlobalStore;
    ticker: ITickerStore;
}
