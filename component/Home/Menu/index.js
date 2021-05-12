import React , {useEffect,useState,useContext}from 'react';
import {    View,
            Text,
            ScrollView,
            ActivityIndicator,
            Image 
} from 'react-native';
//import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {FirebaseContext} from '../../../provider';



const MenuTitle = ({data}) =>{
    return(
    <View style={styles.menuScroll}>                    
                
                 <Text style={styles.menueText}>
                     {data.name}
                 </Text>
            </View>  
    )}
const Menu = () => {
    /***************
     * * Init state 
     ***************/
    const [menuLists , setMenu]= useState([]);
    const [isLoading , setIsLoading]= useState(false);

    /***************** 
     * * Context utile 
     *****************/
    const {getMenu} = useContext(FirebaseContext)
 
    

    /*****************************************************
     * * Event didmont,didUpdate, wilmount (Cycle de vie)
     *****************************************************/
    useEffect(()=>{
        
        setIsLoading(true);
        const menuSubscriber= 
        /*****************
         * * Context menu
         *****************/
        getMenu("desc")
        .onSnapshot( dataSnap =>{

            let menuData= [];

            dataSnap.forEach(data => {
                menuData = [...menuData,{id: data.id,...data.data()}]
            })
            setMenu(menuData)
           setTimeout (()=> setIsLoading(false), 5000);
        })
       
        return ()=> menuSubscriber()
       
    },[])


    return (
        <View>
            {/* titre menu */}
            <View style={styles.menuTitle}>
                <Text style={styles.menuTitleText}>Quel plat</Text>
                <Text style={styles.menuTitleText}>qui vous plaît</Text>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.scrolStyle}                                                                   
                >
                
                {(menuLists.length > 0 && !isLoading)? menuLists.map((data)=> <MenuTitle data={data}  key={data.id}/>
                ):    (<View style={styles.loadMenu}><ActivityIndicator size="small" color="#0000ff" /></View>) } 

            </ScrollView>

        </View>
    )
}

export default Menu
