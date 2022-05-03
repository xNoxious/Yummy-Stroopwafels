import React, { useContext, useState } from 'react';
import { Text } from '../../../components/text.component';
import { AccountBackground, AccountContainer, AccountCover, AuthButton, Title, AuthInput, Separator, ErrorContainer } from '../components/account.styles';
import { AuthenticationContext } from '../../../services/authentication/aunthentication.context';
import { ActivityIndicator } from 'react-native-paper';

export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, isLoading, error } = useContext(AuthenticationContext);

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
                        icon="lock-open-outline"
                        mode="contained"
                        onPress={() => onLogin(email, password)}
                    >Login
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