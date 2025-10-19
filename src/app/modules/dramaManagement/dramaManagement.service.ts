import { StatusCodes } from "http-status-codes";
import AppError from "../../../errors/AppError";
import QueryBuilder from "../../builder/QueryBuilder";
import { IDrama } from "./dramaManagement.interface";
import { DramaModel } from "./dramaManagement.model";

const createDrama = async (payload: IDrama) => {
    const result = await DramaModel.create(payload);
    if (!result) {
        throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create drama');
    }
    return result;
}

const getDramaById = async (id: string) => {
    const result = await DramaModel.findById(id);
    if (!result) {
        throw new AppError(StatusCodes.NOT_FOUND, 'Drama not found');
    }
    return result;
}

const getAllDrama = async (query: Record<string, unknown>) => {
    const queryBuilder = new QueryBuilder(
        DramaModel.find(),
        query,
    )
    const result = await queryBuilder.search(['title', 'description']).filter().sort().paginate().fields().modelQuery.exec();
    const meta = await queryBuilder.countTotal();
    return {
        meta,
        result,
    }
}
const updateDrama = async (id: string, payload: IDrama) => {
    const result = await DramaModel.findByIdAndUpdate(id, payload, { new: true });
    if (!result) {
        throw new AppError(StatusCodes.NOT_FOUND, 'Drama not found');
    }
    return result;
}

const deleteDrama = async (id: string) => {
    const result = await DramaModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    if (!result) {
        throw new AppError(StatusCodes.NOT_FOUND, 'Drama not found');
    }
    return result;
}

export const DramaManagementService = {
    getAllDrama,
    getDramaById,
    createDrama,
    updateDrama,
    deleteDrama,
}