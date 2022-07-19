import AsyncStorage from "@react-native-async-storage/async-storage";

const setAsyncData = async (uid) => {
  try {
    await AsyncStorage.setItem("@user_id", uid);
  } catch (error) {
    console.error(error.mesage);
  }
};

const getAsyncData = async () => {
  try {
    const value = await AsyncStorage.getItem("@user_id");
    if (value !== null) {
      return value;
    } else {
      console.error("error in the getAsyncData function !");
      console.log(value);
    }
  } catch (error) {
    console.error(error.message);
  }
};

export { setAsyncData, getAsyncData };
