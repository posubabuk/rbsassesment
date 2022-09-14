/** @format */

export const FetchCharinfo = async (baseURL) => {
  try {
    const response = await fetch(baseURL);
    const newData = await response.json();
    //console.log("FetchCharinfo :", newData.results);
    return newData.results;
  } catch (ex) {
    return "Failed request : ", ex;
  }
};
