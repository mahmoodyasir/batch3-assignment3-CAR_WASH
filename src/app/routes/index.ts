import { Router } from 'express';
import { UserRoutes } from '../modules/User/user.route';
import { ServiceRoutes } from '../modules/Service/service.route';


const router = Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: UserRoutes
    },
    {
        path: '/services',
        route: ServiceRoutes
    }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;