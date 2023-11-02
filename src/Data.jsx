export default function Data({ props }) {
  if (props) {
    const forecast = props.forecast.forecastday;
    const name = props.location.name;
    return (
      <>
        <h2 className="text-center pt-10 text-2xl">{name}</h2>
        <div className="  sm:flex sm:justify-around w-screen mt-28">
          {forecast.map((cast) => {
            return (
              <div
                key={cast.date_epoch}
                className=" rounded-2xl bg-slate-50 border-0 border-inherit shadow-xl  m-4 flex flex-col  justify-center items-center sm:w-1/4 md:w-1/6"
              >
                <p>{cast.date}</p>
                <br />
                <img src={cast.day.condition.icon} alt="icon" />
                <br />
                <p className="text-center">{cast.day.condition.text}</p>
                <p>
                  {cast.day.avgtemp_c}
                  <span>&deg;C</span>
                </p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
