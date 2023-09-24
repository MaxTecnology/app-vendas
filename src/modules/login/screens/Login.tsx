import { Text, View } from "react-native";
import Button from "../../../shared/components/button/Button";
import Input from "../../../shared/components/input/input";
import { ContainerLogin } from "../styles/login.style";

const Login = () => {
    const handleOnPress = () => {
        console.log('clicou');
    };
    return (
        <View>
            <ContainerLogin>
                <Text>Login</Text>
                <Input/ >
                <Button margin="8px" title="ACESSAR" onPress={handleOnPress} />
            </ContainerLogin>
        </View>
    )
}

export default Login;