import express from 'express';
import validateRequest from '../../middlewares/validateRequests';
import { ServiceValidation } from './service.validation';
import { ServiceControllers } from './service.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();

router.post('/',
    auth(USER_ROLE.admin),
    validateRequest(ServiceValidation.serviceValidationSchema),
    ServiceControllers.createService);



export const ServiceRoutes = router;