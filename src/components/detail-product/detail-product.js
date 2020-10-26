import React, { useEffect, useState} from 'react';
import apiUrl from "../../constants/api";
import Request from "../../common/network/http/Request";
import {useParams} from "react-router";



function DetailProduct () {
    const [product, setProduct] = useState([]);
    const {piid} = useParams();

    useEffect(() => {
        getCart()
    },[]);

    const getCart = () => {
        return Request.get(
            apiUrl.getProduct + `?piid=${piid}`,
            {},
            'Loading...',
            'Success',
            'Error',
        )
            .then((data)  => {
                setProduct(data);
            })
            .catch(error => console.log(error))
            .finally(error => console.log(error));
    };
    console.log(piid);

    return (
        <div>
            {product.map(product =>
                <div className="title-detail">
                    {product.name}
                    <div style={{width:'100%'}}>
                        <img className="img-product-detail" src={require('../images/' + product.images)} alt={''}
                              height="500px" width='70%'/>
                              <div className="detail">
                                  <div dangerouslySetInnerHTML={{
                                      __html:product.detail
                                  }} />
                              </div>
                    </div>
                </div>

            )}
        </div>
    );

}


export default DetailProduct;
