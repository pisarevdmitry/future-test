import React, { Component } from 'react';
import { connect } from 'react-redux'
import fetchUsers from '../actions/fetchUsers'
import '../css/selectData.css'

class SelectData extends Component {
    constructor(props) {
        super(props)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }
    onSubmitHandler(e) {
        e.preventDefault()
         this.props.fetchUsers(e.target.select.value)
    }
    render() {
       return(
                <form className="selectData" onSubmit={this.onSubmitHandler}>
                    <h4>Выберите размер данных</h4>
                    <select className="selectData__select" name="select">
                        <option value="small">Маленький</option>
                        <option value="big">Большой</option>
                    </select>
                    <button type="submit">Загрузить</button>
                </form>
           )
    }
}

export default  connect(null, { fetchUsers })(SelectData)