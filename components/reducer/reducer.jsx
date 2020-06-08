// import DeviceInfo from "react-native-device-info";
import * as actions from "../actionTypes";
import moment from "moment";

const INITIAL_STATE = {
  _uniqueId: 1,
  total_spent: "0",
  total_earn: "0",
  history: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.Add_Cost:
      // payload = {type,amount,description}
      var new_history = [
        ...state.history,
        {
          type: "spend",
          amount: action.payload.amount,
          description: action.payload.description,
          date: moment(new Date()).format("MM-YYYY"),
        },
      ];
      var total_spent = state.total_spent;
      total_spent = (
        Number(total_spent) + Number(action.payload.amount)
      ).toString();

      return {
        _uniqueId: state._uniqueId,
        total_spent: total_spent,
        total_earn: state.total_earn,
        history: new_history,
      };
    case actions.Add_Earn:
      var new_history = [
        ...state.history,
        {
          type: "earn",
          amount: action.payload.amount,
          description: action.payload.description,
          date: moment(new Date()).format("MM-YYYY"),
        },
      ];
      var total_earn = state.total_earn;
      total_earn = (
        Number(total_earn) + Number(action.payload.amount)
      ).toString();

      return {
        _uniqueId: state._uniqueId,
        total_spent: state.total_spent,
        total_earn: total_earn,
        history: new_history,
      };
    case actions.Get_History:
      return [...state.history];
    case actions.Get_Networth:
      return (Number(state.total_earn) + Number(state.total_spent)).toString();
    default:
      return state;
  }
};

export default reducer;
