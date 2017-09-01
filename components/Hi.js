import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

class Hi extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            beBold: true
        }
    }
    toggle = () => {
        let beBold = !this.state.beBold
        this.setState({beBold})
    }
  render() {
    return (
        <View style={{alignItems:'center'}}>
            <Text onPress={this.toggle} style={[this.state.beBold ? styles.bold: styles.notBold, styles.bigText ]}>{this.props.name}</Text>
        </View>
    );
  }
}



const styles = StyleSheet.create({
  bigText: {
    fontSize: 54
  },
  bold: {
    fontWeight:'900'
  },
  notBold : {

  }
});

export default (Hi);
