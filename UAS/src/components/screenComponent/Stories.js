import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from '../../../styles';
import test from '../../storage/images/account.jpg';

const Stories = () => {
    return (
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.story}>
                <View style={styles.storyItems}>
                    <View style={styles.backgroundContainer}></View>
                    <Image source={test} style={styles.storyImage}></Image>
                    <Text style={{color: "black"}}>Your Story</Text>
                </View>
                <View style={styles.storyItems}>
                    <View style={styles.backgroundContainer}></View>
                    <Image source={test} style={styles.storyImage}></Image>
                    <Text style={{color: "black"}}>rani77</Text>
                </View>
                <View style={styles.storyItems}>
                    <View style={styles.backgroundContainer}></View>
                    <Image source={test} style={styles.storyImage}></Image>
                    <Text style={{color: "black"}}>Melon</Text>
                </View>
                <View style={styles.storyItems}>
                    <View style={styles.backgroundContainer}></View>
                    <Image source={test} style={styles.storyImage}></Image>
                    <Text style={{color: "black"}}>rani77</Text>
                </View>
                <View style={styles.storyItems}>
                    <View style={styles.backgroundContainer}></View>
                    <Image source={test} style={styles.storyImage}></Image>
                    <Text style={{color: "black"}}>Melon</Text>
                </View>
                <View style={styles.storyItems}>
                    <View style={styles.backgroundContainer}></View>
                    <Image source={test} style={styles.storyImage}></Image>
                    <Text style={{color: "black"}}>rani77</Text>
                </View>
                <View style={styles.storyItems}>
                    <View style={styles.backgroundContainer}></View>
                    <Image source={test} style={styles.storyImage}></Image>
                    <Text style={{color: "black"}}>Melon</Text>
                </View>
                <View style={styles.storyItems}>
                    <View style={styles.backgroundContainer}></View>
                    <Image source={test} style={styles.storyImage}></Image>
                    <Text style={{color: "black"}}>rani77</Text>
                </View>
                <View style={styles.storyItems}>
                    <View style={styles.backgroundContainer}></View>
                    <Image source={test} style={styles.storyImage}></Image>
                    <Text style={{color: "black"}}>Melon</Text>
                </View>
                <View style={styles.storyItems}>
                    <View style={styles.backgroundContainer}></View>
                    <Image source={test} style={styles.storyImage}></Image>
                    <Text style={{color: "black"}}>rani77</Text>
                </View>
                <View style={styles.storyItems}>
                    <View style={styles.backgroundContainer}></View>
                    <Image source={test} style={styles.storyImage}></Image>
                    <Text style={{color: "black"}}>Melon</Text>
                </View>
                <View style={styles.storyItems}>
                    <View style={styles.backgroundContainer}></View>
                    <Image source={test} style={styles.storyImage}></Image>
                    <Text style={{color: "black"}}>rani77</Text>
                </View>
                <View style={styles.storyItems}>
                    <View style={styles.backgroundContainer}></View>
                    <Image source={test} style={styles.storyImage}></Image>
                    <Text style={{color: "black"}}>Melon</Text>
                </View>
            </ScrollView>
    )
}

export default Stories;












// import React from 'react';
// import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
// import InstaStory from 'react-native-insta-story';
// import profile from '../../storage/images/account.jpg';
// import tambah from '../../storage/images/tambah.png';

// const Stories = () => {
//     const data = [
//         {
//             user_id: 1,
//             user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
//             user_name: "Ahmet Çağlar Durmuş",
//             stories: [
//                 {
//                     story_id: 1,
//                     story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
//                     onPress: () => console.log('story 1 swiped'),
//                 },
//                 {
//                     story_id: 2,
//                     story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
//                 }]
//         },
//         {
//             user_id: 2,
//             user_image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
//             user_name: "Test User",
//             stories: [
//                 {
//                     story_id: 1,
//                     story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
//                     onPress: () => console.log('story 1 swiped'),
//                 },
//                 {
//                     story_id: 2,
//                     story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
//                     onPress: () => console.log('story 2 swiped'),
//                 }]
//         }];


//     <InstaStory data={data}
//         duration={10}
//         onStart={item => console.log(item)}
//         onClose={item => console.log('close: ', item)}
//         customSwipeUpComponent={<View>
//             <Text>Swipe</Text>
//         </View>}
//         style={{ marginTop: 30 }} />
// };

// export default Stories;
