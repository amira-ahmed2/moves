import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axiosInstance from './../axiosConfig/instance';
// import axios from 'axios';


const Move = (props) => {
      console.log(props);

    const params = useParams();
    console.log(params.id)

    const [product, setMove] = useState({});
    useEffect(() => {
        axiosInstance.get(`/movie/${params.id}?`)

        .then((res)=>{

              console.log(res.data)
                setMove(res.data)
                console.log(product)
            })
                .catch((err) => {
                    console.log(err);
                  });
               
            }, []);


    return     <>

    <div className="border-0 m-3 card mb-3">
  <div className="row g-0" key={product.id} >
    <div className="col-md-4">
    <img src={`https://image.tmdb.org/t/p/w500/${ product.poster_path}`} className="card-img-top" alt="..." />   
     </div>
    <div className="col-md-8 p-5 text-start">
      <div className="card-body">
        <h5 className="card-title">name : {product.title}</h5>
        <p className="card-text">story : {product.overview}</p>
      </div>
    </div>
  </div>
</div></>
};




export default Move;
