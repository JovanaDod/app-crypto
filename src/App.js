import LoginPage from './components/LoginPage';
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";
import RootLayout from './components/RootLayout';
import AssetPlatformsPage from './components/AssetPlatformsPage';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import './App.css';
import CryptoCurrenciesPage from "./components/CryptoCurrenciesPage";
import MyCoinPage from './components/MyCoinPage';
import RegisterPage from './components/RegisterPage';
import PrivateHomePage from './components/PrivateHomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: "root",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "assetPlatforms",
        element: <AssetPlatformsPage />,
      },
      {
        path: "/homePage",
        element: <PrivateHomePage />
      },
      {
        path: "cryptoCurrencies",
        element: <CryptoCurrenciesPage />,
      },
      {
        path: "myCoins",
        element: <MyCoinPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
    );
}

export default App;
