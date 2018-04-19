import React from 'react'
import './Step.css'
import classNames from 'classnames'
export default class Step extends React.Component {
    
    handleClick = () => {
        const {onClick, isClickable, number } = this.props
            if(isClickable) {
                onClick(number);
            }
    }


    render() {
        const { isSelected, isClickable, number, children} = this.props
        const stepClass = classNames({
            "step": true,
            "step-selected": isSelected,
            "step-clickable": isClickable
        })
        return (
            <div className={stepClass} onClick={this.handleClick}>
                <p className='step__number'>{number}</p>
                <p className='step__title'>{children}</p>
            </div>
        );
    }
}