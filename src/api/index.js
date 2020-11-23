import { firebaseDb } from "../firebase";

export const getAllCourses = async () => {
  try {
    const snapshot = await firebaseDb.collection("courses").get();
    return snapshot.docs.map((doc) => doc.data());
  } catch (error) {
    console.log(error);
  }
};
export const getMyCourses = async (email) => {
  try {
    const result = await firebaseDb
      .collection("mycourses")
      .where("email", "==", true)
      .get();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
