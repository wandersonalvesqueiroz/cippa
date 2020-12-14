import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Text } from 'react-native-elements';
import {
    Container,
    ProfileButton,
    CheckButton
} from './styles';

import CippaLogo from '../../assets/cippa_logo.svg';
import UserIcon from '../../assets/icons/solid/user-circle.svg';
import MenuIcon from '../../assets/icons/solid/bars.svg';
import CheckIcon from '../../assets/icons/regular/check-square.svg';
import HeaderBar from '../../components/hearder';

class Home extends Component{

    handleProfileButtonClick = () => {
        this.props.navigation.reset({
            routes: [{ name: 'Profile' }]
        });
    }

    handleCheckButtonClick = () => {
        this.props.navigation.reset({
            routes: [{ name: 'Inspection' }]
        });
    }

    render(){
        return (
            
            <Container>
                <HeaderBar/>
                <View>
                    <CheckButton onPress={this.handleCheckButtonClick}>
                        <CheckIcon width="50" height="50" fill="#FFFFFF" />
                        <Text h4 style={{color: '#FFFFFF', marginTop: 10}}>VISTORIAR</Text>
                    </CheckButton>
                </View>
            </Container >
        );
    }
}

export default Home;