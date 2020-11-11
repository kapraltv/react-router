import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './ChangeNameAndLastname.css' 

const CHANGE_FIRSTNAME = "CHANGE_FIRST_NAME";

const CHANGE_LASTNAME = "CHANGE_LAST_NAME";

const CLEAR_INPUT = 'CLEAR_INPUT';

const ChangeNameAndLastname = props => {
    
    let { firstName, lastName, ReadFirstName, ReadLastName, ClearInput } = props

    return (
        
        <div>
            <div><h1>Анкета</h1></div>

            <div className='form-change'>

                <div>
                    <input 
                    className='inputchange'
                    type='text'
                    placeholder='Введите ваше имя'
                    onChange={ event => ReadFirstName(event.target.value) }></input>
                </div>
                <div>
                    <input 
                    className='inputchange'
                    type='text'
                    placeholder='Введите вашу фамилию'
                    onChange={ event => ReadLastName(event.target.value) }></input>
                </div>
                <div className='result'>Ваше имя: {firstName} Ваша фамилия: {lastName}</div>
                <button
                className='btn-change'
                placeholder='Отобразить'
                onClick={ () => ClearInput() }>Удалить</button>

            </div>
        </div>
        
    )
}

function ChangeFirstName(firstname) {
    return {
        type: CHANGE_FIRSTNAME,
        data: firstname
    }
}

function ChangeLastName(lastname) {
    return {
        type: CHANGE_LASTNAME,
        data: lastname
    }
}

function mapStateToProps(state) {
    return {
        firstName: state.ReducerOne.firstName,
        lastName: state.ReducerOne.lastName
    }
}

function ClearInputAfterChange() {
    return {
        type: CLEAR_INPUT,
        data: ''
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ReadFirstName: bindActionCreators(ChangeFirstName, dispatch),
        ReadLastName: bindActionCreators(ChangeLastName, dispatch),
        ClearInput: bindActionCreators(ClearInputAfterChange, dispatch),
    }
}

const ConnectionOne = connect(mapStateToProps, mapDispatchToProps)(ChangeNameAndLastname)

export default ConnectionOne;