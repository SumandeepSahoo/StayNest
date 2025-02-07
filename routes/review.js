const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../Utils/wrapAsync.js");
const ExpressError = require("../Utils/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/Listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");

//Reviews
//Post review route
router.post("/",validateReview,isLoggedIn, wrapAsync(async (req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success", "New Review Created!");
    res.redirect(`/listings/${listing._id}`);
}));

//Delete Review Route
router.delete("/:reviewId", isLoggedIn, wrapAsync(async(req, res) => {
    let { id, reviewId} = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {review: reviewId} });
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review Deleted!");
    res.redirect("/listings");
})
);

module.exports = router;
