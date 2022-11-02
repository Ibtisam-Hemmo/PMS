import { Pharmacy as PharmacyModel } from '../../models';

const { Op } = require('sequelize');

const pharmaciesQuery = (
  page: number,
  pharmacyLocation: string,
  pharmacyName: string
) =>
  PharmacyModel.findAndCountAll({
    where: {
      location: {
        [Op.iLike]: `%${pharmacyLocation}%`,
      },
      name: {
        [Op.iLike]: `%${pharmacyName}%`,
      },
      status: 'Opened',
    },
    attributes: ['id', 'name', 'location', 'image'],
    offset: 12 * (page - 1),
    limit: 12,
  });

export default pharmaciesQuery;
