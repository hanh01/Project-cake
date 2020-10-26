import React, {Component} from 'react';
import {Table} from "antd";
import Request from "../../common/network/http/Request";
import apiUrl from "../../constants/api";
import {connect} from "react-redux";

class ResultTable extends Component {
    columns = [
        {
            title: 'Sản phẩm',
            dataIndex: 'images',
            key: 'images',
            render: (data, item) => (
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
            dataIndex: 'price1',
            key: 'price1',
        },
        {
            title: 'Chi tiết',
            key: 'detail',
            dataIndex: 'detail',
        },

    ];

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: '',
        }
    }

    componentDidMount = () => {
        this.getData()
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {name} = this.props;
        if (prevProps.name !== name) {
            this.getData();
        }
    }

    getData = () => {
        const {name} = this.props;
        console.log(name);
        return Request.get(
            apiUrl.getProduct,
            {
                search: name,
            },
            'Loading...',
            'Success',
            'Error',
        )
            .then((data) => {
                this.setState({
                        data,
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

const mapStateToProps = (state) => {
    return {
        name: state.searchType.name,
    };
};

export default connect(mapStateToProps)(ResultTable);