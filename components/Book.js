import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

class Book extends React.Component {
  render() {
    const book = this.props.information
    console.log('book: ', book);
    return (
        <View style={styles.container}>
            <Image style={{width:150, height: 200}} source={{uri:book.book_image}}/>
            <View style={{padding:5, alignItems:'center'}}>
                <Text style={{fontSize:24, fontWeight: 'bold'}}>{book.title}</Text>
                <Text style={{fontSize:14,fontStyle:'italic'}}>{book.contributor}</Text>
                <Text style={{padding:15,textAlign:'center'}}>{book.description}</Text>
            </View>
        </View>
    );
  }
}



const styles = StyleSheet.create({
    container : {
        flex:1,
        paddingTop: 20,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default (Book);
