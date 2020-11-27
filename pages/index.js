import React, { useState } from 'react'
import Head from 'next/head'
import Axios from 'axios'

const initialState = {
  pk: '',
  products: {}
}

export default function Home() {
  const [state, setstate] = useState(initialState)

  const handlerSearch = async () => {
    setstate({...state, products: {} })
    const request = await Axios.get(`/api/products/${state.pk}`)
    setstate({ ...state, products: request.data })
  }
  console.log(state);
  return (
    <div>
      <Head>
        <title>Priceshoes Prime</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="search">
        <h1>Buscar productos</h1>
        <div className="control">
          <input className="input" type="text" onChange={(e) => setstate({ ...state, pk: e.target.value })} value={state.pk} placeholder="ingresa el id del producto" />
        </div>
        <button className="button is-link" onClick={() => handlerSearch()}>Buscar</button>
      </div>
      <div className="products">
        {
          state.products.data && state.products.data.map(product => (
            <div className="produc">
              <h2>{product.name}</h2>
              <img width="400" src={product.image} alt="" />
            </div>))
        }
      </div>
    </div>
  )
}