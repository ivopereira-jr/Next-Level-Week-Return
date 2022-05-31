import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import successImg from '../../assets/success.png'; // para nao dar deve ser feita a declaração para arquivos .png como na pasta src/@types

import { Copyright } from '../Copyright';

import { styles } from './styles';

interface Props {
	onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: Props) {
	return (
		<View style={styles.container}>
			<Image source={successImg} style={styles.image} />

			<Text style={styles.title}>Agradecemos o feedback!</Text>

			<TouchableOpacity style={styles.button} onPress={onSendAnotherFeedback}>
				<Text style={styles.buttonTitle}>Quero enviar outro</Text>
			</TouchableOpacity>

			<Copyright />
		</View>
	);
}
