fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const reactionScore = data[0].score;
    const memoryScore = data[1].score;
    const verbalScore = data[2].score;
    const visualScore = data[3].score;
    const totalScore = Math.round(( reactionScore + memoryScore + verbalScore + visualScore) / 4);
    const floorTotalScore = totalScore - (totalScore % 5) - 10;
    const average = document.getElementById("average");
    average.innerHTML = totalScore;
    
    const floorAverage = document.getElementById("floor-average");
    floorAverage.innerHTML = floorTotalScore > 0 ? totalScore - (totalScore % 5) - 10 : 0;
    
    const reaction = document.getElementById("reaction-score");
    reaction.innerHTML = reactionScore;

    const reactionIcon = document.getElementById("reaction-icon");
    reactionIcon.src = data[0].icon;

    const reactionCategory = document.getElementById("reaction-category");
    reactionCategory.innerHTML = data[0].category;

    const memory = document.getElementById("memory-score");
    memory.innerHTML = memoryScore;

    const memoryIcon = document.getElementById("memory-icon");
    memoryIcon.src = data[1].icon;

    const memoryCategory = document.getElementById("memory-category");
    memoryCategory.innerHTML = data[1].category;

    const verbal = document.getElementById("verbal-score");
    verbal.innerHTML = verbalScore;

    const verbalIcon = document.getElementById("verbal-icon");
    verbalIcon.src = data[2].icon;

    const verbalCategory = document.getElementById("verbal-category");
    verbalCategory.innerHTML = data[2].category;

    const visual = document.getElementById("visual-score");
    visual.innerHTML = visualScore;

    const visualIcon = document.getElementById("visual-icon");
    visualIcon.src = data[3].icon;

    const visualCategory = document.getElementById("visual-category");
    visualCategory.innerHTML = data[3].category;
  })
  .catch((error) => {
    console.log("An error occurred:", error);
  });
