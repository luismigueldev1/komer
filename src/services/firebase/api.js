import firestore from "@react-native-firebase/firestore"

export function getPopular(query) {
  let data = []
  let errorText = ""
  firestore()
    .collection(query)
    .get()
    .then(docs => docs.forEach(doc => data.push(doc.data())))
    .catch(error => (errorText = error.message))

  return { data, errorText }
}
