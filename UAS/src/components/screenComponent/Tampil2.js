import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../styles';

class Tampil2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nama: '',
            deskripsi: '',
            suka: '',
            listData: [],
        };
        this.url = "http://192.168.1.7/api.php";
    }
    
    componentDidMount() {
        this.ambilListData(4)
    }
    async ambilListData(id) {
        await fetch(this.url + "?op=detail&id=" + id)
            .then((response) => response.json())
            .then((json) => {
                console.log('hasil yang didapat : ' + JSON.stringify(json.data.result));
                this.setState({ listData: json.data.result });
            })
            .catch((error) => {
                console.log(error);
            })
    }
    render() {
        return (
            <View>
                <View>
                    {
                        this.state.listData.map((val, index) => (
                            <View key={index}>
                                <Text style={styles.profleText}>{val.nama}</Text>
                            </View>
                        ))
                    }
                </View>
            </View>
        );
    }
}

export default Tampil2;
