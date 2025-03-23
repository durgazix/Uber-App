import PropTypes from "prop-types";

const LocalSearchPanel = ({ suggestions, setPickup, setVehiclePanel, setPanelOpen, setDestination, activeField, setActiveField}) => {
  const handleSuggestionClick = (suggestion) => {
    if (activeField === "pickup") {
      setPickup(suggestion.description);
    } else if (activeField === "destination") {
      setDestination(suggestion.description);
    }
    // setVehiclePanel(true);
    // setPanelOpen(false);
    // setActiveField(" ");
  };
  
  return (
    <div>
      {/* Display fetched suggestions */}
      {suggestions.length > 0 ? (
        suggestions.map((suggestion, index) => (
          <div
            key={suggestion.place_id || index}
            onClick={() => handleSuggestionClick(suggestion)}
            className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start cursor-pointer"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{suggestion.description}</h4>
          </div>
        ))
      ) : (
        <p>No suggestions found</p>
      )}
    </div>
  );
};

LocalSearchPanel.propTypes = {
  suggestions: PropTypes.array.isRequired,
  setPickup: PropTypes.func.isRequired,
  setDestination: PropTypes.func.isRequired,
  activeField: PropTypes.string.isRequired,
  setVehiclePanel: PropTypes.func.isRequired,
  setPanelOpen: PropTypes.func.isRequired,
};

export default LocalSearchPanel;
