import React, {useState,useContext,useEffect} from 'react';
import { View, Text,FlatList,ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Product from './product';
import styles from './styles';
import {FirebaseContext} from '../../../provider';




const renderProduct = ({item}) =>{
   // console.log('item:',item)
    return( 
        
        <Product
        image={item.image}
        title={item.name}
        price={item.price}
        description={item.description}
        onPress={() =>console.log("test") /*this.props.navigation.navigate('Detail')*/ }/> 
    )
}
const FoodLists = () => {
    const [products, setProducts] = useState([]);
    const [isLoading , setIsLoading]= useState(false);
     /***************** 
     * * Context utile 
     *****************/
    const {getDataSort} = useContext(FirebaseContext)


      /*****************************************************
       * * Event didmont,didUpdate, wilmount (Cycle de vie)
       *****************************************************/
      useEffect(()=>{
          
        setIsLoading(true);
          const produitSubscriber= 
          /*****************
           * * Context Data sort
           *****************/
           getDataSort("produits","price","desc")
          .onSnapshot( dataSnap =>{
  
              let ProductData= [];
  
              dataSnap.forEach(data => {
                ProductData = [...ProductData,{id: data.id,...data.data()}]
              })
              setProducts(ProductData)
              setTimeout (()=> setIsLoading(false), 5000);
            
          })
          console.log("use effect  : ",products)
          return ()=> produitSubscriber()
         
      },[])
  

    return (
        <View>

            <View style={styles.foodList}>
                    <View style={styles.textFood}>
                            <Text style={styles.titreFoodList}>Nouveau Produit</Text>
                    </View>
                    <View style={styles.iconFood}>
                        <Icon
                            name="ellipsis-h"
                            size={25}
                            color="#848385"
                        />
                    </View>
            </View>
            
            <View style={styles.listProd} >
            {(products.length > 0 && !isLoading)?
                <FlatList
                
                    data={products}
                    numColumns={2}
                    renderItem={renderProduct}
                    keyExtractor={item => item.id}
                />
                :    (<View style={styles.loadMenu}><ActivityIndicator size="large" color="#0000ff" /></View>) } 
    
                    
                    
            </View> 
        </View>
    )
}

export default FoodLists;
