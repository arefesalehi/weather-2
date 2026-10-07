
export default function WeatherTemperature(celsius) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(celsius.celsius)}</span>
      <span className="unit">°C</span>
    </div>
  );
}