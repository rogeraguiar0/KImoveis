import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";

import { AppError } from "../../errors";

export const listSchedulesService = async (
  propertyId: string
): Promise<Object> => {
  const propertyRepo = AppDataSource.getRepository(Properties);

  const property = await propertyRepo.findOneBy({
    id: propertyId,
  });

  if (!property) throw new AppError("Can not find Property", 404);

  const propertiesSchedule = await propertyRepo
    .createQueryBuilder("properties")
    .innerJoinAndSelect("properties.schedule", "ps")
    .leftJoinAndSelect("ps.user", "su")
    .innerJoinAndSelect("properties.address", "pa")
    .innerJoinAndSelect("properties.category", "pc")
    .where("properties.id = :id", { id: propertyId })
    .getMany();

  console.log(propertiesSchedule);

  return propertiesSchedule;
};
