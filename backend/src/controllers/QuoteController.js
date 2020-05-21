import { Quote } from '../models/QuoteModel';
import User from '../models/UserModel';

export const addNewQuote = (req, res) => {
  let newQuote = new Quote(req.body.quote);
  let { userId } = req.body;

  if (!userId) {
    res.send({ error: 'please specify a use to add this quote to' });
  }
  // update the user object
  User.findOneAndUpdate(
    userId,
    { $push: { quotes: newQuote } },
    { new: true, useFindAndModify: false },
    (err, updatedUser) => {
      if (err || !updatedUser) {
        res.send(err);
      }
    },
  );

  // save the new quote and respond with it
  newQuote.save((err, quote) => {
    if (err) {
      res.send(err);
    }
    res.json(quote);
  });
};

export const getQuotes = (req, res) => {
  Quote.find({}, (err, quote) => {
    if (err) {
      res.send(err);
    }
    res.json(quote);
  });
};

export const getQuoteWithID = (req, res) => {
  Quote.findById(req.params.quoteID, (err, quote) => {
    if (err) {
      res.send(err);
    }
    res.json(quote);
  });
};

export const updateQuote = (req, res) => {
  Quote.findOneAndUpdate(
    { _id: req.params.quoteID },
    req.body, // FIX THIS
    { new: true, useFindAndModify: false },
    (err, quote) => {
      if (err) {
        res.send(err);
      }
      res.json(quote);
    },
  );
};

export const deleteQuote = (req, res) => {
  Quote.deleteOne({ _id: req.params.quoteID }, (err, quote) => {
    if (err) {
      res.send(err);
    }
    res.json({
      _id: req.params.quoteID,
    });
  });

  let { userId } = req.body;

  if (!userId) {
    res.json({ error: 'please specify a use to add this quote to' });
  }
  // update the user object
  User.findOneAndUpdate(
    userId,
    { $push: { quotes: newQuote } },
    { new: true, useFindAndModify: false },
    (err, updatedUser) => {
      if (err || !updatedUser) {
        res.send(err);
      }
    },
  );
};