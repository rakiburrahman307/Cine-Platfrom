import { BannerService } from './banner.service';
import sendResponse from '../../../shared/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../../shared/catchAsync';

const createBanner = catchAsync(async (req, res) => {

     const result = await BannerService.createBannerToDB(req.body);

     sendResponse(res, {
          statusCode: StatusCodes.OK,
          success: true,
          message: 'Banner created successfully',
          data: result,
     });
});

const getAllBanner = catchAsync(async (req, res) => {
     const result = await BannerService.getAllBannerFromDB();

     sendResponse(res, {
          statusCode: StatusCodes.OK,
          success: true,
          message: 'Banner retrieved successfully',
          data: result,
     });
});

const updateBanner = catchAsync(async (req, res) => {
     const id = req.params.id;

     const result = await BannerService.updateBannerToDB(id, req.body);

     sendResponse(res, {
          statusCode: StatusCodes.OK,
          success: true,
          message: 'Banner updated successfully',
          data: result,
     });
});

const deleteBanner = catchAsync(async (req, res) => {
     const id = req.params.id;
     const result = await BannerService.deleteBannerToDB(id);

     sendResponse(res, {
          statusCode: StatusCodes.OK,
          success: true,
          message: 'Banner deleted successfully',
          data: result,
     });
});

export const BannerController = {
     createBanner,
     getAllBanner,
     updateBanner,
     deleteBanner,
};
