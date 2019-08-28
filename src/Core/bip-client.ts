import Axios, { AxiosInstance } from 'axios';

export type BIPPrice = {
    averageTradesPrice: number;
    delta: number,
    nextUpdate: Date;
    price: number;

}

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
            averageTradesPrice: data.average_trades_price,
            delta: data.delta,
            nextUpdate: new Date(data.next_update),
            price: data.price / 1000,
        };
    }
}

export default new BipClient();
