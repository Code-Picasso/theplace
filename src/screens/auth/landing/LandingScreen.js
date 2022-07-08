import React from 'react';
import { Image, ImageBackground, View, Text } from 'react-native';
import Button from '../../../components/button/Button';
import Wrapper from '../../../components/Wrapper';
import styles from './Style';
const google = require('../../../assets/img/google.svg');
const LandingScreen = () => {
	return (
		<Wrapper>
			<ImageBackground
				style={styles.imgBackground}
				source={require('../../../assets/img/bus-5.jpg')}
				blurRadius={0}
			>
				<View style={styles.topContainer}>
					<Image
						style={styles.img}
						source={require('../../../assets/img/logo.png')}
					/>

					<Text style={styles.welcomeText}>Lets get you</Text>
					<Text style={styles.welcomeTextTwo}>Started</Text>
				</View>
			</ImageBackground>
		</Wrapper>
	);
};

export default LandingScreen;
