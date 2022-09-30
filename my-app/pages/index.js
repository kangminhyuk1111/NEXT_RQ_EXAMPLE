import axios from "axios";
import { useQuery } from "react-query";
import React from 'react';

const fetchingData = async() =>{
  const data = await axios.get(`/`)
  console.log(data);
}

fetchingData();

export default function Home() {
  return (
    <div>
      
    </div>
  )
}
