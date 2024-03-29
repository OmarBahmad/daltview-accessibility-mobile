import React, {useState, useEffect} from 'react';

import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, CheckBox } from 'react-native';

import {Button,Image, Text} from 'react-native-elements';

import {launchImageLibrary} from 'react-native-image-picker';

import {Container, ProductAreaView} from './styles';

Icon.loadFont();

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});

export default function Main({navigation}) {

  const { navigate } = navigation;

  const captureImage = async (type) => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      saveToPhotos: true,
    };
    
      launchCamera(options, (response) => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        const res = JSON.stringify(response.assets[0].uri);
     
        setFilePath(res.split('"').join(''))
      });
    }

  function chooseFile(type) {
    let options = {
      mediaType: type,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      
      const res = JSON.stringify(response.assets[0].uri);

      navigate('Imageview', {
        paramKey: res.split('"').join(''),
      })
    });
  }

  return (
    <Container source>
      <Header navigation={navigation} />
      <ProductAreaView>
        <Button
          title="Capture to cam"
          buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{color: 'white', marginHorizontal: 20}}
          onPress={() => captureImage('photo')}
        />

        <Button
          title="Import to gallary"
          buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{color: 'white', marginHorizontal: 20}}
          onPress={() => chooseFile('photo')}
        />
        <CheckBox
          value={false}
          onValueChange={true}
        />
      </ProductAreaView>
    </Container>
  );
}
