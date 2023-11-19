const fs = require('fs');
const express = require('express');
const tourController = require('./../controllers/tourControllers');

const router = express.Router();
router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

// router.param('id', tourController.checkId);

module.exports = router;
