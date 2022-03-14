/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AsyncStorageDemoPage from './js/AsyncStorageDemoPage';
import FetchDemoPage from './js/FetchDemoPage';
import LoginPage from './js/page/LoginPage';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
