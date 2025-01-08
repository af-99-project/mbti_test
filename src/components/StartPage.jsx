import React from 'react';
import { useNavigate } from 'react-router-dom';


function StartPage() {
const navigate =  useNavigate()
	const handleStartBtn = () => {
		navigate('/Test')
	}
	return (
	  <div id='Wrap'>
	  	<div className='testBox'>
		  	<h2>MBTI 유형테스트</h2>
			<p className='detail'>당신의 MBTI 유형은?</p>
			<div className='btnWrap'><button type="button" className='start' onClick={handleStartBtn}>시작</button></div>
		  </div>
	  </div>
	);
  }

export default StartPage;