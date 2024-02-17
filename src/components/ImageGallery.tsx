import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

interface Photo {
  id: string;
  title: string;
  url: string;
  thumbailUrl: string;
  albumId: string;
}

const ImageGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const fetchImages = async () => {
    await fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => setPhotos(json));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <View className="pt-4">
      {photos.length > 0 &&
        photos.map((photo) => <Text key={photo.id}>{photo.title}</Text>)}
    </View>
  );
};

export default ImageGallery;
