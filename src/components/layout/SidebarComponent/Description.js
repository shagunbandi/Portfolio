import React, { Component } from 'react';

import { connect } from 'react-redux';

export class Description extends Component {
	render() {
		return (
			<div>
				<div className='p-note user-profile-bio mb-2'>
					<div>
						Associate Software Development Engineer II at{' '}
						<span className='text-bold'>Publicis Sapient</span>
					</div>
				</div>
				<div className='p-note user-profile-bio mb-2'>
					<div>
						Graduated from <span className='text-bold'>IIT Kharagpur</span>
					</div>
				</div>
			</div>
		);
	}
}
export default connect()(Description);
