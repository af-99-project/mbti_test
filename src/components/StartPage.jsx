import React from 'react';
import { useNavigate } from 'react-router-dom';


function StartPage() {
const navigate =  useNavigate()
	const handleStartBtn = () => {
		navigate('/Test')
	}
	return (
	  <>
		<button type="button" onClick={handleStartBtn}>시작</button>
	  </>
	);
  }

export default StartPage;