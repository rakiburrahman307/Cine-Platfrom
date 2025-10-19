import express from 'express';
import { UserRouter } from '../app/modules/user/user.route';
import { AuthRouter } from '../app/modules/auth/auth.route';
import SettingsRouter from '../app/modules/settings/settings.route';
import { UserManagementsRouter } from '../app/modules/userManagements/userManagements.router';
import { DramaManagementRoutes } from '../app/modules/dramaManagement/dramaManagement.route';

const router = express.Router();
const routes = [
     {
          path: '/auth',
          route: AuthRouter,
     },
     {
          path: '/users',
          route: UserRouter,
     },
     {
          path: '/settings',
          route: SettingsRouter,
     },
     {
          path: '/user-managements',
          route: UserManagementsRouter,
     },
     {
          path: '/drama-managements',
          route: DramaManagementRoutes,
     }
];

routes.forEach((element) => {
     if (element?.path && element?.route) {
          router.use(element?.path, element?.route);
     }
});

export default router;
