import React from "react";
import { useLocation } from "react-router-dom"; // 데이터 수신용

function ResultPage() {
  const location = useLocation();
  const answers = location.state || []; // 전달받은 답변 데이터

  // 결과 계산: 각 차원마다 A와 B의 선택 횟수를 세고, A가 많으면 첫 번째 옵션, B가 많으면 두 번째 옵션을 선택
  const resultSummary = answers.reduce((summary, answer) => {
    if (!summary[answer.dimension]) {
      summary[answer.dimension] = { A: 0, B: 0 };
    }
    summary[answer.dimension][answer.answer]++;
    return summary;
  }, {});

  // MBTI 결과 계산
  const mbti = {
    E_I: resultSummary["E/I"]?.A > resultSummary["E/I"]?.B ? "E" : "I",
    S_N: resultSummary["S/N"]?.A > resultSummary["S/N"]?.B ? "S" : "N",
    F_T: resultSummary["F/T"]?.A > resultSummary["F/T"]?.B ? "F" : "T",
    P_J: resultSummary["P/J"]?.A > resultSummary["P/J"]?.B ? "P" : "J"
  };

  // 결과 요약 출력
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>테스트 결과</h2>
      <h3>당신의 MBTI 결과:</h3>
      <p>{mbti.E_I}{mbti.S_N}{mbti.F_T}{mbti.P_J}</p>
      <h3>차원별 선택 결과:</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {Object.entries(resultSummary).map(([dimension, counts]) => (
          <li key={dimension} style={{ margin: "10px 0" }}>
            <strong>{dimension}:</strong> A({counts.A}) vs B({counts.B})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultPage;
