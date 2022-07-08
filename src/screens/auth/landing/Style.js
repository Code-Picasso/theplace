import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors';

const styles = StyleSheet.create({
	imgBackground: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		display: 'flex',
	},
	topContainer: {
		width: '100%',
		marginBottom: 40,
		flex: 1,
	},
	img: {
		resizeMode: 'contain',
		width: 200,
		position: 'absolute',
		left: 100,
	},
});

export default styles;
