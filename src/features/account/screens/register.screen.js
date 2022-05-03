import React, { useContext, useState } from 'react';
import { Text } from '../../../components/text.component';
import { AccountBackground, AccountContainer, AccountCover, AuthButton, Title, AuthInput, Separator, ErrorContainer } from '../components/account.styles';
import { AuthenticationContext } from '../../../services/authentication/aunthentication.context';
import { ActivityIndicator } from 'react-native-paper';

export const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, isLoading, error } = useContext(AuthenticationContext);

    return (
        <AccountBackground>
            <AccountCover />
            <AccountContainer>
                <Title>Yummy</Title>
                <Separator />
                <AuthInput
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <Separator />
                <AuthInput
                    label="Password"
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(p) => setPassword(p)}
                /><Separator />
                <AuthInput
                    label="Repeat Password"
                    value={repeatedPassword}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={(p) => setRepeatedPassword(p)}
                />
                {error &&
                    (<Separator>
                        <ErrorContainer>
                            <Text variant="error">{error}</Text>
                        </ErrorContainer>
                    </Separator>)
                }
                <Separator />
                {!isLoading ?
                    <AuthButton
                        icon="email"
                        mode="contained"
                        onPress={() => onRegister(email, password, repeatedPassword)}
                    >Register
                    </AuthButton>
                    :
                    <ActivityIndicator animating={true} color='#FF00FF' />
                }
            </AccountContainer>
            <Separator />
            <AuthButton mode="contained" onPress={() => navigation.goBack()}>
                Back
            </AuthButton>
        </AccountBackground>
    )
}