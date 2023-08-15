import SurveyCard from "./SurveyCard";

function page() {
  return (
    <div className="py-8 px-8 lg:py-16 lg:px-40 min-h-[70vh]">
      <h1 className="text-xl mb-4 font-bold lg:text-xl">Your Surveys</h1>
      {/* 3 col grid for each surveys. each surveys has name, repsonses availble, time to complete, and reward perresponse and an svg-button to procced to survey page */}
      <div className="lg:grid grid-cols-3 flex flex-col items-center lg:gap-4">
        <SurveyCard
          name={"Cola Survey"}
          reward={250}
          responses={{ done: 25, total: 150 }}
          time={10}
        ></SurveyCard>
        <SurveyCard
          name={"Cola Survey"}
          reward={250}
          responses={{ done: 25, total: 150 }}
          time={10}
        ></SurveyCard>
        <SurveyCard
          name={"Cola Survey"}
          reward={250}
          responses={{ done: 25, total: 150 }}
          time={10}
        ></SurveyCard>
      </div>
    </div>
  );
}

export default page;
