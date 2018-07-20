import React, { Component } from 'react';
import { connect } from 'react-redux'
import Pagination from './Pagination'
import DetailedInfo from './DetailedInfo'
import Filter from './Filter'
import UsersTable from './UsersTable'
import Error from './error'
import Loading from './loading'
import showUser from '../actions/showUser'
import sortingUsers from '../actions/sortingUsers';
import filterUsers from '../actions/filterUsers'
import '../css/usersComponent.css'

class UsersComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageOfItems: [],
        };
        this.onChangePage = this.onChangePage.bind(this);
        this.chooseUser = this.chooseUser.bind(this);
        this.initSorting = this.initSorting.bind(this)
    }
    onChangePage(pageOfItems) {
       this.setState({ pageOfItems: pageOfItems });
    }
    chooseUser(e) {
         const data = e.currentTarget.dataset;
         const user = this.state.pageOfItems.find(item => {
            return String(data.id) === String(item.myId)
        });
        this.props.showUser(user)
    }
    // проверка существует ли выбранный пользователь на странице
    isExist(user) {
        return user && this.state.pageOfItems.find((item => user.myId === item.myId));
    }
    // определяем столбец и направление сортировки
    initSorting(e) {
        const id =e.currentTarget.dataset.id;
        const sorted = this.props.users.sort;
        const direction = id === sorted.id && sorted.direction === 'asc' ? 'desc': 'asc';
        this.props.sortingUsers(this.props.users.filtered,id, direction)
    }
       render() {
        switch (this.props.ajax) {
            case 'waiting':
                return null;
            case null:
                return <Loading/>;
            case  false:
                return <Error message="Ошибка сервера, повторите загрузку позже"/>
            default:
                const users = this.props.users.allUsers;
                const sorted = this.props.users.sort;
                return(
                   <div className="container">
                        <div className="table-container">
                            <Filter
                                fields={['id','firstName','lastName','email','phone']}
                                // передает данные о всех пользователях и текущей сортировке
                                action={this.props.filterUsers.bind(null, users,sorted)}
                            />
                            <UsersTable
                                users={this.state.pageOfItems}
                                current={this.props.users.current}
                                fields={['id','firstName','lastName','email','phone']}
                                onMark={this.chooseUser}
                                sort={this.props.users.sort}
                                initSort={this.initSorting}
                            />
                            <Pagination items ={this.props.users.filtered} onChangePage={this.onChangePage}/>
                        </div>
                        <DetailedInfo data={this.isExist(this.props.users.current)}/>
                   </div>
                )
        }
    }
}
const mapStateToProps = ( {users, ajax })=> {
    return { users, ajax }
}
export default connect(mapStateToProps, { showUser, sortingUsers, filterUsers })(UsersComponent)