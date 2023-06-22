const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qngufskVhoBL0fA4ttqb/scores/';
const _ = document;
const getData = async () => {
  try {
    const response = await fetch(url); // Fetch data from api endpoints
    const data = await response.json(); // Change the data format to json
    return data;
  } catch (error) {
    return error.message;
  }
};

export const refreshData = async () => {
  const scoresList = _.querySelector('.scores-list');
  const data = await getData(); // Call the getData function with await
  const { result } = data;
  result.sort((a, b) => b.score - a.score);
  scoresList.innerHTML = '';
  result.forEach((element) => {
    const scoreListItem = _.createElement('li');
    scoreListItem.className = 'score-list-item';
    scoreListItem.textContent = `${element.userName}: ${element.userScore}`;
    scoresList.appendChild(scoreListItem);
  });
};

export const addData = async () => {
  const addName = _.querySelector('.add-name-input');
  const addScore = _.querySelector('.add-score-input');
  try {
    if (addName.value !== '' && addScore.value !== '') {
      const dataToSend = {
        userName: addName.value,
        userScore: parseInt(addScore.value, 10),
      };
      fetch(url,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(dataToSend),
        });
      addName.value = '';
      addScore.value = '';
    }
  } catch (error) {
    return error;
  }
  return null;
};
