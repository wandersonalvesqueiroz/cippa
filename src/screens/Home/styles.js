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

export const CheckButton = styled.TouchableOpacity`
    width: 240px;
    background-color: #1E661C;
    padding: 20px;
    border-radius: 10px;
    border: 0;
    margin-top: 40px;
    margin-bottom: 40px;
    align-items: center;
`;

