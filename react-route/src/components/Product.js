import React from 'react'
import { useParams } from 'react-router-dom';

export default function Product() {
    const params=useParams();
  return (
    <div>
      Product {params.id}
    </div>
  )
}