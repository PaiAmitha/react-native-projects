import { createStackNavigator } from '@react-navigation/stack';
import ListDataScreen from '../screens/ListDataScreen';
import DisplayScreen from '../screens/DisplayScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ListData" component={ListDataScreen} />
      <Stack.Screen name="DisplayScreen" component={DisplayScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
