import React from "react";
import { View ,Image,Text} from "react-native";
import { commonStyle } from "../utils";

const nodata = require("../assets/images/noData.png")
const SpaceView = ({ size=1,type,text,bgcolor,style }) => {
  
const styles = {
  container:{
    backgroundColor:bgcolor||"transparent",
    alignItems:"center",
    justifyContent:"center",
    flex:1,
    paddingBottom:20
  },
  nodata_img:{
    width:240*size*0.5,
    height:174*size*0.5
  },
  text:{
    paddingTop:10,
    color:commonStyle.h31Color,
    fontSize:commonStyle.h3Size,
    fontFamily:commonStyle.PFregular,
  }
}
  return !type ? (
    <View style={styles.container}>
     <Image source={nodata} style={styles.nodata_img} resizeMode='contain'/>
     <Text style={styles.text}>暂无数据</Text>
    </View>
  )  :null;
};

export default SpaceView;
