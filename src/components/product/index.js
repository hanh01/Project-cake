import React, {Component} from 'react';
import ResultTable from "./result-table";
import Search from "./search";

class Product extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <h1 className="top-product">DANH SÁCH SẢN PHẨM</h1>
                    </div>
                    <Search/>
                    <ResultTable/>
                </div>
            </div>
        );
    }
}

export default Product;