import React, { Component } from 'react';

import { connect } from 'react-redux';
// import cv from '../../../assets/ShagunBandiResume.pdf'

const cv =
	'https://drive.google.com/file/d/1ccnl7f-SBFkJ3A2fRY0dB8svc4AdOM6e/view?usp=sharing';

export class DownloadResume extends Component {
	render() {
		return (
			<div className='user-profile-following-container mt-md-0 mt-2 mb-md-3 mb-2'>
				<span className='user-following-container'>
					<a
						href={cv}
						type='submit'
						name='commit'
						target='_blank'
						rel='noopener noreferrer'
						style={{ maxWidth: '100%' }}
						className='btn btn-block top-0 mb-2'
						title='Download Resume'>
						Download Resume
					</a>
				</span>
			</div>
		);
	}
}
export default connect()(DownloadResume);
