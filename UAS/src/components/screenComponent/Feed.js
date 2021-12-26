import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../../styles';
import test from '../../storage/images/account.jpg';
import more from '../../storage/images/more.png';
import like from '../../storage/images/love.png';
import chat from '../../storage/images/chat.png';
import dm from '../../storage/images/dm.png';
import save from '../../storage/images/save.png';
import CobaDB from './CobaDB';
import Tampil1 from './Tampil1';
import Tampil2 from './Tampil2';
import Tampil3 from './Tampil3';
import Like1 from './Like1';
import Desc1 from './Desc1';

const Feed = () => {
    return (
        <View style={styles.container}>
            {/* post */}
            <View style={styles.profile}>
                <Image source={test} style={styles.profilePicture}></Image>
                <Text style={styles.profleText}><CobaDB /></Text>
                <Image source={more} style={styles.profileMore}></Image>
            </View>
            <View>
                <Image source={test} style={styles.post}></Image>
            </View>
            <View style={styles.react}>
                <View style={styles.leftSide}>
                    <Image source={like} style={styles.reactImage}></Image>
                    <Image source={chat} style={styles.reactImage}></Image>
                    <Image source={dm} style={styles.reactImage}></Image>
                </View>
                <View>
                    <Image source={save} style={styles.reactImage}></Image>
                </View>
            </View>
            <View style={styles.like}>
                <Text style={styles.profleTextLike}><Like1 /></Text>
                <Text> </Text>
                <Text style={styles.profleTextLike}>likes</Text>
            </View>
            <View style={styles.like}>
                <Text style={styles.profleTextLike}><CobaDB /></Text>
                <Text> </Text>
                <Text><Desc1 /></Text>
            </View>

            {/* post */}
            <View style={styles.profile}>
                <Image source={test} style={styles.profilePicture}></Image>
                <Text style={styles.profleText}><Tampil1 /></Text>
                <Image source={more} style={styles.profileMore}></Image>
            </View>
            <View>
                <Image source={test} style={styles.post}></Image>
            </View>
            <View style={styles.react}>
                <View style={styles.leftSide}>
                    <Image source={like} style={styles.reactImage}></Image>
                    <Image source={chat} style={styles.reactImage}></Image>
                    <Image source={dm} style={styles.reactImage}></Image>
                </View>
                <View>
                    <Image source={save} style={styles.reactImage}></Image>
                </View>
            </View>
            <View style={styles.like}>
                <Text style={styles.profleTextLike}><Like1 /></Text>
                <Text style={styles.profleTextLike}> </Text>
                <Text style={styles.profleTextLike}>likes</Text>
            </View>
            <View style={styles.like}>
                <Text style={styles.profleTextLike}><CobaDB /></Text>
                <Text> </Text>
                <Text><Desc1 /></Text>
            </View>

            {/* post */}
            <View style={styles.profile}>
                <Image source={test} style={styles.profilePicture}></Image>
                <Text style={styles.profleText}><Tampil2 /></Text>
                <Image source={more} style={styles.profileMore}></Image>
            </View>
            <View>
                <Image source={test} style={styles.post}></Image>
            </View>
            <View style={styles.react}>
                <View style={styles.leftSide}>
                    <Image source={like} style={styles.reactImage}></Image>
                    <Image source={chat} style={styles.reactImage}></Image>
                    <Image source={dm} style={styles.reactImage}></Image>
                </View>
                <View>
                    <Image source={save} style={styles.reactImage}></Image>
                </View>
            </View>
            <View style={styles.like}>
                <Text style={styles.profleTextLike}><Like1 /></Text>
                <Text style={styles.profleTextLike}> </Text>
                <Text style={styles.profleTextLike}>likes</Text>
            </View>
            <View style={styles.like}>
                <Text style={styles.profleTextLike}><CobaDB /></Text>
                <Text> </Text>
                <Text><Desc1 /></Text>
            </View>

            {/* post */}
            <View style={styles.profile}>
                <Image source={test} style={styles.profilePicture}></Image>
                <Text style={styles.profleText}><Tampil3 /></Text>
                <Image source={more} style={styles.profileMore}></Image>
            </View>
            <View>
                <Image source={test} style={styles.post}></Image>
            </View>
            <View style={styles.react}>
                <View style={styles.leftSide}>
                    <Image source={like} style={styles.reactImage}></Image>
                    <Image source={chat} style={styles.reactImage}></Image>
                    <Image source={dm} style={styles.reactImage}></Image>
                </View>
                <View>
                    <Image source={save} style={styles.reactImage}></Image>
                </View>
            </View>
            <View style={styles.like}>
                <Text style={styles.profleTextLike}><Like1 /></Text>
                <Text style={styles.profleTextLike}> </Text>
                <Text style={styles.profleTextLike}>likes</Text>
            </View>

            <View style={styles.like}>
                <Text style={styles.profleTextLike}><CobaDB /></Text>
                <Text> </Text>
                <Text><Desc1 /></Text>
            </View>
        </View>
        
    )
}

export default Feed;
