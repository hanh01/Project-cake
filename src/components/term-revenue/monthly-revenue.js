import React, {Component} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import apiUrls from "../../constants/api";
import Request from '../../common/network/http/Request';


class MonthlyRevenue extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
        };
    }

    componentDidMount = () => {
        this.getData();
    };

    getData = () => {
        return Request.get(
            apiUrls.getTermRevenue,{},
            {},
            'Loading...',
            'Success',
            'Error',
        )
            .then((data) => {
                this.setState({
                    data: data,
                })
            })
            .catch(() => {
                this.setState({loading:false});
            })
            .finally(() => this.setState({loading:false}));
    };


    render() {
        const{data} = this.state;

        const options = {
            chart: {
                type: 'column',
                options3d: {
                    enabled: true,
                    alpha: 10,
                    beta: 25,
                    depth: 70
                }
            },
            title: {
                text: 'DOANH THU HÀNG THÁNG'
            },
            subtitle: {
                text: 'Notice the difference between a 0 value and a null point'
            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            xAxis: {
                categories: Highcharts.getOptions().lang.shortMonths,
                labels: {
                    skew3d: true,
                    style: {
                        fontSize: '16px'
                    }
                }
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            series: [{
                name: 'Sales',
                data: [...data.map(data =>
                    [data.revenue],
                )],
            }]
        };



        return (
            <div>
                <HighchartsReact highcharts={Highcharts} options={options} style={{width: '80%'}}/>
            </div>
        );
    }
}

export default MonthlyRevenue;