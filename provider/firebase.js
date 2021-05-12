import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


class Firebase{
    constructor(){
        this.auth = auth;
        this.firestore = firestore;
    }
    getMenu = (ordering) => firestore()
        .collection("menu")
        .orderBy("position",ordering) 

    getDataSort = (colection,champ ,order) => firestore()
        .collection(colection)
        .orderBy(champ,order)

    collectionAddProduit = (data) => firestore()
        .collection('produits')
        .add(data)

}

export default Firebase;