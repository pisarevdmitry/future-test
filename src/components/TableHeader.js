import React, { Component } from 'react';

class TableHeader extends Component {
    renderData() {
        const { fields, initSort } = this.props;
        return fields.map((field, index) => {
          return(
                  <td
                      className={this.props.isSorted(field) ?
                          'users-table__header users-table__header_asc' :
                          'users-table__header users-table__header_desc'}
                      data-id={field}
                      key={index}
                      onClick={initSort}>
                      {field}
                  </td>
                )
        } )
    }
    render() {

        return(
            <tr>
                    {this.renderData()}
            </tr>
        )
    }
}

export default TableHeader