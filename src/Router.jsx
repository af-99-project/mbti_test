import React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from './components/StartPage';
import QuestionPage from './components/QuestionPage';
import ResultPage from './components/ResultPage';

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/Test" element={<QuestionPage />} />
                <Route path="/Result" element={<ResultPage />} />
            </Routes>
        </>
    );
};

export default Router;