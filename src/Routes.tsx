import { Outlet, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login'

import { styled } from 'styled-components'
import Home from './pages/Home'
import Class from './pages/Class'
import EditCarroussel from './components/EditCarroussel'

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  max-width: 144rem;
  width: 100%;
  margin: 0 auto;
`

const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  )
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/class',
        element: <Class />,
      },
      {
        path: '/edit-carroussel',
        element: <EditCarroussel />,
      },
    ],
  },
])
