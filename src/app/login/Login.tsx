import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';


const Login = () => {

    const [text, onChangeText] = useState('Useless Text');
    const [showPassword, setShowPassword] = useState(false); 
    const [password, setPassword] = useState('');

    return (
    <View style={styles.page}>
      {/* <Text>Login</Text> */}
        <View style = {styles.head}>
            <Text style = {styles.welcome}> Welcom back! </Text>
            <Text style = {styles.texte}> Sign In </Text>
        </View>
        <View style={styles.container_input_text}>

            <View style={styles.field}>
                <Text>User name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Entrer votre nom'
                />
            </View>

            <View style={styles.field}>
                <Text>Password</Text>
                <View style={styles.passwordContainer}>
                    <TextInput
                    // style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Entrer votre mot de passe"
                    secureTextEntry={!showPassword}
                    />

                    <Pressable
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeButton}

                    >
                    <Text style={styles.showText}>
                        {showPassword ? 'Hide' : 'Show'}
                    </Text>
                    </Pressable>
                </View>
            </View>
        </View>
        <View style = {styles.container_btn}>
            <Pressable style={styles.button} onPress={() => alert('Clicked !')}>
                <Text style={styles.buttonText}>Sign In</Text>
            </Pressable>
        </View>
        
    </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1, 
    },

    head:{
        backgroundColor: '#0C184B',
        height: 220,
        padding: 50,
        borderBottomLeftRadius: 120,
        borderBottomRightRadius: 120,
        justifyContent: 'center',
        alignItems: 'flex-start',
        transform: [{ scaleX: 1.2 }],

    },
    texte:{
        color:'#ffff',
        fontSize: 30
        
    },
    welcome:{
        fontSize: 13,
        fontFamily : 'Gantari',
        color : '#ffff'
    },
    container_input_text: {
        marginTop : 90,
        alignItems: 'center', 
    },

    field: {
        marginTop: 30,
        width: '80%',        
        marginBottom: 15,
    },

    fieldText: {
        textAlign: 'left',
        width: '100%',
    },

    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 8,
    },

    button: {
        backgroundColor: '#0C184B',
        padding: 15,
        borderRadius: 30,
        width: '90%',
        alignItems: 'center',
        marginTop: 20,
    },
    container_btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateY: 5 }],
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },

    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
    },

    showText: {
        color: '#0C184B',
        fontWeight: 'bold',
        marginLeft: 10,
    },

    eyeButton: {
        position: 'absolute',
        right: 15,
        height: '100%',
        justifyContent: 'center',
    },
});

export default Login