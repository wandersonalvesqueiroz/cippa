import React from "react";
import styled from 'styled-components/native';

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: #FFFFFF;
    flex-direction: row;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 15px;
    font-family: 'calibri';
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #222222;
    margin-left: 10px;
    font-family: 'calibri';
`;


export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#444444" />
            <Input 
                placeholder={placeholder}
                placeholderTextColor="#444444"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}