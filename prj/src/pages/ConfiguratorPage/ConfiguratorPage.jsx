import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import './ConfiguratorPage.css';
import Experience from '../../component/Configurator/Experience';
import Configurator from '../../component/Configurator/Configurator';

function ConfiguratorPage() {
  const [carModel, setCarModel] = useState("./models/carA8.glb"); // Default model

  const handleModelChange = (color) => {
    switch (color) {
      case "#ff0000":
        setCarModel("./models/red car.glb"); // Red model
        break;
      case "#00ff00":
        setCarModel("./models/green car.glb"); // Green model
        break;
      case "#0000ff":
        setCarModel("./models/blue car.glb"); // Blue model
        break;
      case "#ffff00":
        setCarModel("./models/yellow car.glb"); // Yellow model
        break;
      case "#ff00ff":
        setCarModel("./models/pink car.glb"); // Pink model
        break;
      default:
        setCarModel("./models/carA8.glb"); // Default model
    }
  };

  return (
    <div className="App">
      <Canvas>
        <color attach="background" args={["#213547"]} />
        <fog attach="fog" args={["#213547", 10, 20]} />
        <Experience modelPath={carModel} />
      </Canvas>
      <Configurator handleModelChange={handleModelChange} />
    </div>
  );
}

export default ConfiguratorPage;
