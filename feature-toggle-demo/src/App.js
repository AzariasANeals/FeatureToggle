import './App.css';
import FeatureToggle from './FeatureToggle';

function App() {
  return (
    <div className="App">
      <h1>Feature Toggles </h1>
      <FeatureToggle isEnabled={false} featureName="Dark Mode"/>
      <FeatureToggle isEnabled={true} featureName="Light Mode"/>
      <FeatureToggle isEnabled={false} featureName = "Notifications"/>
      <FeatureToggle isEnabled={true} featureName = "Alarm"/>

    </div>
  );
}

export default App;
