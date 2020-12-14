import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Text } from 'react-native-elements';
import {
    Container,
    ProfileButton,
} from './styles';

import CippaLogo from '../../assets/cippa_logo.svg';
import UserIcon from '../../assets/icons/solid/user-circle.svg';
import MenuIcon from '../../assets/icons/solid/bars.svg';

class Inspection extends Component {

    handleProfileButtonClick = () => {
        this.props.navigation.reset({
            routes: [{ name: 'Profile' }]
        });
    }

    render() {
        return (
            <Container>
                <Header

                    leftComponent={
                        <MenuIcon width="36" height="36" style={{ marginLeft: 10 }} fill="#FFFFFF" onPress={() => this.props.navigation.openDrawer()} />
                    }
                    centerComponent={
                        <CippaLogo width="100%" height="80" />
                    }
                    rightComponent={
                        <ProfileButton onPress={this.handleProfileButtonClick}>
                            <UserIcon width="36" height="36" fill="#FFFFFF" />
                        </ProfileButton>
                    }

                    containerStyle={{
                        backgroundColor: '#1E661C',
                        justifyContent: 'space-around',
                        height: 140
                    }}
                />

                <View>
                    <Text h4 style={{ textAlign: 'center', paddingTop: 20 }}>Vistorias</Text>
                </View>
            </Container >
        );
    }

}

export default Inspection;