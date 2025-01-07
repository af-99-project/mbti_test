import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동용

function QuestionPage() {
  const test = [
    {
      id: 1,
      dimension: "E/I",
      question: "새로운 사람들과의 만남이 즐겁고 활력을 얻나요?",
      options: { A: "예", B: "아니오" }
    },
	{
		id: 2,
		dimension: "E/I",
		question: "새로운 사람들과의 만남이 즐겁고 활력을 얻나요?",
		options: { A: "예", B: "아니오" }
	  },
	  {
		id: 3,
		dimension: "E/I",
		question: "새로운 사람들과의 만남이 즐겁고 활력을 얻나요?",
		options: { A: "예", B: "아니오" }
	  },
    {
      id: 4,
      dimension: "S/N",
      question: "상상력이 풍부한가요?",
      options: { A: "예", B: "아니오" }
    },
	{
		id:5,
		dimension: "S/N",
		question: "상상력이 풍부한가요?",
		options: { A: "예", B: "아니오" }
	  },
	  {
		id: 6,
		dimension: "S/N",
		question: "상상력이 풍부한가요?",
		options: { A: "예", B: "아니오" }
	  },
    {
      id: 7,
      dimension: "F/T",
      question: "감성이 풍부한가요?",
      options: { A: "예", B: "아니오" }
    },
	{
		id: 8,
		dimension: "F/T",
		question: "감성이 풍부한가요?",
		options: { A: "예", B: "아니오" }
	  },
	  {
		id: 9,
		dimension: "F/T",
		question: "감성이 풍부한가요?",
		options: { A: "예", B: "아니오" }
	  },
	  {
		id: 10,
		dimension: "P/J",
		question: "모든 것을 정리하고 정해진 계획대로 진행하는 것을 선호하지 않나요?",
		options: { A: "예", B: "아니오" }
	  },
	  {
		id: 11,
		dimension: "P/J",
		question: "모든 것을 정리하고 정해진 계획대로 진행하는 것을 선호하지 않나요?",
		options: { A: "예", B: "아니오" }
	  },
    {
      id: 12,
      dimension: "P/J",
      question: "모든 것을 정리하고 정해진 계획대로 진행하는 것을 선호하지 않나요?",
      options: { A: "예", B: "아니오" }
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    const updatedAnswers = [...answers, { id: test[currentQuestionIndex].id, dimension: test[currentQuestionIndex].dimension, answer }];
    setAnswers(updatedAnswers);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < test.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      alert("테스트가 완료되었습니다!");
      navigate("/result", { state: updatedAnswers }); // 결과 페이지로 이동하며 답변 데이터 전달
    }
  };

  const currentQuestion = test[currentQuestionIndex];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>MBTI 테스트</h2>
      <h3>질문 {currentQuestionIndex + 1} / {test.length}</h3>
      <p>{currentQuestion.question}</p>
      <div style={{ margin: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          onClick={() => handleAnswer("A")}
        >
          {currentQuestion.options.A}
        </button>
        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            backgroundColor: "#F44336",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          onClick={() => handleAnswer("B")}
        >
          {currentQuestion.options.B}
        </button>
      </div>
    </div>
  );
}

export default QuestionPage;
