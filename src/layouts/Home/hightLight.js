import React, {Component, useEffect, useState} from 'react';
import {Card, Col, Row, Pagination, Divider, Button, Rate} from 'antd';
import Request from "../../common/network/http/Request";
import axios from 'axios';
import './style.scss';
import {Link} from "react-router-dom";
import apiUrl from "../../constants/api";
import logowhite2 from "../images/cheesecake3.jpg";
import routes from "../../constants/routes";
// import {apiUrl} from "../../constants/api";
const {Meta} = Card;

function HightLight() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getData()
    });

    const getData = () => {
        return Request.get(
            apiUrl.getProduct+`?kind=hl`,
            {},
            {},
            'Loading...',
            'Success',
            'Error',
        )
            .then((data) => {
                setProduct(data);
            })
            .catch(error => console.log(error))
            .finally(error => console.log(error));
    };

        return (
            <div style={{margin: '20px 0'}}>
                <div className="selling-products">Sản phẩm nổi bật</div>

                <div className="section">
                    <Row>
                        <Col span={10}>
                            <img src={logowhite2} alt={''}  width='80%' style={{margin: '0 51px'}}/>
                        </Col>
                        <Col span={14} style={{marginTop:'30px'}}>
                            <div style={{color: 'white'}}>
                                <h1 style={{color: 'white', fontSize: '30px'}}>Bánh nướng kem phô mai</h1>
                                <span>
                                    Bánh được làm từ bơ, trứng, sữa, kem cheese, không sử dụng lò nướng, tạo nên một chiếc mềm mịn,<br/> ngọt dịu tự nhiên, thơm hương kem sữa, ăn hoài không ngán không ngán.<br/>
                                    Bạn chắc chắn phải nếm thử (^.^).
                                </span><br/><br/>
                                <span style={{fontSize: '19px',color:'orange'}}> Giá bán : 70.000</span>
                            </div>
                        </Col>
                    </Row>
                </div><br/>

                <div className="site-card-wrapper">
                    <Row gutter={[16, 16]}>
                        {products.map(products =>
                            <Col span={8}>
                                <Link to={`${routes.getDetailProduct}${products.piid}`}>
                                <Card
                                    hoverable
                                    cover={<img className="logo-brand" src= { require('../images/' + products.images ) } alt={''} height="250px"/>}
                                >
                                    <Meta title={products.name} description={products.price1} />
                                    <Rate allowHalf defaultValue={4} />
                                    <Button style={{float:'right',margin:'10px 5px'}}>Xem chi tiết sản phẩm</Button>
                                </Card><br/>
                                </Link>
                            </Col>
                        )}
                    </Row>
                </div> <br/>
            </div>
        );
}

export default HightLight;