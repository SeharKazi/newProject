
import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import { Button, ListItem, Text } from '@rneui/themed';

type CartCardProps = {
    image?: string;
    title?:string;
    price?:string;
    discount?:string;
    itemNumber?:number;
    checked?:boolean|undefined;
  };

const CartCard=(props:CartCardProps)=>{

  return (   
        <View>
         <ListItem bottomDivider>
           <ListItem.CheckBox
             checkedIcon="check-circle"
             uncheckedIcon="circle-o"
             checkedColor='#FF612F'
             checked={props.checked||false}
             onPress={() => console.log()}
           />
           <ListItem.Content style={styles.content}>
            <ListItem>
           <Image source={{uri:props.image}}
           width={80}
           height={80}
           borderRadius={8}
           />
           </ListItem>
             <View style={styles.mainBox}>
              <Text>{props.title}</Text>
              <Text>{props.price}</Text>
              <View style={styles.innerBox}>
              <Text  style={{color:'red'}}>{props.discount}</Text>
              
              <View style={{flexDirection:'row'}}>
                <Button 
                type='clear' 
                buttonStyle={styles.button} 
                icon={{name:'minus', type:'font-awesome', size:12, color:'#8A8B9D'}} />
                <Text style={{fontSize:18}}>{props.itemNumber}</Text>
                <Button 
                 type='clear' 
                 buttonStyle={styles.button}
                icon={{name:'plus', type:'font-awesome', size:12}}/>
              </View>
              </View>
             </View>
             
           </ListItem.Content>
          
         </ListItem>
         
      </View>
    
  );
}
const styles=StyleSheet.create({
content:{
    flexDirection:'row', 
    justifyContent:'space-between'
},
mainBox:{
    flexDirection:'column' , 
    alignSelf:"center"
},
innerBox:{
    flexDirection:'row' , 
    marginTop:12 , 
    justifyContent:'space-between'
},
button:{
    backgroundColor:'#F6F6F6',
     borderRadius:30
}
})
export default CartCard;
