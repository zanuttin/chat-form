import React from 'react';
import { robot } from '../defaults';

const styles = {
	Header: {
		backgroundColor: '#4CAF50',
		display: 'flex',
		padding: 20,
		boxShadow: '0px 5px 6px grey',
		position: 'fixed',
		width: '100%',
	},
	Image: {
		boxShadow: '0px 1px 6px grey',
		height: 50,
		width: 50,
		borderRadius: 50,
	},
	Contact: {
		fontFamily: 'Roboto',
		color: 'white',
		textShadow: '0px 1px 1px',
		padding: 10,
		marginLeft: 20,
	},
};

const Header = () => {
	return (
		<div style={styles.Header}>
			<img
				style={styles.Image}
				src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f1a84856240191.59a64e6d80c00.jpg'
				alt='Mocked Icon'
			/>
			<h2 style={styles.Contact}>{robot}</h2>
		</div>
	);
};

export default Header;
