import React from 'react';
import {render} from 'react-dom';
import './main.css';
import App from './component/App';
import Btn from './btn';
import Router from './Routers'

render(
  <Router/>,document.getElementById('app')
  );
