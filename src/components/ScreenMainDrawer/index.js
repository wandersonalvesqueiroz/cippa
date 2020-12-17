import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HeaderBar from '../Hearder';

class ScreenMainDrawer extends Component {

    render() {
        return (
            <>
                <HeaderBar {...this.props} />
                {this.props.children}
            </>
        );
    }
}

export default ScreenMainDrawer;