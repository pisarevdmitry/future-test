import React, { Component } from 'react';
import TableBodyRow from './TableBodyRow'
import TableHeader from './TableHeader'
import '../css/userTable.css'

class UsersTable extends Component {
    constructor(props) {
        super(props);
        this.isCurrent = this.isCurrent.bind(this);
        this.isSorted = this.isSorted.bind(this)
    }
    // проверяем была ли применена сортировка по возрастанию для текущего столбца
    isSorted(id) {
        const sorted = this.props.sort;
        return id === sorted.id && sorted.direction === 'asc'

    }
    // проверка на выбранного пользователя
    isCurrent(user) {
        const { current } = this.props;
        if (!current) return false;
        return user.myId === current.myId
    }
    renderHeaders () {
        return(
                <TableHeader
                    fields={this.props.fields}
                    isSorted={this.isSorted}
                    initSort={this.props.initSort}
                />
            )
    }
    renderUsers() {
        const  { users } = this.props;
        return users.map((user,index) => {
            return(
                <TableBodyRow user={user}
                    key={index}
                    fields={this.props.fields}
                    current={this.isCurrent(user) }
                    onMark={this.props.onMark}
                />
            )
        })
    }
    render() {
        return (
            <table className="users-table">
                <thead>
                    {this.renderHeaders()}
                </thead>
                <tbody>
                    {this.renderUsers()}
                </tbody>
            </table>
        )
    }
}
export default UsersTable