import React from 'react';
import { ImageBackground, View } from 'react-native';
import Wrapper from '../../../components/Wrapper';

const LandingScreen = () => {
	return (
		<Wrapper>
			<ImageBackground
				source={require('../../../assets/img/bus-5.jpg')}
			></ImageBackground>
		</Wrapper>
	);
};

export default LandingScreen;
