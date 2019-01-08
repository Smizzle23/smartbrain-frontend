import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div className="pa4">
			<p className="f3">
				{"This incredibly technologically advanced AI application will take your image input and output the same image with a square over the faces of people, try it!"}
			</p>
				<div className="form pa4 br4 shadow-5">
					<input className="f3 pa2 w-70 center br3" type="text" onChange={onInputChange}/>
					<button className="w-30 f3 pa2 link ph3 pv2 dib br3 bg-light-purple grow" onClick={onButtonSubmit}>Detect</button>
				</div>
		</div>
	)
}

export default ImageLinkForm;