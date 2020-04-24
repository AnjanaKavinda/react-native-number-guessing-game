import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';
  import colors from '../constants/colors';

function Header(props) {
    return (
        <View style={styles.Header}>
        <Text style={styles.HeaderTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  Header: {
      width: '100%',
      height: 90,
      paddingTop: 36,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center'
  },
  HeaderTitle: {
      color: 'black',
      fontSize: 23
  }
});
export default Header
