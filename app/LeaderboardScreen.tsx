import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import React from 'react';

const Listdata = [
    {
      "name": "John Doe",
      "score": 150000,
      "imageUrl": "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
    },
    {
      "name": "Jane Smith",
      "score": 143500,
      "imageUrl": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
      "name": "Emily Johnson",
      "score": 139200,
      "imageUrl": "https://images.unsplash.com/photo-1517841905240-472988babdf9"
    },
    {
      "name": "Michael Brown",
      "score": 135700,
      "imageUrl": "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
    },
    {
      "name": "Chris Davis",
      "score": 130400,
      "imageUrl": "https://images.unsplash.com/photo-1541233349642-6e425fe6190e"
    },
    {
      "name": "Olivia Miller",
      "score": 127800,
      "imageUrl": "https://images.unsplash.com/photo-1552058544-f2b08422138a"
    },
    {
      "name": "Sophia Wilson",
      "score": 125600,
      "imageUrl": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
      "name": "William Moore",
      "score": 122400,
      "imageUrl": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
    },
    {
      "name": "James Taylor",
      "score": 120900,
      "imageUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
    },
    {
      "name": "Sophia White",
      "score": 119500,
      "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    }
    ,
    {
      "name": "Sophia Wilson",
      "score": 125600,
      "imageUrl": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
      "name": "William Moore",
      "score": 122400,
      "imageUrl": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
    },
    {
      "name": "James Taylor",
      "score": 120900,
      "imageUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
    },
    {
      "name": "Sophia White",
      "score": 119500,
      "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    },
    {
      "name": "Sophia Wilson",
      "score": 125600,
      "imageUrl": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
      "name": "William Moore",
      "score": 122400,
      "imageUrl": "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
    },
    {
      "name": "James Taylor",
      "score": 120900,
      "imageUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
    },
    {
      "name": "Sophia White",
      "score": 119500,
      "imageUrl": "https://images.unsplash.com/photo-1534528741775-53994a69daeb"
    }
  ]
  

const LeaderboardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.headerTitle}>Leader Board</Text>
        <View style={styles.MainCardcontainer}>
          { [3 ,1 ,2].map((item,index) => (
            <View key={index} style={[styles.MainCard, item !==1 && {marginTop:20}] }>
              <Image source={{uri: "https://images.unsplash.com/photo-1727162334294-170987f6b31b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}} 
                style={styles.MainCardImage} 
                resizeMode='cover'
              /> 
              <Text style={styles.MainCardTitle}></Text>    
              <View style={styles.MainCardcontainer }>
                <Text style={styles.MainCardRankContainer}>{item}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      <FlatList 
        data={Listdata} 
        renderItem={({item, index}) => (
          <View style={styles.Card}> 
            <View style={styles.CardDatacontainer}>
              <Text style={styles.CardIndex}>{index + 1}</Text>
              <Image source={{uri: item.imageUrl}} style={styles.CardImgae} resizeMode='cover'/>
              <Text style={styles.CardTitle}>{item.name}</Text>
            </View>
            <View style={styles.CardRankcontainer}>
              <Text style={styles.CardRankTitle}>{item.score}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#272C35",
    },
    topContainer:{ 
        backgroundColor:"#1A1F25",
        padding:30,
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
        gap:20,
    },
    headerTitle:{
        textAlign:"center",
        color:"white",
        fontSize:21,
        fontWeight:"bold",
    },
    MainCard:{
        backgroundColor:"#272C35",
        padding:20,
        alignItems:"center",
        borderRadius:10,
        paddingBottom:40,
        height:175,
    },
    MainCardcontainer:{
        flexDirection:"row",
        gap:10,
        justifyContent:"center"
    },
    MainCardImage:{
        width:70,
        height:90,
        borderRadius:20,
        gap:15,
    },
    MainCardTitle:{
        color:"white",
        fontSize:17,
        fontWeight:"600"
    },
    MainCardRankContainer:{
        backgroundColor:"orange",
        width:25,
        height:25,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30,
        position:"absolute",
        bottom:-35,
        textAlign:"center"
    },
    Card:{
        padding:20,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    CardIndex:{
        color:"white"
    },
    CardImgae:{
       width:50,
       height:50,
       borderRadius:50,
       marginLeft:10,
    },
    CardTitle:{
        color:"white",
        fontSize:17,
    },
    CardDatacontainer:{
        flexDirection:"row",
        alignItems:"center",
        gap:10,
    },
    CardRankcontainer:{},
    CardRankTitle:{
        color:"orange"
    },
});

export default LeaderboardScreen;
