import { createSelector } from "@reduxjs/toolkit";
import { getSortedCards } from "../utils/cardRanking";

export const selectLearningPath = (state) => state.appData.learningPath;

export const selectSortedLearningPath = createSelector(
  [selectLearningPath],
  (cards) => {
    return getSortedCards(cards);
  }
);