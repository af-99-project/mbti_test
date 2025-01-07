import React from 'react';
import { useLocation } from 'react-router-dom';


function ResultPage() {
	const location = useLocation();
    const { newMbti } = location.state || {}; // 전달된 데이터 가져오기
	return (
	  <>
		Result
		<p>{newMbti}</p>
	  </>
	);
  }

export default ResultPage;