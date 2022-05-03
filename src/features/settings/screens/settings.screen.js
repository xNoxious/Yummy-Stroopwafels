import React, { useContext } from 'react';
import { SafeArea } from '../../../components/safe-area.component';
import { AuthenticationContext } from '../../../services/authentication/aunthentication.context';
import { List, Avatar } from 'react-native-paper';
import styled from 'styled-components/native';
import { Text } from '../../../components/text.component';
import { Separator } from '../../account/components/account.styles';
import { useReducer } from 'react/cjs/react.production.min';

const SettingsItem = styled(List.Item)`
    padding: ${props => props.theme.space[3]};
`

const AvatarContainer = styled.View`
    align-items: center;
    margin-top: 10px;
`

export const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext);

    return (
        <SafeArea>
            <Separator />
            <AvatarContainer>
                <Avatar.Icon size={120} icon='cat' backgroundColor="black" />
                <Separator />
                <Text variant="label">{user.email}</Text>
            </AvatarContainer>

            <List.Section>
                <SettingsItem
                    title="Favourites"
                    description="View your favourites"
                    left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                    onPress={() => navigation.navigate("Favourites")}
                />
                <SettingsItem
                    title="Logout"
                    left={(props) => <List.Icon {...props} color="black" icon="door" />}
                    onPress={onLogout}
                />
            </List.Section>
        </SafeArea>
    )
};
