import { useState } from 'react';
import { StyleSheet , Text, View, StatusBar, TextInput, Platform, Pressable, ScrollView, ActivityIndicator } from 'react-native';
import { styles } from './src/class-style/style-style-sheet/style-external';
import {MaterialIcons} from 'expo/vector-icons'
import styled from 'styled-components';
import Slider from '@react-native-community/slider';

const statusBarHeight = StatusBar.currentHeight

export default function App(){
    
    const {loading, setLoading} = useState(true);
    const {travel, setTravel} = useState("");

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" translucent={true} backgroundColor="#f1f1f1"/>
            <Text style={styles.heading}>Roteiros fácil</Text>

            <View style={styles.form}>
                <Text style={styles.label}>cidade destino</Text>
                <TextInput 
                placeholder='Ex. Campo Grande, MS'
                style={styles.input}/>

                <Text style={styles.label}>Tempo de estadia: <Text style={styled.days}>10</Text> dias</Text>
                <Slider
                minimumValue={1}
                maximumValue={7}
                minimumTrackTintColor="#009688"
                maximumTrackTintColor="#000000"
                />
            </View>
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Gerar roteiro</Text>
                <MaterialIcons name="travel-explore" size={24} color="#fff" />
            </Pressable>

            <ScrollView contentContainerStyle={{paddingBottom: 18, marginTop: 4,}} style={styles.containerScroll} showsVerticalScrollIndicator ={false}>
               {loading &&(
                 <View style ={styles.content}>
                 <Text style={styles.title}>Carregando roteiro ...</Text>
                 <ActivityIndicator color= "#0000" size= "langer"/>
             </View>
               )}
               {travel && (
                 <View style ={styles.content}>
                 <Text style={styles.title}>Roteiro da viagem 👇</Text>
                 <Text> Aqui será o rotiro completo...</Text>
             </View>
               )}
            </ScrollView>


        </View>
    );
}
    const styles = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor: "#f1f1f1",
            alignItems: 'center',
            paddingTop: 20,
        },
        heading:{
            fontSize: 32,
            fontWeight: 'bold',
            paddingTop: Platform.OS == 'android' ? statusBarHeight : 54
        },
        form:{
            backgroundColor: "#fffff",
            width: '90%',
            borderRadius: 8,
            padding: 16,
            marginTop: 16,
            marginBottom:8,
        },
        label:{
            fontWeight: 'bold',
            fontSize: 18,
            marginBottom: 8,
        },
        input:{
            borderWidth: 1,
            borderRadius: 4,
            borderColor: "#94a3b8",
            padding: 8,
            fontSize: 16,
            marginBottom: 16,
        },
        days:{
            backgroundColor:"#f1f1f1"
        },
        button: {
            backgroundColor: "#FF5656",
            width: "90%",
            borderRadius: 8,
            flexDirection: 'row',
            padding: 14,
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
        },
        buttonText:{
            fontSize:18,
            color: "#fff",
            fontWeight: "bold",
        },
        content:{
            backgroundColor: "#FFF",
            padding: 16,
            width: "100%",
            marginTop: 16,
            borderRadius: 8,
        },
        title:{
            fontSize: 18,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 14,
        },
        containerScroll:{
            width: "90%",
            marginTop: 8,
        }
    });
