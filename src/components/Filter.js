import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/filter.css'

class Filter extends Component{
    constructor(props) {
        super(props)
        this.state ={
            search: '',
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }
    onSubmitHandler(e) {
        e.preventDefault()
        this.props.action(e.currentTarget.select.value, this.state.search);
        this.setState({ search: ''})
    }
    renderSelect() {
       const { fields } = this.props;
       return fields.map(field =>
             <option key={field} value={field}>{field}</option>
        )
    }
    render() {
        return (
            <form className="filter-form" onSubmit={this.onSubmitHandler}>
                <span>Фильтрировать по:</span>
                <select className="filter__select" name="select">
                    {this.renderSelect()}
                </select>
                <input
                    className="filter-form__search"
                    type="text" placeholder="Найти"
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}/>

            </form>

        )
    }
}
Filter.propTypes= {
  fields: PropTypes.array.isRequired,
  action: PropTypes.func.isRequired
}
export default Filter