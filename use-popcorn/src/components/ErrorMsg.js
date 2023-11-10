import React from 'react';

function ErrorMsg({ msg }) {
	return (
		<p className="error">
			<span>⛔</span>
			{msg}
		</p>
	);
}

export default ErrorMsg;
