import express from 'express';
import auth from '../../middleware/auth';
import { USER_ROLES } from '../../../enums/user';
import { DramaManagementController } from './dramaManagement.controller';
import fileUploadHandler from '../../middleware/fileUploadHandler';
import parseFileData from '../../middleware/parseFileData';
import { FOLDER_NAMES } from '../../../enums/files';


const router = express.Router();

router
    .route('/')
    .get(auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN), DramaManagementController.getAllDrama)
    .post(auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN), fileUploadHandler(), parseFileData(FOLDER_NAMES.THUMBNAIL), DramaManagementController.createDrama);

router
    .route('/:id')
    .get(auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN), DramaManagementController.getDramaById)
    .put(auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN), DramaManagementController.updateDrama)
    .delete(auth(USER_ROLES.SUPER_ADMIN, USER_ROLES.ADMIN), DramaManagementController.deleteDrama);


export const DramaRoutes = router
