import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

import { Avatar } from '@rneui/themed';


export default function Home({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Stack row spacing={4}>
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
                </Stack>
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
