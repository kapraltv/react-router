import React from 'react';
import './Cross-zero.css';

class CrossZero extends React.PureComponent {
  constructor(props){
    super(props);

    this.state = {
      elements: Array(9).fill(null),
      count: 0,
      checkMotion: 'Ходит игрок X',
      winIsTrue: false,
      isDraw: false
    }

    this.arr = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    this.counter = 0
  }


  youWinner = () => {

    const valueSquare = (this.state.count % 2 === 0) ? 'X' : 'O';

    for (let i = 0; i < 8; i++) {

      let WinLine = this.arr[i];

        if (this.state.elements[WinLine[0]] === valueSquare
          && this.state.elements[WinLine[1]] === valueSquare
          && this.state.elements[WinLine[2]] === valueSquare
          && this.state.isDraw === false
          ) {
                this.setState({
                checkMotion: 'Выиграл ' + valueSquare,
                winIsTrue: true,
                isDraw: false
            }) 
            return
        } else if (this.state.elements[WinLine[0]] === valueSquare
          && this.state.elements[WinLine[1]] === valueSquare
          && this.state.elements[WinLine[2]] === valueSquare 
          && this.state.isDraw === false
          && this.counter === 9) {
                this.setState({
                  checkMotion: 'Выиграл ' + valueSquare,
                  winIsTrue: true,
                  isDraw: false
              }) 
              return
        }

        this.checkDraw()
    }
  }

  
  checkMotion = () => {
    
      if(this.state.count % 2 === 0) {
        this.setState( {
          checkMotion: 'Ходит игрок O'
        } ) } else {
          this.setState( {
            checkMotion: 'Ходит игрок X'
          } )
        }

    }


  checkDraw = () => {

    if (this.state.winIsTrue === false) {
      if (this.counter === 9){
        this.setState( {
          checkMotion: 'Ничья!',
          isDraw: true
      } ) 
      } 
    }
  }  


  handlerClick = e => {
      
    let element = e.target.getAttribute('element');
    let valueElements = this.state.elements;

    if (this.state.winIsTrue === true && !valueElements[element]) {
      alert('Игра закончилась! ' + this.state.checkMotion) 
      return this.handlerStartGame()
    } else if (this.state.winIsTrue === true && valueElements[element]) {
      alert('Игра закончилась! ' + this.state.checkMotion) 
      return this.handlerStartGame()
    }

    if (this.state.isDraw === true && valueElements[element]) {
      alert('Игра закончилась! Ничья!') 
      return this.handlerStartGame()
    }

      if (!valueElements[element]) {
        valueElements[element] = (this.state.count % 2 === 0) ? 'X' : 'O' ;
        this.setState({ count: this.state.count + 1 })
        this.setState({ elements: valueElements })
        this.counter++; 
      } else {
        alert('Два раза одному игроку ходить нельзя!')
        this.setState({ checkMotion: 'Ходит игрок ' + valueElements[element] })
      }

      if (this.counter > 8) {
        this.checkDraw()
      } else {
        this.checkMotion()
      }

      this.youWinner()
  }


  handlerStartGame = () => {
      this.setState({
        elements: Array(9).fill(null),
        count: 0,
        winIsTrue: false,
        checkMotion: 'Ходит игрок X',
      })
      this.counter = 0
  }

  returnCalculator = () => {
      this.props.history.push('/calculator')
  }


  render() {

    return (
 
    <div className='container'>
      <div className='title'><h1>Крестики-нолики</h1></div> 
      <div className="game-board">
          <div className='game-square' onClick={this.handlerClick} element='0'>{this.state.elements[0]}</div>
          <div className='game-square' onClick={this.handlerClick} element='1'>{this.state.elements[1]}</div>
          <div className='game-square' onClick={this.handlerClick} element='2'>{this.state.elements[2]}</div>
          <div className='game-square' onClick={this.handlerClick} element='3'>{this.state.elements[3]}</div>
          <div className='game-square' onClick={this.handlerClick} element='4'>{this.state.elements[4]}</div>
          <div className='game-square' onClick={this.handlerClick} element='5'>{this.state.elements[5]}</div>
          <div className='game-square' onClick={this.handlerClick} element='6'>{this.state.elements[6]}</div>
          <div className='game-square' onClick={this.handlerClick} element='7'>{this.state.elements[7]}</div>
          <div className='game-square' onClick={this.handlerClick} element='8'>{this.state.elements[8]}</div>
      </div> 
      <div className='check-motion'><h2>{this.state.checkMotion}</h2></div>
      <button className='btn-start' onClick={this.handlerStartGame}>Начать игру</button>
      <div>
      </div>
      <button className='btn-crosszero' onClick={this.returnCalculator}>Наигрался? Пошли считать!</button>
    </div>

    );
  }

}

export default CrossZero;
