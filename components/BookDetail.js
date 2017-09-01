import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
class BookDetail extends React.Component {
  render() {
    return (
        <TouchableOpacity onPress={()=> Actions.book({information: this.props.information})} style={styles.row}>
            <View style={{flex:2,flexDirection:'row',alignItems:'center'}}>
             
                <Image style={styles.img} source={{uri: this.props.book_image}} />
            </View>
            <View style={{flex:6, alignItems:'flex-end',paddingRight:15}}>
                <Text style={{fontSize:15, textAlign:'right'}}>{this.props.author}</Text>
                <Text style={{fontSize:17, textAlign:'right', fontWeight:'bold'}}> {this.props.title}</Text>
            </View>  
        </TouchableOpacity>
    );
  }
}
// <Text style={{fontSize:24, fontWeight:'bold',marginHorizontal:5}}>{this.props.rank}</Text>



const styles = StyleSheet.create({
    row : {
        flex:1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        paddingVertical:10
    },
    img : {width:75, height:90}
});

export default (BookDetail);
