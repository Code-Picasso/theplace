import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors';

const styles = StyleSheet.create({
	imgBackground: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
	},
	img: {
		resizeMode: 'contain',
		width: 200,
	},
	welcomeText: {
		color: Colors.white,
		fontSize: 24,
		marginBottom: 80,
	},
	containerOne: {
		width: 100,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnOne: {
		backgroundColor: '#4f4f4f',
		height: 100,
		width: 280,
		opacity: 0.8,
		borderRadius: 20,
		marginBottom: 100,
	},
	imgGoogle: {},
});

export default styles;
