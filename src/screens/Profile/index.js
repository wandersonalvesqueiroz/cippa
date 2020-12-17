import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { Container } from './styles';

import ScreenMainDrawer from '../../components/ScreenMainDrawer';

class Profile extends Component {

    render() {
        return (
            <ScreenMainDrawer {...this.props.navigation}>
                <Container>
                    <View>
                        <Text h4 style={{ textAlign: 'center', paddingTop: 20 }}>Meu Perfil</Text>
                    </View>
                </Container >
            </ScreenMainDrawer>
        );
    }
}

export default Profile;