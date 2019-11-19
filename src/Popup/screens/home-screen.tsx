import React from 'react';
import cn from 'classnames';
import Numeral from 'numeral';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { IStore } from 'Core/Interfaces';
import { BIPHistory, BIPPrice } from 'Core/bip-client';

type HomeScreenProps = {
    ticker?: BIPPrice;
    history?: BIPHistory;
};

class HomeScreenComponent extends React.PureComponent<HomeScreenProps> {
    public render(): JSX.Element {
        const { ticker, history } = this.props;

        if (!ticker) {
            return <div>Loading...</div>;
        }

        const isPriceUp = ticker.delta > 0;
        const historyData = history ? _.map(history, (d => d.price / 10000)) : undefined;

        const minValue = _.min(historyData);

        console.log(historyData, minValue / 2);

        return (
            <div className="home-screen">
                <div className="price">
                    <label className="price__label">Current BIP price</label>

                    <div className="price__value-box">
                        <div className="price__value">
                            ${Numeral(ticker.price).format('0,0.00[00]')}
                        </div>

                        <div className={cn('price__delta', isPriceUp ? '-up' : '-down')}>
                            {Numeral(ticker.delta).format('+0,0.00%')}
                        </div>
                    </div>
                </div>

                {historyData ? (
                    <div className="chart">
                        <Sparklines data={historyData}>
                            <SparklinesLine style={{
                                strokeWidth: 2,
                                stroke: '#FFFFFF',
                                fill: 'url(#gradient)',
                                fillOpacity: 1,
                            }} />

                            <SparklinesSpots size={0} />
                        </Sparklines>

                        <svg height="0">
                            <defs><LinearGradientFill /></defs>
                        </svg>
                    </div>
                ) : undefined}
            </div>
        );
    }
}


const mapStateToProps = (store: IStore) => {
    const { bipTicker, history } = store.ticker;

    return {
        ticker: bipTicker,
        history: history,
    };
};

export const HomeScreen = connect<any, any, any>(
    mapStateToProps,
)(HomeScreenComponent);


const LinearGradientFill = (stopColor: any) => {
    return (
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity="0" />
        </linearGradient>
    );
};
