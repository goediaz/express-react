import React, { useEffect, useState } from 'react';
import styles from './featureGridItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faTimesCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface IFeatureGridItemProps {
  control: string,
  dev: number,
  devOutTol: number,
  icon: number
}

const FeatureGridItem = (props: IFeatureGridItemProps) => {
  const [iconStyle, setIconStyle] = useState<string>('');

  useEffect(() => {
    switch (props.icon) {
      case 0:
        setIconStyle(styles.correct);
        break;
      case 1:
        setIconStyle(styles.warning);
        break;
      case 2:
        setIconStyle(styles.error);
        break;
    }
  }, [props.icon])

  const checkCorrectIcon = (): IconProp => {
    switch (props.icon) {
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
    <>
      <div className={styles.gridItem}>{props.control}</div>
      <div className={styles.gridItem}>{props.dev}</div>
      <div className={styles.gridItem}>{props.devOutTol}</div>
      <div className={[styles.gridItem, iconStyle].join(' ')}><FontAwesomeIcon icon={checkCorrectIcon()} /></div>
    </>
  );
}

export default FeatureGridItem;