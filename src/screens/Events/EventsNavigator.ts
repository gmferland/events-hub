import { createStackNavigator } from 'react-navigation-stack';
import EventsPage from './EventsPage';
import EventDetails from './EventDetails';

const EventsNavigator = createStackNavigator({
  EventsPage: {
    screen: EventsPage,
  },
  EventDetails: {
    screen: EventDetails,
  },
});

export default EventsNavigator;
