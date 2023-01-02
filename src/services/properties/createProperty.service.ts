import AppDataSource from "../../data-source";
import { Adresses } from "../../entities/adresses.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";

import { AppError } from "../../errors";

import { IPropertyRequest } from "../../interfaces/properties/index";

import { propertyResponse } from "../../serializers/property.serializer";

export const createPropertyService = async (
  property: IPropertyRequest
): Promise<Object> => {
  const propertyRepo = AppDataSource.getRepository(Properties);
  const adressRepo = AppDataSource.getRepository(Adresses);
  const categoryRepo = AppDataSource.getRepository(Categories);

  const findCategory = await categoryRepo.findOneBy({
    id: property.categoryId,
  });

  if (!findCategory) throw new AppError("Invalid category id", 404);

  const findAdress = await adressRepo.findOne({
    where: {
      district: property.address.district,
      zipCode: property.address.zipCode,
      city: property.address.city,
      state: property.address.state,
    },
  });

  if (findAdress) throw new AppError("Property already exists", 409);

  const createdAdress = adressRepo.create(property.address);
  await adressRepo.save(createdAdress);

  const createdProperty = propertyRepo.create({
    value: property.value,
    size: property.size,
    address: createdAdress,
    category: findCategory,
  });
  await propertyRepo.save(createdProperty);

  return createdProperty;
};
