import React from 'react';
import { IFeatureData } from '../../services/models/apiServiceModel';
import styles from './featuresList.module.scss' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import FeatureGridItem from './featureGridItem/featureGridItem';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface FeatureListProps {
  name: string,
  color: number,
  featureData: IFeatureData[]
}

const FeatureList = (props: FeatureListProps) => {

  const checkHeaderColor = (): string => {
    switch (props.color) {
      case 0:
        return styles.correct;
      case 1:
        return styles.warning;
      case 2:
        return styles.error;
      default:
        return styles.undefined;
    }
  }

  const checkHeaderIcon = (): IconProp => {
    switch (props.color) {
      case 0:
        return faCheckCircle;
      case 1:
        return faExclamationCircle;
      case 2:
        return faTimesCircle;
      default:
        return faQuestionCircle;
    }
  }

  return (
    <div className={styles.featureListContainer}>
      <header className={[styles.featureListHeader, checkHeaderColor()].join(' ')}>
        <div className={styles.headerLeft}>
          <FontAwesomeIcon icon={faCircle} />
          <p>{props.name}</p>
        </div>
        <div className={styles.headerRight}>
          <FontAwesomeIcon icon={checkHeaderIcon()} />
        </div>
      </header>
      <div className={styles.featuresGrid}>
        <div className={[styles.gridItemHeader, styles.gridItem].join(' ')}>Control</div>
        <div className={[styles.gridItemHeader, styles.gridItem].join(' ')}>Dev</div>
        <div className={[styles.gridItemHeader, styles.gridItem].join(' ')}>Dev Out Tol</div>
        <div className={[styles.gridItemHeader, styles.gridItem].join(' ')}></div>
        {
          props.featureData.map((row, index) => <FeatureGridItem control={row.control} dev={row.dev} devOutTol={row.devOutTol} icon={row.icon} key={index} />)
        }
      </div>
      <footer className={styles.featureListFooter}>
        ...
      </footer>
    </div>
  );
}

export default FeatureList;
