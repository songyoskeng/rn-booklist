import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import BookList from './BookList'
class Home extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>The Best Seller</Text>
            <BookList />
        </View>
    );
  }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop : 15
    },
    row : {
        flex:1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center'
    },
    img : {width:75, height:90},
    bigText : {
        fontSize: 20,
        paddingLeft: 10,
        fontWeight: 'bold'
    }
});

export default (Home);
