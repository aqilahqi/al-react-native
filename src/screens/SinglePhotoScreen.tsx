import { Image, View, Text } from 'react-native';
import React from 'react';
import type { Photo } from '../components/ImageGallery';

import PhotoCard from '../components/PhotoCard';

export default function SinglePhotoScreen(props: any) {
  let photo = props.route.params as Photo;

  return (
    <View className="flex-1 items-center bg-[#f2e9e4] px-6 pt-10">
      <Image
        source={{ uri: photo.url }}
        style={{
          width: '100%',
          height: 250,
          borderRadius: 20,
        }}
        className="mb-6"
      />
      <Text>{photo.title}</Text>
      {/* <PhotoCard
        photo={photo}
        height={250}
      /> */}
    </View>
  );
}
