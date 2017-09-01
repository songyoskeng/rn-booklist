import React from 'react';
import { StyleSheet, Text, View, ListView, Image} from 'react-native';
import BookDetail from './BookDetail'


class BookList extends React.Component {
    constructor(){
        super()
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          data: [],
          loading: true
        };
    }
    fetchBooks(){
        fetch('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction?response-format=json&api-key=73b19491b83909c7e07016f4bb4644f9:2:60667290')
        .then(res => res.json())
        .then(resJSON => {
          // console.log(resJSON.);
          this.setState({data: resJSON.results.books, loading:false})
        })
      }
      componentWillMount() {
        this.fetchBooks()
      }
      
      _renderRow = (bookData) => (
        <BookDetail 
          title={bookData.title}
          author={bookData.author}
          book_image={bookData.book_image}
          rank={bookData.rank}
          information={bookData}
        />
      )
    render() {
      return (
        <View style={{flex:1}}>
            {
                this.state.loading?
                <View style={styles.fullView}>
                    <Image style={{width:150,height:150}} source={{uri:'https://i.pinimg.com/originals/0c/44/da/0c44dacf1b038014a6f941131c5e8aa2.gif'}}/>
                </View>
                :
                this.state.data.length > 0?
                <ListView 
                    style={{marginTop:20}}
                    dataSource={this.ds.cloneWithRows(this.state.data)}
                    renderRow={this._renderRow}
                    enableEmptySections={true}
                />
                :
                <View style={styles.fullView}>
                    <Text style={{fontSize: 24}}>Empty list</Text>
                </View>
                
            }
        </View>
       
      );
    }
  }
  
  
  
  const styles = StyleSheet.create({
      row : {
          flex:1,
          borderWidth: 0.5,
          borderColor: '#d6d7da',
          flexDirection: 'row',
          alignItems:'center',
          justifyContent: 'center'
      },
      img : {width:75, height:90},
      fullView: {flex:1,justifyContent:'center',alignItems:'center'}
  });
  
  export default (BookList);
  