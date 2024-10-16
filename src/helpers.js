export const createFishMap = (fishes) => {
  let fishRegions = {};
  for (let fish of fishes) {
    if (fish.SpeciesName === "Atlantic Chub Mackerel") {
      console.log(fish);
    }
    let currentCalories = fish.Calories ? Number(fish.Calories) : 0;
    let fatTotal = fish.FatTotal
      ? Number(fish.FatTotal.replace(/\s*g$/, ""))
      : 0;
    if (!fishRegions[fish.NOAAFisheriesRegion]) {
      fishRegions[fish.NOAAFisheriesRegion] = {
        calories: currentCalories,
      };
      fishRegions[fish.NOAAFisheriesRegion].fatTotal = fatTotal;
      fishRegions[fish.NOAAFisheriesRegion].groupAmount = 1;
    } else {
      fishRegions[fish.NOAAFisheriesRegion].groupAmount += 1;
      fishRegions[fish.NOAAFisheriesRegion].calories += currentCalories;
      fishRegions[fish.NOAAFisheriesRegion].fatTotal += fatTotal;
    }

    // Add fishes
    if (fishRegions[fish.NOAAFisheriesRegion].fishes) {
      fishRegions[fish.NOAAFisheriesRegion].fishes.push({
        name: fish.SpeciesName,
        imageUrl:
          fish.ImageGallery?.length > 0
            ? fish.ImageGallery[0]
            : {
                src: "https://howtodrawforkids.com/wp-content/uploads/2022/03/9-cartoon-fish-outline-drawing.jpg",
                alt: "Cute Fish",
              },
        calories: fish.Calories,
        fatServing: fish.FatTotal,
        descriptiveText: fish.Quote,
      });
    } else {
      fishRegions[fish.NOAAFisheriesRegion].fishes = [
        {
          name: fish.SpeciesName,
          imageUrl:
            fish.ImageGallery?.length > 0
              ? fish.ImageGallery[0]
              : {
                  src: "https://howtodrawforkids.com/wp-content/uploads/2022/03/9-cartoon-fish-outline-drawing.jpg",
                  alt: "Cute Fish",
                },
          calories: fish.Calories,
          fatServing: fish.FatTotal,
          descriptiveText: fish.Quote,
        },
      ];
    }
  }
  return fishRegions;
};
