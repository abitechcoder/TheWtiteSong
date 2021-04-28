import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Rhyme = ({title}) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconBg}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/imgs/icons/double-arrow-right.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBg}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/imgs/icons/blue-edit.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBg}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/imgs/song_template/delete.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  title: {
    color: '#000',
  },
  iconBg: {
    elevation: 5,
    padding: 5,
    margin: 3,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  titleContainer: {
    marginRight: 15,
  },
  infoContainer: {
    flexShrink: 1,
  },
});

export default Rhyme;
