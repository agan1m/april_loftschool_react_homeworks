import React, { Component } from 'react';
import './Farm.css';
import { connect } from 'react-redux';
import Order from '../Order'
import { moveOrderToFarm } from '../../actions/marketActions'
import { moveOrderToCustomer } from '../../actions/farmActions'

export class Farm extends Component {

  handleToCustomer = () => {
    const { orders, moveOrderToCustomer } = this.props
    moveOrderToCustomer(orders[orders.length - 1])

  }

  render() {
    const {orders} = this.props

    return <div className="farm">
      <h2>Производство на ферме</h2>
      <button disabled={orders.length===0} onClick={this.handleToCustomer}>Отправить урожай клиенту</button>
      <div>{orders.map((order) => (<Order {...order} key={order.id} />))}</div>
    </div>;
  }
}

const mapStateToProps = (state) => (
  {
    orders: state.farm.orders
  }
)

const mapDispatchToProps = { moveOrderToFarm, moveOrderToCustomer }

export default connect(mapStateToProps, mapDispatchToProps)(Farm)

/* export default Farm; */
