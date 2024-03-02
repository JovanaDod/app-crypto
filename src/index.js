import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContextProvider } from './components/context/user-context';
import { CoinContextProvider } from './components/context/coin-context';
import { MyCoinsContextProvider } from './components/context/my-coins-context';
import { AssetContextProvider } from './components/context/assest-platform-context';
import { RegisterContextProvider } from './components/context/register-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContextProvider>
  <CoinContextProvider>
    <MyCoinsContextProvider>
      <AssetContextProvider>
        <RegisterContextProvider>
        <App />
        </RegisterContextProvider>
     
      </AssetContextProvider>
      
    </MyCoinsContextProvider>
  </CoinContextProvider>
</UserContextProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
