import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../shared/catchAsync"
import sendResponse from "../../../shared/sendResponse";
import { DramaManagementService } from "./dramaManagement.service";

const createDrama = catchAsync(async (req, res) => {
    const result = await DramaManagementService.createDrama(req.body);
    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.CREATED,
        message: 'Drama created successfully',
        data: result,
    });
})

const getDramaById = catchAsync(async (req, res) => {
    const result = await DramaManagementService.getDramaById(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: 'Drama retrieved successfully',
        data: result,
    });
})

const getAllDrama = catchAsync(async (req, res) => {
    const result = await DramaManagementService.getAllDrama(req.query);
    sendResponse(res, {
        success: true,
        statusCode: StatusCodes.OK,
        message: 'Drama retrieved successfully',
        data: result,
    });
})

export const DramaManagementController = {
    getAllDrama,
    getDramaById,
    createDrama,
    // updateDrama,
    // deleteDrama,
}