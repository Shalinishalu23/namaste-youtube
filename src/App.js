import './App.css';
import Head from "../src/components/Head"
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utility/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage';
import Demo from './components/Demo';
import Demo2 from './components/Demo2';


const appRouter = createBrowserRouter(
  [
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainContainer />
        },
        {
          path: 'watch',
          element: <WatchPage />
        },
        {
          path: "demo",
          element: (
            <>
              <Demo />
              <Demo2 />
            </>
          ),
        },
      ]
    }
  ]
)

function App() {
  return (
    <Provider store={store}>
      <div >
        <Head />
        {/* <Body /> use this before router */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
