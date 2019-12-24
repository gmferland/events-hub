import React from 'react';
import { View, Text } from 'react-native';

interface EventDetailsProps {
  eventId: string;
}

const EventDetails = (props: EventDetailsProps) => {
  return (
    <View>
      <Text>{`Viewing event ${props.eventId}`}</Text>
    </View>
  );
};

export default EventDetails;
