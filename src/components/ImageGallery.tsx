import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image, Text, View, Alert, FlatList } from 'react-native';
import MasonryList from '@react-native-seoul/masonry-list';

interface Photo {
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
  return (
    <View
      className="mb-4"
      style={{ position: 'relative', flexShrink: 1, width: '48%' }}
    >
      <Image
        source={{ uri: photo.thumbnailUrl }}
        style={{
          position: 'relative',
          width: '100%',
          height: 250,
          borderRadius: 20,
        }}
      />
      <Text>{photo.title}</Text>
    </View>
  );
};

const ImageGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    fetchImages();
    console.log('useEffect is working');
  }, []);

  const fetchImages = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response: any) => {
        setPhotos(response.data);
        console.log('Photos fetched: ', response.data.length);
      })
      .catch((error: any) => Alert.alert(error));
  };

  return (
    <View className="pt-4">
      <FlatList
        initialNumToRender={20}
        numColumns={2}
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
      {/* {photos.length > 0 &&
          photos.map((photo, i) => (
            <PhotoCard
              photo={photo as Photo}
              index={i}
              key={photo.id}
            />
          ))} */}
      {/* {photos.length > 0 && (
        <MasonryList
          data={photos}
          keyExtractor={(item): string => item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => (
            <PhotoCard
              photo={item as Photo}
              index={i}
            />
          )}
          onEndReachedThreshold={0.1}
        />
      )} */}
    </View>
  );
};

export default ImageGallery;
