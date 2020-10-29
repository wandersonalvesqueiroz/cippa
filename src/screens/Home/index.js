import React from 'react';
import { Text } from 'react-native';
import { 
    Container, 
    Header,
    ProfileButton,
    ProfileButtonText
 } from './styles';

import CippaLogo from '../../assets/cippa_logo.svg';
import UserIcon from '../../assets/icons/solid/user-circle.svg';

const handleProfileButtonClick = () => {
    navigation.reset({
        routes: [{ name: 'RecoveryPassword' }]
    });
}

export default () => {

    return (
        <Container>
            <Header>
                <CippaLogo width="100%" height="100" />

                <ProfileButton onPress={handleProfileButtonClick}>
                    <ProfileButtonText>Usuário</ProfileButtonText>
                    <UserIcon width="40" height="40" fill="#FFFFFF" />
                </ProfileButton>

            </Header>
            <Text>HOME</Text>
        </Container>
    );
}