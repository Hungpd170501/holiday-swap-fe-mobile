import { format } from "date-fns";
import {
  CREATE_OWNERSHIP_REQUEST,
  CREATE_OWNERSHIP_SUCCESS,
  CREATE_OWNERSHIP_FAIL,
  GET_OWNERSHIP_REQUEST,
  GET_OWNERSHIP_SUCCESS,
  GET_OWNERSHIP_FAIL,
} from "../constants/ownershipConstants";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";
import mine from "mime";

export const createOwnership =
  (
    propertyId,
    userId,
    roomId,
    endTime,
    startTime,
    type,
    weekNumbers,
    contractImages
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: CREATE_OWNERSHIP_REQUEST });

      const accessToken = await SecureStore.getItemAsync("secure_token");

      const config = {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();

      const coOwnerId = {
        propertyId: propertyId,
        userId: userId,
        roomId: roomId,
      };
      const coOwner = {
        endTime: type === "DEEDED" ? null : endTime,
        startTime: type === "DEEDED" ? null : startTime,
        type: type,
        timeFrames: weekNumbers?.map((element) => ({ weekNumber: element })),
      };
      const coOwnerIdBlob = new Blob([JSON.stringify(coOwnerId)], {
        type: "application/json",
      });
      const coOwnerBlob = new Blob([JSON.stringify(coOwner)], {
        type: "application/json",
      });

      formData.append("coOwnerId", coOwnerIdBlob);
      formData.append("coOwner", coOwnerBlob);
      contractImages.forEach((element) => {
        const newUri = "file://" + element.uri.split("file:///data/").join("");
        formData.append("contractImages", {
          uri: element.uri,
          type: mine.getType(element.uri),
          name: element.uri.split("/").pop(),
        });
      });

      console.log("Check formData", formData);

      const { data } = await axios
        .post(`https://holiday-swap.click/api/co-owners`, formData, config)
        .then((response) => {
          console.log("Success", response.data);
        })
        .catch((error) => {
          console.log("Check error", error);
        });

      console.log("Check data", data);

      dispatch({ type: CREATE_OWNERSHIP_SUCCESS, payload: data });
    } catch (error) {
      console.log("Error redux", error);
      dispatch({
        type: CREATE_OWNERSHIP_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const getListOwnership = (userId) => async (dispatch) => {
  try {
    dispatch({ type: GET_OWNERSHIP_REQUEST });

    const accessToken = await SecureStore.getItemAsync("secure_token");

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data } = await axios.get(
      `https://holiday-swap.click/api/co-owners?userId=${userId}&pageNo=0&pageSize=10&sortBy=property_id`,
      config
    );

    dispatch({ type: GET_OWNERSHIP_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_OWNERSHIP_FAIL, payload: error });
  }
};
