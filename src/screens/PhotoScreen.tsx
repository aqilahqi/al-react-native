import { ScrollView, Text } from 'react-native';
import React from 'react';

import ImageGallery from '../components/ImageGallery';

const PhotoScreen = () => {
  return (
    <ScrollView className="bg-[#f2e9e4] pb-[90px] px-4">
      <Text className="text-[#22223b] mb-2">Hello, human!</Text>
      <Text className="font-bold text-4xl text-[#22223b]">
        Start browsing through our collection of{' '}
        <Text className="font-bold text-4xl text-[#9a8c98]">images</Text>
      </Text>
      <ImageGallery />
    </ScrollView>
  );
};

export default PhotoScreen;
