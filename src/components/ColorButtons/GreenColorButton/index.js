import React, { useState } from 'react';
import {Button} from "react-native";

export default function GreenColorButton({getGreenColor}){

  let greenColorArray = {
    colorID = 2,
    rangeColor=[]
  };

  const GreenColor = () => {
    const initialRange = {
      h: 36,
      s: 100,
      v: 255
    };

    const finishedRange = {
      h: 65,
      s: 255,
      v: 255
    };

    for (let ih = initialRange.h; ih <= finishedRange.h; ih++) {
      for (let is = initialRange.s; is <= finishedRange.s; is++) {
        greenColorArray.rangeColor.push({ h: ih, s: is, v: initialRange.v });
      }
    }
  };

  return (
    <Button title="Verde" onPress={() => {
      GreenColor()
      getGreenColor(greenColorArray)}
    } />
  );
}
