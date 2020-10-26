import React, {Component} from 'react';
import './style.scss';
import DetailProduct from "./detail-product";

class Detail extends Component {
    render() {
        return (
            <div>
                <h1>Chi tiết sản phẩm </h1>
               <div>
                   <DetailProduct/>
               </div>
            </div>
        );
    }
}

export default Detail;