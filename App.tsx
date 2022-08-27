import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, Text, View} from 'react-native';

const {width, height} = Dimensions.get('screen');

const IndependenceDayScreen = () => {
  const [angleArr, setAngleArr] = useState([
    0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225,
  ]);

  

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#FF9933'}}></View>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFFFF',
        }}>
        <View
          style={{
            borderWidth: 4,
            width: height / 4,
            height: height / 4,
            overflow: 'hidden',
            alignItems: 'center',
            borderRadius: height / 8,
            justifyContent: 'center',
            borderColor: '#0000AA',
          }}>
          <View
            style={{
              borderWidth: 4,
              overflow: 'hidden',
              alignItems: 'center',
              width: height / 4 - 4,
              height: height / 4 - 4,
              justifyContent: 'center',
              borderRadius: height / 8,
              backgroundColor: '#FFFFFF',
            }}>
            {angleArr?.map(item => {
              return (
                <View
                  key={item.toString()}
                  style={{
                    height: 2,
                    width: '100%',
                    position: 'absolute',
                    backgroundColor: '#0000AA',
                    transform: [{rotate: `${item.toFixed(0)}deg`}],
                  }}
                />
              );
            })}
          </View>
        </View>
      </View>
      <View style={{flex: 1, backgroundColor: '#138808'}}></View>
    </View>
  );
};

export default IndependenceDayScreen;

const styles = StyleSheet.create({});


// import React from 'react';
// import { Text, View, StyleSheet, Image, Dimensions } from 'react-native';

// let { width } = Dimensions.get('window');

// export default function App() {
//   return (
//     <View style={styles.container}>
//     <Image
//       source={require("./src/assets/images/card.png")}
//       resizeMode="cover"
//       style={styles.image}
//     />
//     <View style={{flexDirection:'row', justifyContent:'space-around',marginTop:6}}>
//       <Text style ={{fontSize:15, color:' #2F2F2F',fontFamily:'Brandon Grotesque',lineHeight: 21 }}>
//       ABSTRACT PRINT MODAL MINI DRESS
//       </Text>
//       <Text style ={{fontSize:15, color:' #2F2F2F',fontFamily:'Brandon Grotesque',lineHeight: 21 }}>
//       Rs. 2499
//       </Text>
//     </View>
//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     width: 429,
//     height: 532,
//   }
// });