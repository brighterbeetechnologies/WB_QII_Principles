export const updateCardClick = (id) => {
  let storedData = JSON.parse(localStorage.getItem("cardClicks")) || {};

  storedData[id] = (storedData[id] || 0) + 1;

  localStorage.setItem("cardClicks", JSON.stringify(storedData));
};

export const getSortedCards = (cards) => {
  let storedData = JSON.parse(localStorage.getItem("cardClicks")) || {};

  return [...cards].sort((a, b) => {
    const countA = storedData[a.rId] || 0;
    const countB = storedData[b.rId] || 0;

    return countB - countA;
  });
};