import { useRoutes } from "react-router-dom";

// import { Header } from './components/Header';
import { Layout } from "./components/Layout";
import { MainPage } from './pages/MainPage';
import { UserPage } from './pages/UserPage';
import { ErrorPage} from './pages/ErrorPage';


import './App.css';

function App() {

  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />
        },{
          path: "users/:id",
          element: <UserPage />,
        },{
          path: "*",
          element: <ErrorPage />
        }
      ]
    },
  ]);

  return element;
}

export default App;
