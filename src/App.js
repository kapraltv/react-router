import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import Home from './Home/Home'
import Calculator from './Calculator/Calculator'
import CrossZero from './Cross-zero/Cross-zero'
import ChangeThemes from './ChangeThemes/ChangeThemes'
import ListCars from './Car/ListCars'
import ConnectionOne from './Redux/ChangeNameAndLastname';
import ConnectionTwo from './Redux/ChangeCounter'
import { themesBTN, ThemeBTN, themesBody, ThemeBody } from './Context/Context'
import { CheckSignIn, loginInput, passwordInput } from './SignIn/Context.js'
import './App.css';

function ToolChangeTheme(props) {

  return (
      <ChangeThemes onClick={props.ChangeTheme}>
              Сменить цвет кнопки
      </ChangeThemes>
  );

}

function ToolChangeThemeBody(props) {

  return (
      <ChangeThemes onClick={props.ChangeTheme}>
              Сменить цвет темы
      </ChangeThemes>
  );

}

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      accessPlay: false,
      login: loginInput,
      password: passwordInput,
      theme: themesBTN.light,
      body: themesBody.white
    }

    this.ToggleBTN = () => { 
      this.setState( state => ({
          theme: 
          state.theme === themesBTN.dark 
          ? themesBTN.light
          : themesBTN.dark 
        })) 
      }

      this.Togglebody = () => { 
        this.setState( state => ({
            body: 
            state.body === themesBody.green
            ? themesBody.white
            : themesBody.green
          })) 
        }
    }
  

  render() {

    return (

      <body style={this.state.body}> 
      <header className='header'>
          <nav className='nav'>
  
              <ul className='nav-ul'>
                <li className='nav-ul-li'>
                  <NavLink style={{textDecoration: 'none'}} exact to='/'>Домашняя</NavLink>
                </li>
                <li className='nav-ul-li'>
                  <NavLink style={{textDecoration: 'none'}} to='/cross-zero'>Поиграем?</NavLink>
                </li>
                <li className='nav-ul-li'>
                  <NavLink style={{textDecoration: 'none'}} to='/calculator'>Посчитаем?</NavLink>
                </li>
                <li className='nav-ul-li'>
                  <NavLink style={{textDecoration: 'none'}} to='/cars'>Список машин</NavLink>
                </li>
                <li className='nav-ul-li'>
                  <NavLink style={{textDecoration: 'none'}} to='/changename'>Задать имя и фамилию</NavLink>
                </li>
                <li className='nav-ul-li'>
                  <NavLink style={{textDecoration: 'none'}} to='/changecounter'>Счетчик</NavLink>
                </li>

                <ThemeBTN.Provider value={this.state.theme}>
                   <ToolChangeTheme ChangeTheme={this.ToggleBTN}/> 
                </ThemeBTN.Provider>

                <ThemeBody.Provider value={this.state.body}>
                   <ToolChangeThemeBody ChangeTheme={this.Togglebody}/> 
                </ThemeBody.Provider>

              </ul>

          </nav>

              <button className='accescross' onClick={() => this.setState({
                  accessPlay: true
              })}>Показать контент</button>

              <button className='accescross' onClick={() => this.setState({
                  accessPlay: false
              })}>Убрать контент</button>


              { this.state.accessPlay && 
              <Route 
              exact
              path='/' 
              component={Home}/> }

              { this.state.accessPlay && 
              <Route 
              path='/cross-zero' 
              component={CrossZero}/> }

              { this.state.accessPlay && 
              <Route 
              path='/calculator' 
              component={Calculator}/> } 

              { this.state.accessPlay && 
               <Route 
               path='/cars' 
               component={ListCars}/> } 

              { this.state.accessPlay && 
               <Route 
               path='/changename' 
               component={ConnectionOne}/> } 

               { this.state.accessPlay && 
               <Route 
               path='/changecounter' 
               component={ConnectionTwo}/> } 

              { !this.state.accessPlay && 
              null }
  
              <Redirect to='/'/>
           
      </header>

      </body>
    );
  }

}

export default App;
