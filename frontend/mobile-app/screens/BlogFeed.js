import React,{useState} from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  FlatList,
  Text
} from "react-native";
import BlogPost from "../BlogPost"
import useBlogSearch from "../useBlogSearch"
import data from "../SampleData"
export default function WelcomeScreen({navigation}) {
  const [pageNumber,setPageNumber] = useState(1)
  
  const {
    blogs,
    hasMore,
    loading,
    error
    }  = useBlogSearch(pageNumber)
    
    function handleLoadMore(){
      if(hasMore && blogs.length ==20){
        setPageNumber(pageNumber+1)
        console.log(pageNumber)
      }
    }

  console.log(blogs)
  /*NOTE: If not connected to server, replace flatlist prop data ={blogs} with data ={data}
    Also, replace item._id with item.key and remove onEndReached prop of flatlist*/
  return (
    <View style={styles.home}>
      <Text>{loading && 'Loading...'}</Text>
      <Text>{error && 'ERROR'}</Text>
      <FlatList style={styles.listContainer}
	  data={blogs}
	  renderItem={({ item }) => {
        return(
          <BlogPost title={item.title} key={item._id} author={item.author} 
            HandlePress ={()=> navigation.navigate('Blog',{
              title:item.title,
              key:item._id,
              author:item.author,
            })}
          />
        )
    }}
    
    keyExtractor={item => item._id}
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    initialNumToRender={20}
    onEndReached={handleLoadMore}
    onEndReachedThreshold={0.5}
	/>
    </View>
  );
}
const windowW = Dimensions.get("window").width;
const windowH = Dimensions.get("window").height;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems:'center'
  },
  profile: {
    position: "absolute",
    left: 30,
    top: 55,
    width: 32,
    height: 32,
  },
  listContainer:{
    marginTop:20
  }
});
