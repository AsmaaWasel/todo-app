// import React from 'react';
// import { View, Text } from 'react-native';

// const DetailsScreen = ({ route }) => {
//   const { title, description } = route.params.todo;

//   return (
//     <View>
//       <Text>Title: {title}</Text>
//       <Text>Description: {description}</Text>
//     </View>
//   );
// };

// export default DetailsScreen;



import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { title, description } = route.params.todo;
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const handleOrientationChange = () => {
      setWindowDimensions(Dimensions.get('window'));
    };

    // Add event listener for orientation changes
    Dimensions.addEventListener('change', handleOrientationChange);

    // Clean up on unmount
    return () => {
      Dimensions.removeEventListener('change', handleOrientationChange);
    };
  }, []); 

  const isLandscape = windowDimensions.width > windowDimensions.height;

  return (
    <View>
      <Text>Title: {title}</Text>
      <Text>Description: {description}</Text>
      {isLandscape ? (
        <Text>This is landscape orientation-specific content.</Text>
      ) : (
        <Text>This is portrait orientation-specific content.</Text>
      )}
    </View>
  );
};

export default DetailsScreen;

