import {date} from './app';
import React from 'react';
import { render } from 'react-dom';
import './globalStyles.scss'

const Time = () => <div>{date}</div>;

render(<Time />, document.getElementById("root"));

