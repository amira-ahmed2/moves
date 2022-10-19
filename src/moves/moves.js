import React from 'react';
import {useEffect, useState } from 'react';
import axiosInstance from './../axiosConfig/instance';
import { Link } from "react-router-dom";

const Moves = () => {
// var currentpage=1;
const [page, setPage] = useState(1);
const [products,setMove]=useState([]);
    useEffect(() => {
axiosInstance.get(`/movie/popular?&page=${page}`).then((res)=>{
            console.log(res.data.results)
            // setPage(res.data.results)
        setMove(res.data.results)
    })
        .catch((err) => {
            console.log(err);
          });
       
    }, [page]);
 

// 4
function nextBtnHandler() {
  setPage(page => page + 1)
  console.log(page)
       
}
function prevBtnHandler() {
  setPage(page => page - 1)
  // setPage(page=>Math.max(page - 1, 1))
  console.log(page)
}


    return <>
   
   <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item">
      <button className="page-link btn btn-info" onClick={prevBtnHandler} disabled={page === 1} >Previous</button>
    </li>
  
    <li className="page-item">
      <button className="page-link btn btn-info" onClick={ nextBtnHandler } >Next</button>
    </li>
  </ul>
</nav>
{/* <div className='nav btn-container'>
        <button
          onClick={() => setPage(prevState => Math.max(prevState - 1, 0))}
          disabled={page === 1}
        >Prev Page</button>

        <button
          onClick={() => setPage(prevState => prevState + 1)}
        >Next Page</button>
      </div> */}
      
    <div className="col-12 row g-4 row-cols-1 row-cols-md-4 row-cols-2  p-5">
    {products.map((product) => {
        return (
        <Link to={`/move/${product.id}`} key={product.id}>
        <div className="cols p-4"key={product.id} >
    <div className=" border-0 card shadow">
    <img src={`https://image.tmdb.org/t/p/w500/${ product.poster_path}`} className="card-img-top" alt="..." style={{height:"370px"}}/>
      <div className=" d-flex justify-content-center flex-column card-body p-5 align-items-center">

        <h5 className="card-title">{product.title}</h5>    
      </div>
    </div>
  </div></Link> 
   );})}
  </div> 


   </>
}

export default Moves;
