import React, {Component} from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import apiUrls from "../../constants/api";
import Request from '../../common/network/http/Request';
import {connect} from "react-redux";


class QuarterlyRevenue extends Component {

    constructor(props){
        super(props);
        this.state= {
            data: [],
           loading: true,
            month: 'ck',
        }
    }

    componentDidMount = () => {
        this.getData();
        console.log(this.getData)
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        const {month} = this.props;
        if(prevProps.month !== month){
            this.getData(month);
        }
    }

    getData = () => {
        const {month} = this.props;
        return Request.get(
            apiUrls.getDetailProduct+ `?month=${month}`,
            {
            },
            '',
            '',
            '',
        )
            .then((data) => {
                this.setState({
                    data:data,
                })
            })
            .catch(() => {
                this.setState({loading: false});
            })
            .finally(() => this.setState({loading: false}));
    };


    render() {
        const {data} = this.state;
        const {month} = this.props;
        console.log(month);
        const options = {
            title: {
                text: 'Solar Employment Growth by Sector, 2010-2016'
            },

            subtitle: {
                text: 'Source: thesolarfoundation.com'
            },

            yAxis: {
                title: {
                    text: 'Number of Employees'
                }
            },

            xAxis: {
                categories: [
                       ...data.map(item =>
                           `<b>${item.month}</b>`,
                         ),
                     ]
            },

            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle'
            },

            /* plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2010
                }
            },
             */
            series: [{
                name: month,
                data: [
                    ...data.map(item =>
                                item.number,
                            ),
                ]
            }],

            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                    chartOptions: {
                        legend: {
                            layout: 'horizontal',
                            align: 'center',
                            verticalAlign: 'bottom'
                        }
                    }
                }]
            }
        };

        return (
            <div>

                <HighchartsReact highcharts={Highcharts} options={options} style={{width: '80%'}}/>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        month: state.searchType.month,
    };
};

export default connect(mapStateToProps)(QuarterlyRevenue);