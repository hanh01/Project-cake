import React, {Component} from 'react';
import {Table} from "antd";
import apiUrl from "../../constants/api";
import Request from '../../common/network/http/Request';


class TableData extends Component {
    columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'images',
            key: 'images',
            render: (data,item) => (
                <img src={require('../images/' + item.images)} alt={''}
                     height="250px" width="100%"/>
            ),
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Giá bán',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Chi tiết',
            key: 'detail',
            dataIndex: 'detail',
        },

    ];

    constructor(props){
        super(props);
        this.state = {
            data: [],
        }
    }

    componentDidMount = () => {
        this.getData()
    };


    getData = () => {
        return Request.get(
            apiUrl.getTopProduct,
            {
            },{},
            'Loading...',
            'Success',
            'Error',
        )
            .then((data) => {
                this.setState({
                    data: data
                })
            })
            .catch(() => {
                this.setState({loading: false});
            })
            .finally(() => this.setState({loading: false}));
    };

    render() {
        const {data} = this.state;
        return (
            <div>
                <Table columns={this.columns}
                       dataSource={data}
                       bordered
                />
            </div>
        );
    }
}

export default TableData;