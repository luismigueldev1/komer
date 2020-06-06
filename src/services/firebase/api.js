import db from "@react-native-firebase/firestore"

export async function getPopular({ collection }) {
  try {
    let popular = []
    return await db()
      .collection(collection)
      .get()
  } catch (error) {
    return error
  }
}
