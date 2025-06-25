import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Home } from './components/Home'
import { Add } from './components/Add'
import { List } from './components/List'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element:<Home/>,
      children:[
        {
          path: '',
          element:<List/>
        },
        {
          path: 'Add',
          element:<Add/>
        }
      ]
    }
  ])
  return (
      <RouterProvider router={routes}/>
  )
}

export default App
