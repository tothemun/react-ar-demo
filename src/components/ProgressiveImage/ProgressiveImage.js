import cn from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressiveImage.css';

const ProgressiveImage = (props) => {
  const imageStyle = {objectFit: props.fit};

  return (
    <div className={cn(styles.container, props.className)} style={props.style}>
      <img src={props.src} alt={props.alt} className={styles.image} style={imageStyle}/>
    </div>
  );
};

ProgressiveImage.defaultProps = {
  fit: 'cover'
};

ProgressiveImage.proTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  fit: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  style: PropTypes.obj
}

export default ProgressiveImage;
