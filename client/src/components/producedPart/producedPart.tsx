import React from 'react';
import styles from './producedPart.module.scss'
import FeatureList, { FeatureListProps } from '../featuresList/featuresList';

export interface PartProps {
  title: string;
  featuresData: FeatureListProps[];
}

const ProducedPart = (props: PartProps) =>{
  return (
    <div className={styles.partContainer}>
      <h1 className={styles.partTitle}>{props.title}</h1>
      <div className={styles.featuresContainer}>
          {props.featuresData.map(
              (data, index) => <FeatureList name={data.name} color={data.color} featureData={data.featureData} key={index}></FeatureList>
          )}
      </div>
    </div>
  );
}

export default ProducedPart;