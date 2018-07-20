import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/detailedInfo.css'

class DetailedInfo extends Component {
    shouldComponentUpdate(nextProps) {
       return this.props.data !== nextProps.data
    }
    render() {
       const user = this.props.data;
       if (!user) {
           return null
       }
        return(
            <div className="info">
                <span>Выбран пользователь <b>{`${user.firstName} ${user.lastName}`}</b></span>
                <p>
                    {user.description}
                </p>
                <span>Адрес проживания: <b>{user.address.streetAddress}</b></span>
                <span>Город: <b>{user.address.city}</b></span>
                <span>Провинция/штат: <b>{user.address.state}</b></span>
                <span>Индекс: <b>{user.address.zip}</b></span>
            </div>
        )
    }
}
DetailedInfo.propTypes= {
    data: PropTypes.object,
}
export default (DetailedInfo)