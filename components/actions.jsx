import * as actions from "./actionTypes";

export const addCost = (amount, description) => {
  return {
    type: actions.Add_Cost,
    payload: {
      amount: amount,
      description: description,
    },
  };
};

export const addEarn = (amount, description) => {
  return {
    type: actions.Add_Earn,
    payload: {
      amount: amount,
      description: description,
    },
  };
};

export const getHistory = () => {
  return {
    type: actions.Get_History,
  };
};

export const getNetWorth = () => {
  return {
    type: actions.Get_Networth,
  };
};
