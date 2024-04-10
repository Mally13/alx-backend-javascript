import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const fullBudget = {
    ...getBudgetObject(income, gdp, capita),
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
