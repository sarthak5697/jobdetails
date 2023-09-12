import React from 'react'

const ProgressBar = ({bgcolor,progress,height}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40,
		
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
	
        fontSize:12,
		color: 'black',
		fontWeight: 700
	}
		
	return (
	<div style={Parentdiv}>
	<div style={Childdiv}>
		{/* <span style={progresstext}>{`${progress}%`}</span> */}
	</div>
	</div>
	)
}

export default ProgressBar;
// import React from "react";

// import ProgressBar from "@ramonak/react-progress-bar";

// const MyProgressBar = () => {
//   return <ProgressBar completed={60} className="bg-red"/>;
// };

// export default MyProgressBar;