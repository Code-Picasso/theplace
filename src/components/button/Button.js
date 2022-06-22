import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

const Button = ({ style, onPress, title, source }) => {
	return (
		<TouchableOpacity style={style} onPress={onPress}>
			<Text>{title}</Text>
			<Image source={source} style={style} />
		</TouchableOpacity>
	);
};

export default Button;
