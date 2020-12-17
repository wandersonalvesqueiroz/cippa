import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const ProfileButton = styled.TouchableOpacity`
    margin-right: 10px;
`;

export default StyleSheet.create({
    header: {
        padding: 20,
        flexDirection: 'row',
        backgroundColor: '#1E661C',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        width: 36, 
        height: 36,
    },
    user: {
        paddingTop: 10,
        
    },
    userText: {
        textAlign: 'center', 
        color: "#FFFFFF"
    }
})