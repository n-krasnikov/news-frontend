import { useRoutes } from 'react-router-dom';

import { Layout } from './components/Layout';
import { MainPage } from './pages/MainPage';
import { UserPage } from './pages/UserPage';
import { ErrorPage} from './pages/ErrorPage';
import { TestPage } from './pages/TestPage';


import './App.css';

function App() {

  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />
        },{
          path: 'users/:id',
          element: <UserPage />,
        },{
          path: 'test',
          element: <TestPage />,
        },{
          path: '*',
          element: <ErrorPage status={404} message={'Page Not Found'}/>
        }
      ]
    },
  ]);

  return element;
}

export default App;
