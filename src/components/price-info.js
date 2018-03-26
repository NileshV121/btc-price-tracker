import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBtcPriceAction } from '../actions/fetch-btc-price';
import { updateDefaultCurrency } from '../actions/update-btc-info';
import { calcualteBtc} from '../actions/calculate-btc';

class PriceInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      btcCalculated: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCurrencyChange = this.handleCurrencyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({amount: event.target.value});
  }

  handleCurrencyChange(event) {
    this.props.updateDefaultCurrency(event.target.value);
  }

  handleSubmit(event) {
    // this.setState({btcCalculated: this.state.amount/this.props.currentBtcPrice})
    this.props.calcualteBtc({ currency: this.props.defaultCurrency, amount: this.state.amount})
    event.preventDefault();
  }

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
        <div>
          <span>Calcualted Btc Price: {this.state.btcCalculated}</span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="amount" value={this.state.amount} onChange={this.handleInputChange} />
          </label>
          <label htmlFor="firstname">Currency:
            <select value={this.state.currency} onChange={this.handleCurrencyChange}>
              {
                this.props.currencies.map( (value, index) =>
                  <option key={index} value={value}>{value}</option>
                )
              }
            </select>
          </label>
          <input type="button" onClick={this.handleSubmit} value="check" />
        </form>
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
  fetchBtcPrice: params => dispatch(fetchBtcPriceAction(params)),
  updateDefaultCurrency: params => dispatch(updateDefaultCurrency(params)),
  calcualteBtc: params => dispatch(calcualteBtc(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceInfo);
