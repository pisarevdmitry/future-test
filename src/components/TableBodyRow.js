import React, { Component } from 'react';

class TableBodyRow extends Component {
    render() {
        const {fields, current, user, onMark} = this.props
        return(
            <tr
                className={ current ? 'users-table__row__active': 'users-table__row'}
                data-id={user.myId}
                onClick={onMark}>
                {fields.map((field, index) => <td key={index} className="users-table__block">{user[field]}</td>)}

            </tr>
        )
    }
}

export default TableBodyRow