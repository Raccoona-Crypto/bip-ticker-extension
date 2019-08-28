export interface IGlobalStore {

}

export interface ITickerStore {
    bipTicker: any;
}

export interface IStore {
    global: IGlobalStore;
    ticker: ITickerStore;
}