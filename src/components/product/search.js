import React, {Component} from 'react';
import {Button, Input} from 'antd';
import './style.scss';
import Request from "../../common/network/http/Request";
import apiUrl from "../../constants/api";
import {connect} from "react-redux";
import {searchProduct} from "../../actions/product";

class SearchProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            search: '',
        }
    }

    onSearch = (event) => {
        event.preventDefault();
        const name = event.target.elements.search.value;
        this.props.dispatch(searchProduct(name));
    };

    render() {
        return (
            <div>
                <div>
                    <b>Tìm kiếm sản phẩm</b>
                </div>
                <form action="" onSubmit={this.onSearch}>
                    <Input
                        placeholder="Nhập tên sản phẩm ..."
                        name="search"
                    />
                    <Button className="text-center search " htmlType="submit">
                        Tìm kiếm
                    </Button>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.name,
    };
};


export default connect(mapStateToProps)(SearchProduct);