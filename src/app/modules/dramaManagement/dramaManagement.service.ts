import { IDrama } from "./dramaManagement.interface";
import { DramaModel } from "./dramaManagement.model";

const createDrama = async (payload: IDrama) => {
    const result = await DramaModel.create(payload);
    return result;
}
export const DramaManagementService = {
    // getAllDrama,
    // getDramaById,
    createDrama,
    // updateDrama,
    // deleteDrama,
}