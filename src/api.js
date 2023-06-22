const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/obalWMQTCs5mzgpDLXdw/scores/';
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

const refreshData = async () => {
  const scoresList = _.querySelector('.scores-list');
  const data = await getData(); // Call the getData function with await
  const { result } = data;
  result.sort((a, b) => b.score - a.score);
  scoresList.innerHTML = '';
  result.forEach((element) => {
    const scoreListItem = _.createElement('li');
    scoreListItem.className = 'score-list-item';
    scoreListItem.textContent = `${element.user}: ${element.score}`;
    scoresList.appendChild(scoreListItem);
  });
};

const addData = async () => {
  const addName = _.querySelector('.add-name-input');
  const addScore = _.querySelector('.add-score-input');
  try {
    if (addName.value !== '' && addScore.value !== '') {
      const dataToSend = {
        user: addName.value,
        score: parseInt(addScore.value, 10),
      };

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(dataToSend),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      addName.value = '';
      addScore.value = '';
    }
  } catch (error) {
    return error;
  }
  return null;
};

export { addData, refreshData };