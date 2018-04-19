import React from 'react'
import './PersonalForm.css'
export default class PersonalForm extends React.Component {

    handleChangeForm = e => {
        const {onChangeForm} = this.props
        onChangeForm(e.target.name, e.target.value)
    }

    render() {
        return <form className="personal-form" data-test="personal-form">
            <input name="firstName" onChange={this.handleChangeForm} />
            <input name="lastName" onChange={this.handleChangeForm} />
            <input name="email" onChange={this.handleChangeForm} />
          </form>;
    }

}