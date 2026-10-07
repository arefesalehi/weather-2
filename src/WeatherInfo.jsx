
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(data) {
  return (
    <div className="WeatherInfo">
      <h1>{data.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={data.data.date} />
        </li>
        <li className="text-capitalize">{data.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <div>
              <WeatherIcon code={data.data.icon} size={52} />
            </div>

            <div>
              <WeatherTemperature celsius={data.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {data.data.humidity}%</li>
            <li>Wind: {data.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}