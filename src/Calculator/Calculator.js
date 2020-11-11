import React from 'react';
import './Calculator.css';


class Calculator extends React.Component {

   constructor(props) {
    super(props);

    this.state = {
      fieldInput: '',
      answerInput: ''
    }
   }


   handlerClick = event => {
    const value = event.target.value;

    switch(value) {

      case '=': 

      let ans;

        if (this.state.fieldInput !== '' && this.state.answerInput === '') {
                ans = eval(this.state.fieldInput) 
                this.setState({
                  fieldInput: this.state.fieldInput + ' =',
                  answerInput: ans
                })
        } else if (this.state.answerInput !== '') {
                alert('Расчет уже произошел! Нажмите Reset для сброса.')
        } else {
          alert('Начните что-то считать!')
        }
      
      break;

      case 'Reset': 
          this.setState({
            fieldInput: '',
            answerInput: ''
          })
      break;

      default: 
      
      this.setState({
        fieldInput: this.state.fieldInput + value
      })
    }

       console.log(value)
   }


   returnTest = () => {
        this.props.history.push({
          pathname: '/test'
        })
   }


   render() {

    return (<div> 
           <div className='hcalc'><h1>Калькулятор</h1></div>
        <div className='calculator'>
          

            <div className='container'>
                  <div className='work-zone'>
                        <div className='input'>{this.state.fieldInput}</div>
                        <div className='display'>{this.state.answerInput}</div>
                  </div>
                  <div className='table'>
                        <div className='row'>
                            <button className='row-btn-reset' onClick={this.handlerClick} value={'Reset'}>Reset</button>
                            <button className='row-btn-division' onClick={this.handlerClick} value={'/'}>/</button>
                        </div>
                        <div className='row'>
                          <button className='row-btn' onClick={this.handlerClick} value={1}>1</button>
                          <button className='row-btn' onClick={this.handlerClick} value={2}>2</button>
                          <button className='row-btn' onClick={this.handlerClick} value={3}>3</button>
                          <button className='row-btn-multiplication' onClick={this.handlerClick} value={'*'}>*</button>
                        </div>
                        <div className='row'>
                          <button className='row-btn' onClick={this.handlerClick} value={4}>4</button>
                          <button className='row-btn' onClick={this.handlerClick} value={5}>5</button>
                          <button className='row-btn' onClick={this.handlerClick} value={6}>6</button>
                          <button className='row-btn-subtraction' onClick={this.handlerClick} value={'-'}>-</button>
                        </div>
                        <div className='row'>
                          <button className='row-btn' onClick={this.handlerClick} value={7}>7</button>
                          <button className='row-btn' onClick={this.handlerClick} value={8}>8</button>
                          <button className='row-btn' onClick={this.handlerClick} value={9}>9</button>
                          <button className='row-btn-sum' onClick={this.handlerClick} value={'+'}>+</button>
                        </div>
                        <div className='row'>
                          <button className='row-btn' onClick={this.handlerClick} value={0}>0</button>
                          <button className='row-btn' onClick={this.handlerClick} value={'.'}>.</button>
                          <button className='row-btn-equally' onClick={this.handlerClick} value={'='}>=</button>
                        </div>
                  </div>
             </div>
             <button className='btn-calculator' onClick={this.returnTest}>Подсчитал? <br></br>
             Пошли смотреть список машин!</button>
        </div>
    </div>
     
    );
   }
}

export default Calculator;
