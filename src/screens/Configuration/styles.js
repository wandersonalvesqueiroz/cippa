import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex: 1;
    align-content: center;
    align-items: center;
    background-color: #EDEDED;
`;

export const ProfileButton = styled.TouchableOpacity`
    margin-right: 10px;
`;

export const ProfileButtonText = styled.Text`
    font-size: 16px;
    color: #FFFFFF;
`;

export const Line = styled.SafeAreaView`
    border: 1px solid #1E661C;
    width: 320px;
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
`;