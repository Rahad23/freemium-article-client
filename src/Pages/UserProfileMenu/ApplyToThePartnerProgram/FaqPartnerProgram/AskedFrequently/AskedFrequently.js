import React from "react";
import QuestionsPage from "./QuestionsPage/QuestionsPage";

const AskedFrequently = () => {
  return (
    <div className="bg-black-450 px-10">
      <h1 className="lg:text-5xl text-4xl font-serif font-medium my-11 inline-block text-gray-200">
        FAQs about the Partner Program.
      </h1>
      <QuestionsPage />
    </div>
  );
};

export default AskedFrequently;
