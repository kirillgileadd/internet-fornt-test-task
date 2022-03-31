import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";
import {createGlobalStyle} from "styled-components";
import "react-loader-spinner";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
`

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <>
                <Global/>
                <App/>
            </>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

