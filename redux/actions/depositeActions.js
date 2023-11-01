import {
  DEPOSIT_REQUEST,
  DEPOSIT_SUCCESS,
} from "../constants/depositConstants";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export const deposit = (amount, orderInfor, returnURL) => async (dispatch) => {
  try {
    dispatch({ type: DEPOSIT_REQUEST });
    // const token = await AsyncStorage.getItem("token");
    const accessToken = await SecureStore.getItemAsync("secure_token");
    // console.log(token);
    console.log("amount", amount);
    console.log("orderInfor", orderInfor);
    console.log("returnUrl", returnURL);
    const { data } = await axios.get(
      `https://holiday-swap.click/api/v1/payment/Create_payment?amount=${amount}&orderInfor=${orderInfor}&returnUrl=${returnURL}`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    console.log("check api payment", data);
    dispatch({ type: DEPOSIT_SUCCESS, payload: data });
  } catch (error) {
    //test code
    console.log("Loi ne", error);
    console.log("loi roi con di");
    dispatch({ type: DEPOSIT_REQUEST, payload: error.response.data.message });
  }
};
