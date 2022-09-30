import axios from "axios";
import { useQuery } from "react-query";
import React from 'react';

const API_KEY = '4r2MSxI1MaeVEVdIYloEsxJZ2vJCQfP7vIxD4hPgXUtbPbmIXylX3KSmBRqxqjfKqgQ24xag4QEY%2F%2FzT2hq82w%3D%3D';

const fetchingData = async() =>{
  const data = await axios.get(`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst
  ?serviceKey=${API_KEY}&numOfRows=10&pageNo=1
  &base_date=20210628&base_time=0600&nx=55&ny=127
  `)
  console.log(data);
}

fetchingData();

export default function Home() {
  return (
    <div>
      
    </div>
  )
}
