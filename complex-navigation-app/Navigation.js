import { NavigationContainer } from '@react-navigation/native';
import Feed from './screens/Feed.js';

export default function Navigation() {
    return (
        <NavigationContainer>
            <Feed/>
        </NavigationContainer>
    )
}