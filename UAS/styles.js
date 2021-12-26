import { StyleSheet, ScrollView } from "react-native";
import { HORIZONTAL } from "react-native/Libraries/Components/ScrollView/ScrollViewContext";

const styles=StyleSheet.create({
    container: {
        flex: 1
    },
    // pembagian layar
    line1: {
        flexDirection:"row",
        justifyContent: "space-between",
        paddingHorizontal: 15, 
        alignItems: "center",
        margin: 5
    },

    // story section
    story: { 
        margin: 5, 
    },

    storyImage: {
        width: 70, 
        height: 70, 
        borderRadius: 100, 
        margin : 5
    },
    backgroundContainer: {
        position: "absolute", 
        width: 80, 
        height: 80, 
        borderRadius: 100, 
        borderColor: "red", 
        borderWidth: 1, 
        overflow: "hidden", 
    },
    storyItems: {
        margin:5,
        alignItems: "center"
    },
    // end story section

    // feed section
    profilePicture: {
        width: 33, 
        height: 33,
        borderRadius: 100, 
        marginRight: 10,
    },
    profileMore: {
        width: 15, 
        height: 15,
        borderRadius: 100, 
        marginRight: 10,
    },
    profleText: {
        color: "black",
        fontWeight: "bold",
        flex: 1
    },
    profleTextLike: {
        color: "black",
        fontWeight: "bold",
    },
    profleTextDesc: {
        color: "black",
    },
    profile: {
        flex: 1, 
        flexDirection: "row",
        margin: 10, 
        alignItems: "center"
    },
    like: {
        flex: 1, 
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 15,
    },
    post: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
    react: {
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10,
        marginTop: 5,
    },
    reactImage: {
        width: 28, 
        height: 28,
        margin: 3
    },
    leftSide: {
        flex: 1,
        flexDirection: "row"
    },
    // end feed section

    logoTeks: {
        fontFamily: "Lobster-Regular",
        fontSize: 25,
        fontWeight:"bold",
        color: "black"
    },
    imgTopBar: {
        flex:1,
        width:25,
        height:25,
        resizeMode:'contain',
        marginLeft: 5,
        marginRight: 5
    },
    imgTopBarIconIG: {
        flex:4,
        width:30,
        height:30,
        resizeMode:'contain',
        marginRight: 100
    },
});

export {styles};