import React, { Component } from 'react';
import '../css/pagination.css'
import PropTypes from 'prop-types';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }
    componentWillMount() {
        // устанавливаем страницу если массив не пустой
        if (this.props.items && this.props.items.length) {
            this.setPage(1);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        //перезагружаем страницу если массив изменился
        if (this.props.items !== prevProps.items) {
            this.setState({pager:{}},() => this.setPage(1))
        }
    }
    setPage(page) {
        let { items } = this.props;
        let pager = this.state.pager;
        console.log(page,pager.totalPages)
        if (page < 1 || page > pager.totalPages) {
            return;
        }

        pager = this.getPager(items.length, page);

       let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);


        this.setState({ pager: pager });

        this.props.onChangePage(pageOfItems);
    }
    getPager(totalItems, currentPage, pageSize) {
        currentPage = currentPage || 1;

        pageSize = 50;

        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        let pages = [...new Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // возвращаем объект с данными
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
    render() {
        let pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            // не показываем если 1 страница
            return null;
        }

        return (
            <ul className="pagination">
                <li
                    className={pager.currentPage === 1 ? 'pagination__item pagination__item_disabled' : 'pagination__item'}
                    onClick={() => this.setPage(1)}
                >
                    <span >First</span>
                </li>
                <li
                    className={pager.currentPage === 1 ? 'pagination__item pagination__item_disabled' : 'pagination__item'}
                    onClick={() => this.setPage(pager.currentPage - 1)}
                >
                    <span >Previous</span>
                </li>
                {pager.pages.map((page, index) =>
                    <li
                        key={index}
                        className={pager.currentPage === page ? 'pagination__item_active pagination__item' : 'pagination__item'}
                        onClick={() => this.setPage(page)}
                    >
                        <span> {page}</span>
                    </li>
                )}
                <li
                    className={pager.currentPage === pager.totalPages ? 'pagination__item pagination__item_disabled ' : 'pagination__item'}
                    onClick={() => this.setPage(pager.currentPage + 1)}
                >
                    <span>Next</span>
                </li>
                <li
                    className={pager.currentPage === pager.totalPages ? 'pagination__item pagination__item_disabled ' : 'pagination__item'}
                    onClick={() => this.setPage(pager.totalPages)}
                >
                    <span >Last</span>
                </li>
            </ul>
        );
    }

}
Pagination.propTypes= {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired
}
export default Pagination