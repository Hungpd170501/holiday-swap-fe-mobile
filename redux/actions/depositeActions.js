import {
  DEPOSIT_REQUEST,
  DEPOSIT_SUCCESS,
} from "../constants/depositConstants";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const deposit = (amount, orderInfor, returnURL) => async (dispatch) => {
  try {
    dispatch({ type: DEPOSIT_REQUEST });
    const token = await AsyncStorage.getItem("token");
    console.log(token);
    console.log("amount", amount);
    console.log("orderInfor", orderInfor);
    console.log("returnUrl", returnURL);
    const data = await axios.get(
      `https://holiday-swap.click/api/v1/payment/Create_payment?amount=${amount}&orderInfor=${orderInfor}&returnUrl=${returnURL}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    console.log("check api payment", data.data);
    dispatch({ type: DEPOSIT_SUCCESS, payload: data.data });
  } catch (error) {
    //test code
    console.log("Loi ne", error);
    console.log("loi roi con di");
    dispatch({ type: DEPOSIT_REQUEST, payload: data });
  }
};
