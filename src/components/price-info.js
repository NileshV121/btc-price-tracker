import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBtcPriceAction } from '../actions/fetchBtcPrice';

class PriceInfo extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchBtcPrice();
    this.timerID = setInterval(
      () => this.props.fetchBtcPrice(), 10000
    );
  }

  render() {
    return (
      <div>
        <div>
          <span>Current Btc Price: {this.props.currentBtcPrice}</span>
        </div>
        <div>
          <span>Default Currency: {this.props.defaultCurrency}</span>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  btcPriceInfo: state.btcInfo.info,
  currentBtcPrice: state.btcPrice.currentBtcPrice,
  currencies: state.btcPrice.currencies,
  defaultCurrency: state.btcPrice.defaultCurrency
});

const mapDispatchToProps = dispatch => ({
  fetchBtcPrice: params => dispatch(fetchBtcPriceAction(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceInfo);
