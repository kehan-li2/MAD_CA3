/**
 * @format
 */
import 'react-native-gesture-handler'; // --> added in
import {AppRegistry} from 'react-native';
import App from './Screens/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
