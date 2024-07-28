import React from "react";
import Faq from "../../Faq/Faq";

const PricingCards = () => {
  const plans = [
    {
      lessonsPerWeek: 5,
      totalLessons: 20,
      feePerMonth: "$60",
      feeForSecondSibling: "$50",
      description: "Most comprehensive plan with 20 lessons per month.",
    },
    {
      lessonsPerWeek: 4,
      totalLessons: 16,
      feePerMonth: "$50",
      feeForSecondSibling: "$40",
      description: "Balanced plan with 16 lessons per month.",
    },
    {
      lessonsPerWeek: 3,
      totalLessons: 12,
      feePerMonth: "$40",
      feeForSecondSibling: "$30",
      description: "Ideal for those preferring 12 lessons per month.",
    },
    {
      lessonsPerWeek: 2,
      totalLessons: 8,
      feePerMonth: "$30",
      feeForSecondSibling: "$20",
      description: "Budget-friendly option with 8 lessons per month.",
    },
  ];

  return (
    <>
      <div className="pricing-cards">
        <h2>Our Pricing Plans</h2>
        <div className="card-container">
          {plans.map((plan, index) => (
            <div className="card" key={index}>
              <h3>{plan.lessonsPerWeek} Lessons/Week</h3>
              <p>
                <strong>Lessons/Month:</strong> {plan.totalLessons}
              </p>
              <p className="price">
                <strong>Fee/Month:</strong> {plan.feePerMonth}
              </p>
              <p className="sibling-discount">
                <strong>For 2nd Sibling:</strong> {plan.feeForSecondSibling}
              </p>
              <p className="description">{plan.description}</p>
            </div>
          ))}
        </div>
        <button className="enrol-button">Start Free Trail now</button>
      </div>

      <Faq />
    </>
  );
};

export default PricingCards;
