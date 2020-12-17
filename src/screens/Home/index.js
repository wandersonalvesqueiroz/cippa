import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import {
    Container,
    CheckButton
} from './styles';

import CheckIcon from '../../assets/icons/regular/check-square.svg';
import ScreenMainDrawer from '../../components/ScreenMainDrawer';

class Home extends Component {

    handleCheckButtonClick = () => {
        this.props.navigation.reset({
            routes: [{ name: 'Inspection' }]
        });
    }

    render() {
        return (
            <ScreenMainDrawer {...this.props.navigation}>
                <Container>
                    <View>
                        <CheckButton onPress={this.handleCheckButtonClick}>
                            <CheckIcon width="50" height="50" fill="#FFFFFF" />
                            <Text h4 style={{ color: '#FFFFFF', marginTop: 10 }}>VISTORIAR</Text>
                        </CheckButton>
                    </View>
                </Container >
            </ScreenMainDrawer>
        );
    }
}

export default Home;