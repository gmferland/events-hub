import { createAppContainer } from 'react-navigation';
import EventsNavigator from './screens/Events/EventsNavigator';

const AppNavigator = createAppContainer(EventsNavigator);

export default AppNavigator;
