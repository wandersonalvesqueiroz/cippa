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

export const InputArea = styled.View`
    padding: 20px 10px;
    width: 100%;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    background-color: #539623;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`;

export const CustomButtonText = styled.Text`
    font-size: 16px;
    color: #FFF;
    font-weight: bold;
    font-family: Helvetica;
`;