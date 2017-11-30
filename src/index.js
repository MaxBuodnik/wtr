import {date} from './app';
import React from 'react';
import { render } from 'react-dom';
import './globalStyles.scss'
import bigImage from './bigImage.jpeg';

const Time = () => <div>{date}
  <img src={bigImage} alt="bigImage"/>
</div>;

render(<Time />, document.getElementById("root"));

