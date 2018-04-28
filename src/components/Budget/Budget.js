import React from 'react';
import './Budget.css';
import { connect } from 'react-redux';
import { createOrder, moveOrderToFarm } from '../../actions/marketActions'

export const Budget = ({ profit, deliveryExpanse, marketExpanse, farmExpanse}) => (<div className="budget">
    <h2>Бюджет</h2>
    <p>Всего получено денег: <span className='t-profit'>{profit}</span></p>
    <p>Расходы продавцов: <span className='t-sellers'>{marketExpanse}</span></p>
    <p>Расходы на ферме: <span className='t-farm'>{farmExpanse}</span></p>
    <p>Расходы на доставку: <span className='t-delivery'>{deliveryExpanse}</span></p>
    <p>Итого: <span className='t-total'>{profit-farmExpanse-marketExpanse-deliveryExpanse}</span></p>
</div>);

const mapStateToProps = (state) => (
    {
        deliveryExpanse: state.budget.deliveryExpanse,
        marketExpanse: state.budget.marketExpanse,
        profit: state.budget.profit,
        farmExpanse: state.budget.farmExpanse
    }
)

const mapDispatchToProps = { createOrder, moveOrderToFarm }


export default connect(mapStateToProps, mapDispatchToProps)(Budget)

