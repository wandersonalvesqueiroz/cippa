import React from "react";
import { Header } from 'react-native-elements';
import {
    ProfileButton,
    ProfileButtonText
} from './styles';


import CippaLogo from '../assets/cippa_logo_s.svg';
import UserIcon from '../assets/icons/solid/user-circle.svg';
import MenuIcon from '../assets/icons/solid/bars.svg';

const handleProfileButtonClick = () => {
    navigation.reset({
        routes: [{ name: 'RecoveryPassword' }]
    });
}

export default (props) => {

    const openMenu = props.openMenu;

    return (
        <Header
            leftComponent={
                <MenuIcon width="40" height="40" fill="#FFFFFF" onPress={() => openMenu} />
            }
            centerComponent={
                <CippaLogo width="100%" height="80" />
            }
            rightComponent={
                <ProfileButton onPress={handleProfileButtonClick}>
                    <ProfileButtonText>Usuário</ProfileButtonText>
                    <UserIcon width="40" height="40" fill="#FFFFFF" />
                </ProfileButton>
            }
            containerStyle={{
                backgroundColor: '#1E661C',
                justifyContent: 'space-around',
                height: 120
            }}
        />
    );
}