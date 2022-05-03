import React from 'react';
import { AccountBackground, AccountContainer, AccountCover, AuthButton, AnimationWrapper, Title, Separator } from '../components/account.styles';
import LottieView from 'lottie-react-native';

export const AccountScreen = ({ navigation }) => {
    return (
        <AccountBackground>
            <AccountCover />
            <AnimationWrapper>
                <LottieView
                    key="animation"
                    autoPlay
                    loop
                    resizeMode="cover"
                    source={require("../../../../assets/watermelon.json")}
                />
            </AnimationWrapper>
            <AccountContainer>
                <Title>Yummy</Title>
                <Separator />
                <AuthButton
                    icon="account"
                    mode="contained"
                    onPress={() => navigation.navigate("Login")}
                > Login
                </AuthButton>
                <Separator />
                <AuthButton
                    icon="email"
                    mode="contained"
                    onPress={() => navigation.navigate("Register")}
                > Register
                </AuthButton>
            </AccountContainer>
        </AccountBackground>
    )
}