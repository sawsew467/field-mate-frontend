import axios from "axios";

export const getAIResult = async (data) => {
  try {
    const apiUrl = "https://9dd6-1-54-240-129.ngrok-free.app";
    const apiFormData = new FormData();
    apiFormData.append("file", {
      uri: data.uri,
      name: "image.png",
      fileName: "image",
      type: "image/png",
    });
    const apiResponse = await axios.post(apiUrl, apiFormData);
    return apiResponse.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveImage = async (body) => {
  try {
    const apiUrl = "https://6391-118-69-34-155.ngrok-free.app/images";
    const apiResponse = await axios.post(apiUrl, body);
    return apiResponse.data;
  } catch (error) {
    console.log("error");
    console.log(error);
  }
};

export const getAllImages = async () => {
  try {
    const apiUrl = "https://6391-118-69-34-155.ngrok-free.app/images/all";
    const apiResponse = await axios.get(apiUrl);
    return apiResponse.data;
  } catch (error) {
    console.log("error");
    console.log(error);
  }
};
