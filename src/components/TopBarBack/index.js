import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Style from './style';
import BackIcon from '../../assets/icons/solid/chevron-left.svg';

class TopBarBack extends Component {

    render() {
        return (
            <View style={Style.header}>
                <Text>TESTE</Text>
                {/* <Button icon={BackIcon} title="Go back" onPress={() => this.props.navigation.goBack()} /> */}
            </View>
        );
    }
}

export default TopBarBack;