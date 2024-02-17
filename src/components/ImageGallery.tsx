import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image, Text, View, Alert, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Photo from './PhotoCard';

export interface Photo {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId: string;
}

interface Props {
  photo: Photo;
}

const PhotoCard = (props: Props) => {
  const { photo } = props;
  const navigation = useNavigation();
  return (
    <View
      className="mb-4"
      style={{ position: 'relative', flexShrink: 1, width: '48%' }}
    >
      <Pressable
        onPress={() => navigation.navigate('SinglePhoto', { ...photo })}
      >
        <Photo
          photo={photo}
          height={250}
        />
      </Pressable>
    </View>
  );
};

const ImageGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response: any) => {
        setPhotos(response.data);
      })
      .catch((error: any) => Alert.alert(error));
  };

  return (
    <View className="pt-4">
      <FlatList
        initialNumToRender={20}
        numColumns={2}
        ListEmptyComponent={() => (
          <View className="pt-10">
            <Text className="text-center animate-spin">Loading photos...</Text>
          </View>
        )}
        columnWrapperStyle={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
        data={photos}
        renderItem={({ item }) => (
          <PhotoCard
            photo={item as Photo}
            key={item.id}
          />
        )}
      />
    </View>
  );
};

export default ImageGallery;
