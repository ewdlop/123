// Pretend we're querying for "Best Snacks for Developers" with a humorous twist

const fetchSnackRecommendations = async () => {
  try {
    const response = await graphAPI.query(`
      query {
        developerSnackPreferences(orderBy: "caffeineLevel", limit: 5) {
          snackName
          caffeineLevel
          healthWarning
          motivationBoost
          sideEffects
          codingSpeedIncrease
        }
      }
    `);

    const bestSnacks = response.data.developerSnackPreferences.map((snack, index) => {
      return {
        Rank: index + 1,
        Snack: snack.snackName,
        "Caffeine Level": snack.caffeineLevel,
        "Health Warning": snack.healthWarning || "None, YOLO!",
        "Motivation Boost": snack.motivationBoost || "Slightly Less Procrastination",
        "Side Effects": snack.sideEffects || "Nervous Twitch",
        "Coding Speed Increase": `${snack.codingSpeedIncrease}% (results may vary)`,
      };
    });

    console.log("Top Snacks for Developers:", bestSnacks);

  } catch (error) {
    console.error("Oh no, the snack data's missing! Go grab a coffee, human!", error);
  }
};

fetchSnackRecommendations();
