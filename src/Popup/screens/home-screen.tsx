import React from 'react';
import cn from 'classnames';
import Numeral from 'numeral';
import { find, each, groupBy, reduce } from 'lodash';
import { connect } from 'react-redux';
import store from 'Popup/store';
import { sendTickerScreenView } from 'Popup/Analytics';
import { TickerActions } from 'Core/actions';


type HomeScreenProps = {
    ticker: any;
};

class HomeScreenComponent extends React.PureComponent<HomeScreenProps> {

    public render(): JSX.Element {
        return (
            <div className="home-screen">

            </div>
        );
    }



}


const mapStateToProps = (store) => {
    const { ticker } = store.ticker;

    const totalMap = {};

    return {
        ticker: ticker,
    };
};

export const HomeScreen = connect(
    mapStateToProps
)(HomeScreenComponent);
