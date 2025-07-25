const express = require('express');
const router = express.Router({ mergeParams: true });
const wrapAsync = require('../utils/wrapAsync');
const { isLoggedIn, validateReview, isReviewAuthor } = require("../middleware");


const reviewController = require("../controllers/reviews.js");
// POST: Create a new review
router.post("/", isLoggedIn, validateReview, wrapAsync( reviewController.createReview));

// DELETE: Remove a review
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview)); 

module.exports = router;
