import React, { Component } from 'react';
import './Market.css';
import Order from '../Order'
import { createOrder, moveOrderToFarm} from '../../actions/marketActions'
import { connect } from 'react-redux';


let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька',
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date(),
  };
};

export class Market extends Component {


  handleCreateOrder = () => {
    const {createOrder} = this.props
    /* let order = getNewOrder(); */
    createOrder(getNewOrder())
    
  }

  handleMoveToFarm = () => {
    const {orders, moveOrderToFarm} = this.props
    moveOrderToFarm(orders[orders.length-1])

  }

  render() {
    const {orders} = this.props

    return (<div className="market">
      <h2>Новые заказы в магазине</h2>
      <button className='new-orders__create-button' onClick={this.handleCreateOrder}>Создать заказ</button>
      <button onClick={this.handleMoveToFarm} disabled={orders.length === 0}>Отправить заказ на ферму</button>
      <div className='order-list'>
        {orders.map((order) => (<Order {...order} key={order.id}/>))}
      </div>
    </div>);
  }
}

const mapStateToProps = (state) => (
    {
      orders: state.market.orders
    }
  )

const mapDispatchToProps = { createOrder, moveOrderToFarm}


export default connect(mapStateToProps, mapDispatchToProps)(Market)

/* export default Market; */
