import { format } from "date-fns";
import {
  CREATE_OWNERSHIP_REQUEST,
  CREATE_OWNERSHIP_SUCCESS,
  CREATE_OWNERSHIP_FAIL,
} from "../constants/ownershipConstants";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

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
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
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
        console.log("check element", element.uri);
        formData.append("contractImages", element.base64);
      });

      console.log("Check formData", formData);

      const { data } = await axios
        .post(`https://holiday-swap.click/api/co-owners`, formData, config)
        .then(() => {
          console.log("Success");
        })
        .catch((error) => {
          console.log("Check error", error);
        });

      dispatch({ type: CREATE_OWNERSHIP_SUCCESS, payload: data });
    } catch (error) {
      console.log("Error redux", error);
      dispatch({
        type: CREATE_OWNERSHIP_FAIL,
        payload: error.response.data.message,
      });
    }
  };
