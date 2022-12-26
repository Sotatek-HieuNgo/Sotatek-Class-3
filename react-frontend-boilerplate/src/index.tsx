import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import i18n from './i18n';
import reportWebVitals from './reportWebVitals';
import { I18nextProvider } from 'react-i18next';
import LoadingContainer from './components/Loading';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Router from './routes/Router';
import Header from './components/Header';

ReactDOM.render(
<React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <LoadingContainer>
                <ToastContainer autoClose={4000} hideProgressBar={false} closeOnClick pauseOnFocusLoss />
                <Router />
            </LoadingContainer>
        </I18nextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
