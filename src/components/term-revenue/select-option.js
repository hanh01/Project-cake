import React, {Component} from 'react';
import {Select} from "antd";
import apiUrl from "../../constants/api";
import Request from "../../common/network/http/Request";
import {selectMonth} from "../../actions/product";
import {connect} from "react-redux";
import {months} from "../../constants/chart";

const { Option } = Select;

class SelectOption extends Component {

    constructor(props){
        super(props);
        this.state= {
            data:[],
        }
    }

    componentWillUnmount() {
        this.props.dispatch(selectMonth(months));
        console.log(this.componentDidMount)
    }

    handleClick = (month) => {
        this.props.dispatch(selectMonth(month));
    };

    render() {
        const {month} = this.state;
        return (
            <div>
                <Select defaultValue={month} style={{ width: 120 }} onChange={this.handleClick}
                >
                    {months.map(({name,value}) => (
                        <Option value={value} key={value}>
                            {name}
                        </Option>
                    ))}
                </Select>
            </div>
        );
    }
}


export default SelectOption;