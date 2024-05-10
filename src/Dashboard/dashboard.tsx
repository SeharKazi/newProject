
import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Header,Button, Text } from '@rneui/themed';
import LinearGradient from 'react-native-linear-gradient';
import CartCard from './cartCard';
const cardDetails=[{
  image:"https://s3-alpha-sig.figma.com/img/61b1/d926/eab4d6971f0670935ad73f22d456ed49?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SM-fUfIYGa6ZDBoFwizQB690ENu0-DzgxK6g4vIxvW~Zs9pWg46DWhW3mi3HdInSsZohmYZTIZcE5TpU2-Gjd1lk~7Kvp4Wy~eRaVOQQdQCEVcR6ZJyAKUrGsJ6wkBgwyr0SEkfHN9aywUNGlog94K3luYKFE5-bbhy4jNGmcpq6ptkneSLj508qWZQi1amDZ5c6LwysKaEvHwvRkulVxiOXmpCdOqSfCn7Ac-LhDM-gll0o8A1WNPmxgZNn0qEntg2vJTKQshitLBwURq1eCmu0seYfdzNHVvMFn3NNhyqp~bZtyhf12YlGkg56iGsyoJfAo27P8OfCaFzKSwSlVg__",
  title:"Tiara Muhallaba Dessert Mix 85...",
  price:"$550.9",
  discount:"15%",
  itemNumber:1,
  checked:false
},
{
  image:"https://s3-alpha-sig.figma.com/img/deca/7154/f15f2d45f8b3d47ae03e92484ff82a1f?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KsoyRDNhyQ2jByEtfVXEk5h1JkRzBMvYQba24j45zfuHvNycG-p98BhLLfF-SJkF6tAzQWqsilLDXfraIX9WIlwO-OAXBZF4yfMRpTPs3B-gj3lnqykNrzAoqk9y4yU2h~aVxAvbeofJmZ~6ScxgmoGsX9WDfh2JmmdJjMk9NqZdSr2f8iQfyqnlnfkH-vYTqiZiefCIR3bKEd9PxApRtjVgSbVW~O7MYGHm-dm2IRFbmN3MAWI6qXIX-Yc25o~BpB8qXmF-RlrDySxa4TRIwYICc2bcD~qa6VsA7p2KrasaC0zm1JhiNcekJVSeWYqjV0YU-7Sr1XDKUMTtIB5s7w__",
  title:"Elysees Gelatin Treatment Shamp...",
  price:"$550.9",
  discount:"Super Deal",
  itemNumber:4,
  checked:true
},
{
  image:"https://s3-alpha-sig.figma.com/img/deca/7154/f15f2d45f8b3d47ae03e92484ff82a1f?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KsoyRDNhyQ2jByEtfVXEk5h1JkRzBMvYQba24j45zfuHvNycG-p98BhLLfF-SJkF6tAzQWqsilLDXfraIX9WIlwO-OAXBZF4yfMRpTPs3B-gj3lnqykNrzAoqk9y4yU2h~aVxAvbeofJmZ~6ScxgmoGsX9WDfh2JmmdJjMk9NqZdSr2f8iQfyqnlnfkH-vYTqiZiefCIR3bKEd9PxApRtjVgSbVW~O7MYGHm-dm2IRFbmN3MAWI6qXIX-Yc25o~BpB8qXmF-RlrDySxa4TRIwYICc2bcD~qa6VsA7p2KrasaC0zm1JhiNcekJVSeWYqjV0YU-7Sr1XDKUMTtIB5s7w__",
  title:"Elysees Gelatin Treatment Shamp...",
  price:"$550.9",
  discount:"Free Shipping",
  itemNumber:2,
  checked:true
},
{
  image:"https://s3-alpha-sig.figma.com/img/deca/7154/f15f2d45f8b3d47ae03e92484ff82a1f?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KsoyRDNhyQ2jByEtfVXEk5h1JkRzBMvYQba24j45zfuHvNycG-p98BhLLfF-SJkF6tAzQWqsilLDXfraIX9WIlwO-OAXBZF4yfMRpTPs3B-gj3lnqykNrzAoqk9y4yU2h~aVxAvbeofJmZ~6ScxgmoGsX9WDfh2JmmdJjMk9NqZdSr2f8iQfyqnlnfkH-vYTqiZiefCIR3bKEd9PxApRtjVgSbVW~O7MYGHm-dm2IRFbmN3MAWI6qXIX-Yc25o~BpB8qXmF-RlrDySxa4TRIwYICc2bcD~qa6VsA7p2KrasaC0zm1JhiNcekJVSeWYqjV0YU-7Sr1XDKUMTtIB5s7w__",
  title:"Elysees Gelatin Treatment Shamp...",
  price:"$550.9",
  discount:"15%",
  itemNumber:1,
  checked:true
}]
const Dashboard=()=>{

  return (
      <>
         <Header
         ViewComponent={LinearGradient} 
         linearGradientProps={{
          colors: ['#FFD4C7', '#EFF3D3'],
          start: { x: 0, y: 0.5 },
          end: { x: 1, y: 0.5 },
        }}
        hideStatusBar={true}
        elevated={true}
        leftComponent={<Button icon={{
          name:'arrow-left',
          type:'font-awesome'

        }}
      type="clear"
  />}
  
    rightComponent={<Button icon={{
    name: 'trash-o',
    type: 'font-awesome',
    size: 25,
    color: 'black',
  }}
  type="clear"
  />}
 centerComponent={<Text h4 style={styles.title}>Shopping cart (4)</Text>}
/>     
{cardDetails.map((item, index) => (
  <View key={index}>
    <CartCard {...item} />
  </View>
))}
<View style={styles.bottomContainer}>
  <Text h4 style={styles.text}>$539.76</Text>
  <Button buttonStyle={styles.button}>Checkout (3)</Button>
</View>   
      </>
    
  );
}
const styles = StyleSheet.create({
  title:{
    fontFamily: "Aeonik",
fontSize: 20,
// lineHeight: 24,
letterSpacing: -0.40799999237060547,
alignSelf: "center",
marginTop:8

  },
  bottomContainer:{
    flexDirection:'row',
    justifyContent:'space-around',
    position:'absolute', 
    bottom:0, 
    right: 0,
    left: 0, 
  },
  text:{
    fontFamily: "Aeonik",
    fontSize: 22,
    color:'black',
    alignSelf:'center'
    
  },

  button:{
    width:169,
     borderRadius:5,
     backgroundColor: '#FF612F' 
  },
 
  content: {
    // fontWeight:700,
     fontSize:20, 
     justifyContent:'center', 
     marginTop:14
  },
});
export default Dashboard;
