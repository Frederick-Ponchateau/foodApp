import React,{useContext} from 'react'
import Home from './component/Home';
import { FirebaseContext  } from './provider'


 const App = () => {
  // const {collectionAddProduit,firestore}= useContext(FirebaseContext);

  // collectionAddProduit(
  //     {
  //     image : "https://firebasestorage.googleapis.com/v0/b/food-app-35e21.appspot.com/o/images%2Fproducts%2F10.png?alt=media&token=68cb1516-8a70-426a-8406-aad2a8b1c5f7",
  //     name: "produit x",
  //     description: 'description',
  //     price : 55,
  //     dateAdd: firestore.Timestamp.fromDate(new Date()) 
  // })
   return (
      <Home/>
   );
 };
 
 export default App;