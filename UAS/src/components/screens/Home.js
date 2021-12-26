import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from '../../../styles';
import tambah from '../../storage/images/tambah.png';
import igLogo from '../../storage/images/igLogo.png';
import activity from '../../storage/images/love.png';
import dm from '../../storage/images/dm.png';
import Stories from '../screenComponent/Stories';
import Feed from '../screenComponent/Feed';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.line1}>
                <Image source={igLogo} style={styles.imgTopBarIconIG}></Image>
                <Image source={tambah} style={styles.imgTopBar}></Image>
                <Image source={activity} style={styles.imgTopBar}></Image>
                <Image source={dm} style={styles.imgTopBar}></Image>
            </View>
            <ScrollView>
                <Stories />
                <View style={{borderBottomColor: '#dbdbdb',borderBottomWidth: 1,}}></View>
                <Feed />
            </ScrollView>
        </View>
    );
};

export default Home;
