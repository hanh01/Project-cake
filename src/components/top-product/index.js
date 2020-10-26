import React, {Component} from 'react';
import TableData from "./table-data";
import './style.scss'

class TopProduct extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <h1 className="top-product">SẢN PHẨM HÀNG ĐẦU</h1>
                </div>
                <TableData/>
            </div>
        );
    }
}

export default TopProduct;