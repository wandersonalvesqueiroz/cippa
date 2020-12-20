import React from 'react';
import styled from 'styled-components/native';

export const Scroll = styled.ScrollView`
    flex: 1;
    background-color: #EDEDED;
`;

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
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
    padding: 15px;
`;

export const CustomButtonText = styled.Text`
    font-size: 16px;
    color: #FFF;
    font-weight: bold;
    font-family: Helvetica;
`;

export const Input = styled.TextInput`
    background: #FFF;
    font-size: 16px;
    color: #222222;
    font-family: 'calibri';
    margin-bottom: 10px;
    width: 94%;
    padding: 10px;
`;
