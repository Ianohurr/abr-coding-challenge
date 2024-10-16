import { useLocation } from "react-router-dom";
export function FishPage({ fishMap }) {
  const location = useLocation();
  let region = location.pathname.substring(1, location.pathname.length);
  region = region.replace("%20", " ");
  let regionData = fishMap[region];
  return (
    <div className="fish-page-container">
      <h1 className="fish-region-header">{region}</h1>
      <p className="fish-card-subtitle">
        {`Average Calories: ${Math.floor(
          fishMap[region].calories / fishMap[region].groupAmount
        )}`}
      </p>
      <p className="fish-card-subtitle">{`Average Fat Total (gs): ${
        Math.round(
          (fishMap[region].fatTotal / fishMap[region].groupAmount) * 10
        ) / 10
      }`}</p>
      {regionData.fishes.map((fish) => {
        console.log(fish);
        return (
          <div className="fish-card">
            <p className="fish-card-name">{fish.name}</p>
            <img
              src={fish.imageUrl?.src ? fish.imageUrl.src : null}
              alt={fish.imageUrl?.alt}
              width={75}
              height={75}
            ></img>
            <p>{`Calories: ${fish.calories}`}</p>
            <p>{`Fat Servings: ${fish.fatServing}`}</p>
            <p>{fish.descriptiveText}</p>
          </div>
        );
      })}
    </div>
  );
}
