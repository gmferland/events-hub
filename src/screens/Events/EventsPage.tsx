import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

interface EventsPageProps {
  navigation: NavigationScreenProp<any>;
}

const EventsPage = (props: EventsPageProps) => {
  return (
    <View>
      <Text>List of events</Text>
      <Button
        title="Go to Details"
        onPress={() => props.navigation.navigate('EventDetails')}
      />
    </View>
  );
};

export default EventsPage;
