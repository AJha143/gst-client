import loginSliceReducer from "./loginSliceReducer";
import spinnerReducer from "./spinnerReducer";

const rootReducer = {
  login :  loginSliceReducer,
  spinner: spinnerReducer
};

export default rootReducer;