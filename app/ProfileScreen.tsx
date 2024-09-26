import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

function ProfileScreen() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={{
                    uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                }}
            />
            <Text style={styles.title}>John Doe</Text>
            <Text style={styles.subtitle}>johndoe@example.com</Text>
            <Button title="Logout" onPress={() => alert('Logged Out')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 40,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
});

export default ProfileScreen;
