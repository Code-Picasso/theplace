import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

const Button = ({ style, onPress, title, source, imgStyle }) => {
	return (
		<TouchableOpacity activeOpacity={0.9} style={style} onPress={onPress}>
			<Text>{title}</Text>
			<Image source={source} style={imgStyle} />
		</TouchableOpacity>
	);
};

export default Button;
