import Axios, { AxiosInstance } from 'axios';

export type BIPPrice = {
    averageTradesPrice: number;
    delta: number,
    nextUpdate: Date;
    price: number;
    btcPrice: number;
}

export type BIPHistory = Array<{
    price: number;
    timestamp: string;
}>;

class BipClient {
    protected client: AxiosInstance;

    public constructor() {
        this.client = Axios.create({
            baseURL: 'https://api.bip.dev/',
        });
    }


    public async getPrice(): Promise<BIPPrice> {
        const { data } = await this.client.get('/api/price');

        return {
            price: data.data.price / 10000,
            averageTradesPrice: data.data.average_trades_price,
            delta: data.data.delta,
            nextUpdate: new Date(data.data.next_update),
            btcPrice: data.data.btc_price,
        };
    }


    public async getHistory(): Promise<BIPHistory> {
        const { data } = await this.client.get('/api/priceChart');

        return data.data as BIPHistory;
    }
}

export default new BipClient();
