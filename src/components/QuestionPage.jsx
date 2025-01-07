import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionPage() {

	const test1 =  {
		"id": 1,
		"dimension": "E/I",
		"question": "새로운 사람들과의 만남이 즐겁고 활력을 얻나요?",
		"options": {
		  "A": "예",
		  "B": "아니오"
		}
	  }
	  
	const test = [
    {
      "id": 1,
      "dimension": "E/I",
      "question": "새로운 사람들과의 만남이 즐겁고 활력을 얻나요?",
      "options": {
        "A": "예",
        "B": "아니오"
      }
    },
    {
      "id": 2,
      "dimension": "E/I",
      "question": "혼자서 보내는 시간이 많으면 지루하다고 느끼나요?",
      "options": {
        "A": "예",
        "B": "아니오"
      }
    },
    {
      "id": 3,
      "dimension": "E/I",
      "question": "파티나 모임에서 많은 사람들과 대화하는 것을 선호하나요?",
      "options": {
        "A": "예",
        "B": "아니오"
      }
    },
    {
      "id": 4,
      "dimension": "S/N",
      "question": "현재의 사실과 세부사항에 집중하는 것을 좋아하나요?",
      "options": {
        "A": "예",
        "B": "아니오"
      }
    },
    {
      "id": 5,
      "dimension": "S/N",
      "question": "상상력보다는 실제 경험을 믿는 편인가요?",
      "options": {
        "A": "예",
        "B": "아니오"
      }
    },
    {
      "id": 6,
      "dimension": "S/N",
      "question": "실제적이고 실용적인 해결책을 선호하나요?",
      "options": {
        "A": "예",
        "B": "아니오"
      }
    },
    {
      "id": 7,
      "dimension": "F/T",
      "question": "결정할 때 사람들의 감정을 우선적으로 고려하나요?",
      "options": {
        "A": "예",
        "B": "아니오"
      }
    },
    {
      "id": 8,
      "dimension": "F/T",
      "question": "갈등을 피하기 위해 타협하는 편인가요?",
      "options": {
        "A": "예",
        "B": "아니오"
      }
    },
    {
      "id": 9,
      "dimension": "F/T",
      "question": "논리보다 감정적으로 판단할 때가 많나요?",
      "options": {
        "A": "예",
        "B": "아니오"
      }
    },
    {
      "id": 10,
      "dimension": "P/J",
      "question": "계획보다 상황에 따라 유연하게 대처하는 것을 선호하나요?",
      "options": {
        "A": "예",
        "B": "아니오"
      }
    },
    {
      "id": 11,
      "dimension": "P/J",
      "question": "마감일에 맞추기보다는 유동적으로 일정을 변경하나요?",
      "options": {
        "A": "예",
        "B": "아니오"
      }
    },
    {
      "id": 12,
      "dimension": "P/J",
      "question": "모든 것을 정리하고 정해진 계획대로 진행하는 것을 선호하지 않나요?",
      "options": {
        "A": "예",
        "B": "아니오"
      }
    }
  ]

  // 예*3 +3 예*2 +2 e 
  // 아니요*3 -3 아니오*2 -1

    const [currentIdx, setCurrentIdx] = useState(0);
    const [mbti, setMbti] = useState([
		/* 'e' , 'n' , 'f' , 'p' 이거를 결과 페이지에 추가 */
	]);
    const [answer, setAnswer] = useState(0)
	const navigate =  useNavigate();
	const handleBtn = (result) => {

			setAnswer(answer+result);
		


		setCurrentIdx(currentIdx + 1);
	}

  // 12가 되면 결과페이지로 넘기기
  // mbti 계산은

	useEffect(() => {
		console.log(currentIdx);
		
		if(currentIdx===3){
			if(answer >0){
				const newMbti = [...mbti, "E"];
				console.log(newMbti);
				setMbti(newMbti)
			}else{
				const newMbti = [...mbti, "I"];
				console.log(newMbti);
				setMbti(newMbti)
			}
			setAnswer(0)
		} else if (currentIdx===6) {
			if(answer >0){
				const newMbti = [...mbti, "S"];
				console.log(newMbti);
				setMbti(newMbti)
			}else{
				const newMbti = [...mbti, "N"];
				console.log(newMbti);
				setMbti(newMbti)
			}
			setAnswer(0)
		} else if (currentIdx===9) {
			if(answer >0){
				const newMbti = [...mbti, "T"];
				console.log(newMbti);
				setMbti(newMbti)
			}else{
				const newMbti = [...mbti, "F"];
				console.log(newMbti);
				setMbti(newMbti)
			}
			setAnswer(0)
		}else if (currentIdx===12) {
			if(answer >0){
				const newMbti = [...mbti, "P"];
				console.log(newMbti);
				setMbti(newMbti)
			navigate('/Result', { state: { newMbti } });

			}else{
				const newMbti = [...mbti, "J"];
				console.log(newMbti);
				setMbti(newMbti)
			navigate('/Result', { state: { newMbti } });

			}
			setAnswer(0)

		}
	},[currentIdx])

	return (
		
	<>
		{currentIdx < 12  &&
			<>
				<p>{test[currentIdx].id}</p>
				<p>{test[currentIdx].question}</p>
				<button type="button" onClick={()=>handleBtn(1)}>예</button>
				<button type="button" onClick={()=>handleBtn(-1)}>아니오</button>
			</>
			}
	</>
	);
    }

export default QuestionPage;