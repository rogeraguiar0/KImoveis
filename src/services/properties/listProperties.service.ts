import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";

export const listPropertiesService = async (): Promise<
  Object[] | undefined
> => {
  const propertyRepo = AppDataSource.getRepository(Properties);

  const properties = await propertyRepo.find({
    relations: {
      address: true,
      category: true,
    },
  });

  return properties;
};
