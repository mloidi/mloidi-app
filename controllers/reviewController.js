const mongoose = require('mongoose');
const Review = mongoose.model('Review');

exports.addReview = async (req, res) => {
  req.body.author = req.user._id;
  req.body.store = req.params.id;
  await (new Review(req.body)).save();
  req.flash('success', 'Review saved!!');
  res.redirect('back');
}