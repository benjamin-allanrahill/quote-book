// this is where all api logic should be placed
import axios from 'axios';

export const fetchQuote = (quoteID) => {
  return axios.get(`/api/quotes/${quoteID}`).then((resp) => resp.data);
};

export const fetchQuoteList = () => {
  return axios.get(`/api/quotes`).then((resp) => resp.data.quotes);
};
