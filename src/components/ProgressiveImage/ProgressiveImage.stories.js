import React from 'react'
import { storiesOf  } from '@storybook/react';
import ProgressiveImage from './ProgressiveImage';

storiesOf('ProgressiveImage', module)
  .add('Default', () => (
    <ProgressiveImage
      src='https://images.unsplash.com/photo-1500043189552-8feddf8d9f64?ixlib=rb-0.3.5&s=bddd67af1ad37387bed29862502b5ba8&auto=format&fit=crop&w=1567&q=80'
      alt='Text Image'
    />
  ))
