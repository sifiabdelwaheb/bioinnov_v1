import plantSaga from "./plantSaga";
import delePlantSaga from "./deletePlantSaga";
import updatePlantSaga from "./updatepalntSaga";
import identifySaga from "./identifySaga";
import searchSaga from "./searchSaga";
import detailsPlant from "./detailsSaga";
import ProductDetails from "./productdetailsSaga";
import SearchName from "./searchnameSaga";

const plant = [
  plantSaga,
  delePlantSaga,
  updatePlantSaga,
  identifySaga,
  searchSaga,
  detailsPlant,
  ProductDetails,
  SearchName,
];

export default plant;
