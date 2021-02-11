import React, { useEffect, useState } from 'react';
import styles from './home.module.scss';
import ApiService from '../../services/apiService';
import { IPart } from '../../services/models/apiServiceModel';
import ProducedPart from '../../components/producedPart/producedPart'


const Home = () =>{
  const [data, setData] = useState<IPart>();

  useEffect(() => {
    ApiService.getData().then(data => setData(data));
    
    setInterval(() => {
      ApiService.getData(true).then(data => setData(data))
    }, 10000);
  }, [])

  return (
    <div className={styles.homeContainer}>
      {data ? 
        <ProducedPart title={data.title} featuresData={data.features} />
        :
        <p>Now Loading...</p>        
      }
    </div>
  );
}

export default Home;