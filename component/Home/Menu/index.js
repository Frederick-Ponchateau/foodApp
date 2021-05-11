import React , {useEffect,useState,useContext}from 'react';
import {    View,
            Text,
            ScrollView,
            Image 
} from 'react-native';
//import firestore from '@react-native-firebase/firestore';
import styles from './styles';
import {FirebaseContext} from '../../../provider';
const Menu = () => {
    /***************
     * * Init state 
     ***************/
    const [menuLists , setMenu]= useState([]);

    /***************** 
     * * Context utile 
     *****************/
    const {getMenu} = useContext(FirebaseContext)


    /*****************************************************
     * * Event didmont,didUpdate, wilmount (Cycle de vie)
     *****************************************************/
    useEffect(()=>{
        

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
             
            {menuLists && menuLists.map((data)=> <View style={styles.menuScroll} key={data.id}>                    
                {/* <Image
                    source={require('../../assets/images/5.png')}
                    style={style.imageMenu}
                /> */}
                 <Text style={styles.menueText}>
                     {data.name}
                 </Text>
            </View>)}   
            </ScrollView>
            </View>
    )
}

export default Menu
