import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './pages/Home/';
import PartnersCategory from './pages/PartnersCategory';

export default createAppContainer(
    createStackNavigator({
        Home,
        PartnersCategory
    },{
        headerMode: 'none'
    }
    )
);