import React,{useState} from "react";
import ContextProvider from "./Contextprovider";
import { View, Text } from 'react-native';

const ContextState = (props) => {

    const [postDetails,setPostDetails]=useState([]);

    const Addpost=(posttitle,postbody)=>{
        if(posttitle ===null && postbody === null){
            return console.log('enter all field')
        }
        setPostDetails([...postDetails,{title:posttitle,body:postbody}])
        
    }

    
    const contextValue={Addpost,postDetails}

  return (
   <ContextProvider.Provider value={contextValue}>
            {props.children}
   </ContextProvider.Provider>
  );
}

export default ContextState;
