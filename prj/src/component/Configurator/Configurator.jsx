import React from 'react';

const Configurator = ({ handleModelChange }) => {
  const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff"];

  return (
    <div className="configurator">
      <div className="configurator_section">
        <div className="configurator_section_title">
          Car Color
        </div>
        <div className="configurator_section_values">
          <div className="item">
            <div className="item_label">Top Colour</div>
            <div className="color_buttons">
              {colors.map((color, index) => (
                <button
                  key={index}
                  className="color_button"
                  style={{ backgroundColor: color }}
                  onClick={() => handleModelChange(color)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
