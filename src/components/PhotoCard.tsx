import { View, Text, Image } from 'react-native';
import React from 'react';
import type { Photo } from './ImageGallery';
interface Props {
  photo: Photo;
  height: number;
}
export default function PhotoCard(props: Props) {
  const { photo, height } = props;
  return (
    <View>
      <Image
        source={{ uri: photo.url }}
        style={{
          width: '100%',
          height: height,
          borderRadius: 20,
        }}
      />
      <Text>{photo.title}</Text>
    </View>
  );
}
