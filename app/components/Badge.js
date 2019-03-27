import React,{Component}from "react";
import { View } from "react-native";
import { connect } from 'react-redux'

@connect(({user})=>({user}))

class Badge extends Component {  
  render(){
    const {pendingCount}=this.props.user
  return (
    pendingCount>0?
    <View
      style={{
        borderRadius:5,
        width:7,
        height:7,
        backgroundColor:"#ed3f14",
        position: 'absolute',
        right:2,
        top:2
      }}
    /> :null
  );
}
};

export default Badge;
