import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Style, { ProfileButton } from './style';
import MenuIcon from '../../assets/icons/solid/bars.svg';
import CippaLogo from '../../assets/cippa_logo.svg';
import UserIcon from '../../assets/icons/solid/user-circle.svg';

class HeaderBar extends Component {

    handleProfileButtonClick = () => {
        this.props.reset({
            routes: [{ name: 'Profile' }]
        });
    }

    render() {
        return (
            <View style={Style.header}>
                <MenuIcon style={Style.icon} fill="#FFFFFF" onPress={() => this.props.openDrawer()} />
                <CippaLogo width="100" height="80" />
                <ProfileButton onPress={this.handleProfileButtonClick}>
                    <UserIcon style={Style.icon} fill="#FFFFFF" />
                    <Text style={Style.userText}>teste</Text>
                </ProfileButton>
            </View>
        );
    }
}

export default HeaderBar;