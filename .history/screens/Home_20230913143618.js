import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import { Avatar } from '@rneui/themed';
import { Card, Icon } from '@rneui/themed';

import { CheckBox } from '@rneui/themed';

import { FAB } from '@rneui/themed';

import { Input } from '@rneui/themed';

export default function Home({ navigation }) {

    const [visible, setVisible] = useState(true);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Avatar
                    size={32}
                    rounded
                    icon={{ name: "pencil", type: "font-awesome" }}
                    containerStyle={{ backgroundColor: "#9700b9" }}
                />
                <Avatar
                    size={32}
                    icon={{ name: "pencil", type: "font-awesome" }}
                    containerStyle={{ backgroundColor: "#9700b9" }}
                />

                <Card>
                    <Card.Title>HELLO WORLD</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0 }}
                        source={{
                            uri:
                                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                        }}
                    />
                    <Text style={{ marginBottom: 10 }}>
                        The idea with React Native Elements is more about component
                        structure than actual design. Also, Look at this beautiful Mountain:D
                    </Text>
                    <Button
                        icon={
                            <Icon
                                name="code"
                                color="#ffffff"
                                iconStyle={{ marginRight: 10 }}
                            />
                        }
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                        }}
                        title="VIEW NOW"
                    />
                </Card>

                <CheckBox checked title="Agree" />
                <CheckBox checked disabled title="Disagree" />

                <Input
                    placeholder='Previous Article'
                    leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
                />

                <Text style={{ color: '#397af8', paddingVertical: 10 }}>
                    Small Size
                </Text>

                <FAB
                    loading
                    visible={visible}
                    icon={{ name: 'add', color: 'white' }}
                    size="small"
                />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
