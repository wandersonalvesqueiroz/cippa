import React from "react";
import styled from 'styled-components/native';

import HomeIcon from '../assets/icons/solid/home.svg';
import InspectionIcon from '../assets/icons/solid/tasks.svg';
import ConfigurationIcon from '../assets/icons/solid/cog.svg';

const TabArea = styled.View`
    height: 60px;
    background-color: #1E661C;
    flex-direction: row;
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export default ({ state, navigation}) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <TabArea>
            <TabItem onPress={() => goTo('Home')}>
                <HomeIcon style={{opacity: state.index === 0 ? 1 : 0.6}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={() => goTo('Inspection')}>
                <InspectionIcon style={{opacity: state.index === 1 ? 1 : 0.6}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
            <TabItem onPress={() => goTo('Configuration')}>
                <ConfigurationIcon style={{opacity: state.index === 2 ? 1 : 0.6}} width="24" height="24" fill="#FFFFFF" />
            </TabItem>
        </TabArea>
    );
}