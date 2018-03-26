import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBtcPriceAction } from '../actions/fetchBtcPrice';

class PriceInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({currency: event.target.value});
  }

  handleSubmit(event) {
    alert(this.state.value);
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="amount" value={this.state.amount} onChange={this.handleChange} />
          </label>
          <select value={this.state.currency} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <input type="submit" value="Submit" />
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
  fetchBtcPrice: params => dispatch(fetchBtcPriceAction(params))
});

export default connect(mapStateToProps, mapDispatchToProps)(PriceInfo);
