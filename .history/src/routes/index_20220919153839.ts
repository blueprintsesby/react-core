import Home from '../views/Home';
import { RouteConfig } from 'react-router-config';
const routes: RouteConfig = [
    {
        path: '/',
        exact: true,
        component: Home
    }
]

export default routes;
