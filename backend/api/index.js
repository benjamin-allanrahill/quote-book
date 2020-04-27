import express from 'express';
import {
  addNewQuote,
  getQuotes,
  getQuoteWithID,
  updateQuote,
  deleteQuote,
} from '../src/controllers/controller';

const router = express.Router();

router.get('/quotes', getQuotes);
router.post('/quotes', addNewQuote);

router.get('/quotes/:quoteID', getQuoteWithID);
router.put('/quotes/:quoteID', updateQuote);
router.delete('/quotes/:quoteID', deleteQuote);

export default router;