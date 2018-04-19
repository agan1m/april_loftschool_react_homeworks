import React from 'react'
import PersonalForm from "../PersonalForm/PersonalForm";
import CardForm from "../CardForm";
import Step from '../Step'
import './App.css'

export default class App extends React.Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: ''
    }

    handleTabClick = e => this.setState({step: e});

    handleChangeForm = (name, value) => this.setState({[name]:value})

    handleClickNextForm = () => {
        let val = this.state.step
        this.setState({step: val + 1})
    }

    isFormCommitable = () => {
      const validFrom = this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.email.includes('@');

        if(this.state.step === 1) {
            if (validFrom) return true;
        }
        else if(this.state.step === 2) {
            if (this.state.cardNumber.length === 16) return true
        }
        return false
    }

    renderForm = () => {
        const {cardNumber, firstName, lastName, email, step} = this.state
        if(step === 1){
            return (
                <PersonalForm data-test="personal-form"
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  onChangeForm = {this.handleChangeForm}/>
            );
        }
        else if(step === 2){
            return <CardForm data-test="card-form" cardNumber={cardNumber} onChangeForm={this.handleChangeForm} />;
        }
        else if (step === 3){
            return <p data-test="congratulations">Поздравляем!</p>
        }
    }

    render() {
      const {step} = this.state
        return (
            <div className='container'>
                <div className='tab-panel'>
                    <Step number={1} children={'Personal information'}
                        isSelected={step === 1} 
                        isClickable={step !== 1}
                        onClick={this.handleTabClick}/>
                    <Step number={2} children={'Card information'}
                        isSelected={step === 2}
                        isClickable={step !== 2 && 
                          step !== 1 ? true : false}
                        onClick={this.handleTabClick}/>
                    <Step number={3} children={'Finish!'}
                        isSelected={step === 3}
                        isClickable={step !== 3 &&
                          step !== 1 &&
                          step !== 3 && 
                          step !== 2 ? true : false}
                        onClick={this.handleTabClick}/>
                </div>
                <div className='form-content'>
                    <form className='title'>
                        {this.renderForm()}
                    </form>
                </div>
                <div className='button-panel'>
                    <button disabled={!this.isFormCommitable()}
                      className='button-next'
                      onClick={this.handleClickNextForm}>
                    Далее</button>
                </div>
            </div>
        );
    }

}