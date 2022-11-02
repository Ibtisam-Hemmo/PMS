import { checkAuthData, logout, login, signUp } from './authentication';
import {
  requestStatus,
  getAdminOverview,
  getAllProductsAdmin,
  updatePharmacyStatusId,
  getAllPharmacies,
  allRequests,
} from './admin';
import {
  editRequests,
  pharmacyOverview,
  addRequests,
  salesHistory,
  productsInStock,
} from './pharamcies';
import pharmacies from './users';

export {
  checkAuthData,
  allRequests,
  getAllProductsAdmin,
  updatePharmacyStatusId,
  logout,
  login,
  signUp,
  requestStatus,
  getAllPharmacies,
  getAdminOverview,
  productsInStock,
  editRequests,
  salesHistory,
  addRequests,
  pharmacyOverview,
  pharmacies,
};
