import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchBtcPriceAction } from '../actions/btc-api';
import { updateSelectedCurrency, calcualteBtc, updateBtcInputTerm } from '../actions/btc-info';

import {
  getCalculatedBtcPrice,
  getCurrencies,
  getCurrentBtcPrice,
  getInputTerm,
  getSelectedCurrency,
} from '../selectors/btc-price';

class PriceInfo extends Component {
  componentDidMount() {
    this.props.fetchBtcPrice();
    this.timerID = setInterval(() => this.props.fetchBtcPrice(), 10000);
  }

  render() {
    const {
      currencies,
      inputTerm,
      calcualteBtc,
      currentBtcPrice,
      selectedCurrency,
      calculatedBtcPrice,
      updateBtcInputTerm,
      updateSelectedCurrency,
    } = this.props;

    return (
      <div>
        <div className="demo">
          <div className="price">
            <p>Current Btc Price</p>
            <p>{currentBtcPrice}</p>
          </div>
          <div className="price">
            <p>Currency</p>
            <p>
              <div className="form">
                <select onChange={e => updateSelectedCurrency(e.target.value)}>
                  {
                    currencies.map((value, index) =>
                      <option key={index} value={value}>{value}</option>
                    )
                  }
                </select>
              </div>
            </p>
          </div>
          <div className="price">
            <p>BTC Portfolio Value</p>
            <p>{calculatedBtcPrice}</p>
          </div>
        </div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="amount">
              BTC You Hold
            </label>
            <input
                type="text"
                name="amount"
                value={inputTerm}
                onChange={e => updateBtcInputTerm(e.target.value)}
            />
            <br/>
            <input type="button" onClick={() => calcualteBtc(inputTerm)} value="check" />
          </form>
        </div>
      </div>
    );
  }
}

PriceInfo.propTypes = {
  currentBtcPrice: PropTypes.number,
  calculatedBtcPrice: PropTypes.number,
  currencies: PropTypes.array,
  selectedCurrency: PropTypes.string,
  inputTerm: PropTypes.string,
  fetchBtcPrice: PropTypes.func,
  updateSelectedCurrency: PropTypes.func,
  calcualteBtc: PropTypes.func,
  updateBtcInputTerm: PropTypes.func,
};

const mapStateToProps = state => ({
  currentBtcPrice: getCurrentBtcPrice(state),
  calculatedBtcPrice: getCalculatedBtcPrice(state),
  currencies: getCurrencies(state),
  selectedCurrency: getSelectedCurrency(state),
  inputTerm: getInputTerm(state),
});

const mapDispatchToProps = dispatch => ({
  fetchBtcPrice: () => dispatch(fetchBtcPriceAction()),
  updateSelectedCurrency: currency => dispatch(updateSelectedCurrency(currency)),
  calcualteBtc: heldBtc => dispatch(calcualteBtc(heldBtc)),
  updateBtcInputTerm: input => dispatch(updateBtcInputTerm(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceInfo);
