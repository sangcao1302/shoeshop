import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataProductApi } from '../../Redux/reducers/productReducer'

import { NavLink } from 'react-router-dom'
import Detail from '../Deatail/Detail'

export default function Home() {
    const {arrProduct}=useSelector(state=>state.productReducer)
    console.log(arrProduct)
    const dispatch=useDispatch()
    const getProductApi=()=>{
        const action=getDataProductApi()
        dispatch(action)
    }
    useEffect(()=>{
        getProductApi()
    },[])
  return (
    <div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 col-sm-6 col-md-6'>
                    <div className='banner' >

                        <img src="./assets/image/banner.png" alt="" className='w-75'/>
                    </div>
                </div>
                <div className='col-12 col-sm-6 col-md-6'>
                    <div className='text-banner mx-5'>
                        <h3>Product name</h3>
                        <p>The midsole contains 20% more Boost for an amplified Boost feeling</p>
                        <button type="button" className="btn btn-primary " style={{backgroundColor:"#F8B653",border:"none"}}>BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 col-sm-12 col-md-12
                
                
                 w-50 text-white px-4 py-2' style={{background: "linear-gradient(180deg, #F21299 0%, #1B02B5 100%)"}}>
                    <h1>All Product</h1>
                </div>
            </div>
            <div className='product mb-5'>
                    <div className='row g-5'>
                    {arrProduct?.map((item)=>{
                return <div className='col-12 col-sm-4 cold-md-4' key={item.id}>
                            <div className='image-product '>
                                <img src={item.image} alt="" className='w-100'/>
                                <p className='fs-3'>{item.name}</p>
                                <p>{item.description}</p>
                            </div>
                            <div className='foot-prodcut'>
                                <div className='row g-0'>
                                    <div className='col-12 col-sm-6 col-md-6 text-center'>
                                         <NavLink className="nav-link active" to={`/detail/${item.id}`} aria-current="page" style={{background: "rgba(157, 225, 103, 1)",lineHeight:"50px"}}  >Buy now</NavLink>
                                    </div>
                                    <div className='col-12 col-sm-6 col-md-6 text-center'>
                                        <div className='price' style={{background: "rgba(222, 221, 220, 1)",lineHeight:"50px"}}>{item.price}$</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                 
            })}
                    </div>
       
            </div>
        </div>
    </div>
  )
}
