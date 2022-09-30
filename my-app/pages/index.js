import axios from "axios";
import { useQuery } from "react-query";
import React from 'react';
import { useRef } from "react";

const fetchingData = async() =>{
  return await axios.get(`http://localhost:3000/api/dataset`)
}

const firstQuery = useQuery('dataset',fetchingData)

export default function Home() {
  return (
    <div>
      
    </div>
  )
}
