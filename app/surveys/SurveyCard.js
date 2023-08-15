function SurveyCard({ name, responses, time, reward }) {
  return (
    <div className="border rounded-lg p-4 grid grid-cols-[80%_15%] hover:drop-shadow-md  max-w-[90vw] transition-shadow active:drop-shadow-none bg-backgroundWhite text-lightGrey mb-4">
      <div>
        <h1 className="text-darkBlue lg:text-xl font-bold mb-2">{name}</h1>
        <div className="mb-[4px]">
          {responses.done} / {responses.total} responses available
        </div>
        <div className="flex">
          <div className="me-4">{time} min</div>
          <div className="flex">
            {reward} DA /
            <div>
              <svg
                className="mt-[4px]"
                width="17"
                height="17"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3332 14V12.6667C13.3332 11.9594 13.0522 11.2811 12.5521 10.781C12.052 10.281 11.3737 10 10.6665 10H5.33317C4.62593 10 3.94765 10.281 3.44755 10.781C2.94746 11.2811 2.6665 11.9594 2.6665 12.6667V14"
                  stroke="#5F646C"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.00016 7.33358C9.47292 7.33358 10.6668 6.13967 10.6668 4.66691C10.6668 3.19415 9.47292 2.00024 8.00016 2.00024C6.5274 2.00024 5.3335 3.19415 5.3335 4.66691C5.3335 6.13967 6.5274 7.33358 8.00016 7.33358Z"
                  stroke="#5F646C"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="h-full flex items-center">
        <svg
          width="42"
          height="56"
          viewBox="0 0 42 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.995 38.0103L26.0054 27.9999L15.995 17.9895"
            stroke="#0D1727"
            stroke-width="3.33681"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default SurveyCard;
