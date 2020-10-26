import React, {useEffect, useState} from 'react';
import Request from "../../common/network/http/Request";
import apiUrl from "../../constants/api";
import {Button, Card, Col, Pagination, Rate, Row} from "antd";
import {Link} from "react-router-dom";
import routes from "../../constants/routes";

const {Meta} = Card;
function Macaron1() {

    const [mochi, setMochi ] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(6);

    useEffect(() => {
        getLish()
    },[page, pageSize]);


    const getLish = () => {
        return Request.get(
            apiUrl.getProduct+`?page=${page}&limit=${pageSize}`,
            {},
            {},
            'Loading...',
            'Success',
            'Error',
        )
            .then((data) => {
                setMochi(data);
            })
            .catch(error => console.log(error))
            .finally(error => console.log(error));
    };

    return (
        <div>
            <div className="site-card-wrapper">
                <Row gutter={[16, 16]}>
                    {mochi.map(mochi =>
                        <Col span={8}>
                            <Link to={`${routes.getDetailProduct}${mochi.piid}`}>
                                <Card
                                    hoverable
                                    cover={<img className="logo-brand"
                                                src={require('../images/' + mochi.images)} alt={''}
                                                height="250px"/>}
                                >
                                    <Meta title={mochi.name} description={mochi.price1}/>
                                    <Rate allowHalf defaultValue={4}/>
                                    <Button style={{float: 'right', margin: '10px 5px'}}>
                                        Xem chi tiết sản phẩm
                                    </Button>
                                </Card><br/>
                            </Link>
                        </Col>
                    )}
                </Row>
            </div>
            <br/>
            <Pagination defaultCurrent={1} total={20}
                        pageSize={6}
                        onChange={(page,pageSize) => {
                            setPage(page);
                            setPageSize(pageSize)
                        }}
            />
        </div>
    );

}

export default Macaron1;