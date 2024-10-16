const getFormattedFishes = (fishMap) => {
  return Object.keys(fishMap).map((region) => {
    return (
      <div className="region-box" key={region}>
        <div>
          <b>{region}</b>
        </div>
        <div>{`Average Calories: ${Math.floor(
          fishMap[region].calories / fishMap[region].groupAmount
        )}`}</div>
        <div>{`Average Fat Total (gs): ${
          Math.round(
            (fishMap[region].fatTotal / fishMap[region].groupAmount) * 10
          ) / 10
        }`}</div>
      </div>
    );
  });
};

export const HomePage = ({ fishMap }) => {
  return <div className="main-card">{getFormattedFishes(fishMap)}</div>;
};
