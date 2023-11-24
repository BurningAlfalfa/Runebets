import React from 'react';
import { View, Text, Image, Button,StyleSheet, TouchableOpacity } from 'react-native';
const runebetsImage = require('../../assets/images/runebets.png');


const HomeScreen: React.FC = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Runestreet Bets</Text>
      <Image 
        source={runebetsImage}
        style={styles.image}
      />
      <Text style={styles.subtext}>Trade fake money for real glory</Text>
      <Button 
        title="Start Trading" 
        onPress={() => navigation.navigate('Portfolio')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: '#00BFFF',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 20,
  },
  subtext: {
    fontSize: 20,
    marginBottom: 20,
  },
  startTradingButton: {
    backgroundColor: '#27A9E4',  // This appears to be the color from your image
    borderRadius: 20,  // Adjust as needed to match your image
    paddingHorizontal: 24,  // Adjust as needed for spacing on the left and right
    paddingVertical: 12,  // Adjust as needed for spacing on the top and bottom
    elevation: 5,  // This will add shadow for Android
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,  // Adjust as needed to match your image
  },
  startTradingText: {
    color: 'white',  // Text color
    fontSize: 18,  // Adjust as needed to match your image
    fontWeight: 'bold',  // Text boldness
    textAlign: 'center'
  },
});

export default HomeScreen;





// import FontAwesome from '@expo/vector-icons/FontAwesome';
// import { Link, Tabs } from 'expo-router';
// import { Pressable, useColorScheme } from 'react-native';

// import Colors from '../../constants/Colors';

// /**
//  * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
//  */
// function TabBarIcon(props: {
//   name: React.ComponentProps<typeof FontAwesome>['name'];
//   color: string;
// }) {
//   return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
// }

// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//       }}>
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Tab One',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//           headerRight: () => (
//             <Link href="/modal" asChild>
//               <Pressable>
//                 {({ pressed }) => (
//                   <FontAwesome
//                     name="info-circle"
//                     size={25}
//                     color={Colors[colorScheme ?? 'light'].text}
//                     style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
//                   />
//                 )}
//               </Pressable>
//             </Link>
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="two"
//         options={{
//           title: 'Tab Two',
//           tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
// }
