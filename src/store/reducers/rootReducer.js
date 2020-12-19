import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import editReducer from "./editReducer";
import settingReducer from "./settingReducer";
import piceditReducer from "./profilePictureReducer";
import addeventsReducer from "./addeventsReducer";
import addalbumReducer from "./addalbumReducer";
import editprofiledetailsReducer from "./editprofiledetailsReducer";
import editfamilydetailsReducer from "./editfamilydetailsReducer";
import addeducationdetailsReducer from "./addeducationReducer";
import addexperiancedetailsReducer from "./addexperiancedetailsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  edit: editReducer,
  sett: settingReducer,
  picedit: piceditReducer,
  Events: addeventsReducer,
  albumlist: addalbumReducer,
  editprofiledetails: editprofiledetailsReducer,
  editfamilydetails: editfamilydetailsReducer,
  addeducationsdetails: addeducationdetailsReducer,
  addexperiancedetails: addexperiancedetailsReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;

// the key name will be the data property on the state object
