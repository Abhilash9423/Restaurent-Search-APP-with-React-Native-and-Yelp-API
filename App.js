import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from './src/Screens/SearchScreen'
import ResultScreen from './src/Screens/ResultScreen'
const navigator = createStackNavigator(
  {
    search:SearchScreen,
    ResultsShow:ResultScreen
  },
  {
    initialRouteName:'search',
    defaultNavigationOptions:{
      title:'Food App'
    }
  }
);

export default createAppContainer(navigator);