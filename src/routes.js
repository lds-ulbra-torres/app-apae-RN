import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './pages/Home/';
import PartnersCategory from './pages/PartnersCategory';
import PartnerDetails from './pages/PartnerDetails';

import Test from './pages/Test';

export default createAppContainer(
    createStackNavigator({
        Home,
        PartnerDetails,
        PartnersCategory,
    },{
        headerMode: 'none'
    }
    )
);