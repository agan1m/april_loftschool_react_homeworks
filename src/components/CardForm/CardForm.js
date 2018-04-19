import React from 'react'
import './CardForm.css'
export default class CardForm extends React.Component {


    handleChangeForm = e => {
        const {onChangeForm} = this.props
        onChangeForm(e.target.name, e.target.value)
    }
    componentWillUnmount(){}
    render() {
        return <form className="card-form" data-test="card-form">
            <input name="cardNumber" onChange={this.handleChangeForm} />
          </form>;
    }
}