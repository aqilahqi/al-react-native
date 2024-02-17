import { View } from 'react-native';
import React from 'react';
import type { Photo } from '../components/ImageGallery';

import PhotoCard from '../components/PhotoCard';

export default function SinglePhotoScreen(props: any) {
  let photo = props.route.params as Photo;
  return (
    <View className="flex-1 items-center justify-center bg-[#f2e9e4] pb-[90px]">
      <PhotoCard
        photo={photo}
        height={250}
      />
    </View>
  );
}
