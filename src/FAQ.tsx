import React from 'react';
import { X } from 'lucide-react';

interface FAQProps {
  onClose: () => void;
}

const FAQ: React.FC<FAQProps> = ({ onClose }) => {
  const faqItems = [
    {
      question: "Який вік дітей приймає табір?",
      answer: "Ми приймаємо дітей віком від 7 до 14 років."
    },
    {
      question: "Як організоване харчування?",
      answer: "У таборі організоване триразове харчування: сніданок, обід та полуденок. Меню складається з урахуванням потреб дітей та включає здорові та збалансовані страви."
    },
    {
      question: "Чи є медичний працівник у таборі?",
      answer: "Так, у таборі постійно присутній кваліфікований медичний працівник, який слідкує за здоров'ям дітей."
    },
    {
      question: "Що потрібно взяти з собою?",
      answer: "Рекомендований список речей: змінний одяг, спортивне взуття, головний убір, сонцезахисний крем, пляшка для води, засоби особистої гігієни."
    },
    {
      question: "Як відбувається оплата?",
      answer: "Оплата здійснюється після подання заявки та підтвердження наявності місць. Можлива оплата частинами: 50% передоплата для бронювання місця та решта до початку зміни."
    },
    {
      question: "Чи можна відвідувати табір не повний тиждень?",
      answer: "Так, можливе відвідування окремих днів, але рекомендуємо повний тиждень для кращої адаптації та участі у всіх запланованих активностях."
    },
    {
      question: "Як організована безпека дітей?",
      answer: "Територія табору охороняється, всі активності проводяться під наглядом досвідчених інструкторів, дотримуються всі необхідні правила безпеки."
    },
    {
      question: "Чи можна батькам відвідувати дітей?",
      answer: "Так, батьки можуть відвідувати дітей у визначений час, попередньо узгодивши це з адміністрацією табору."
    }
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-semibold text-levcamp-green">Часті питання</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-levcamp-orange transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-medium text-levcamp-green mb-2">{item.question}</h4>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;