import React, {Component} from 'react';
import MonthlyRevenue from "./monthly-revenue";
import SelectOption from "./select-option";
import QuarterlyRevenue from "./quarterly-revenue";


class TermRevenue extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div style={{width: '1200px'}}>
                        <MonthlyRevenue/>
                        <SelectOption/>
                        <QuarterlyRevenue/>
                    </div>

                </div>
            </div>
        );
    }
}

export default TermRevenue;