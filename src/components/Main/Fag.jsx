import React, { useState } from "react";
import data from "../../db/chatbot.json";

function Fag() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <div className="text-sm text-gray-700">
      {!selectedQuestion ? (
        
        <ul className="space-y-2">
          {data.chat.map((item) => (
            <li
              key={item.id}
              onClick={() => setSelectedQuestion(item)}
              className="cursor-pointer p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition"
            >
              {item.question}
            </li>
          ))}
        </ul>
      ) : (
        <div className="p-2">
          <p className="font-semibold mb-2">{selectedQuestion.question}</p>
          <p className="mb-4">{selectedQuestion.answer}</p>
          <button
            onClick={() => setSelectedQuestion(null)}
            className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            ⬅ Back
          </button>
        </div>
      )}
    </div>
  );
}

export default Fag;
