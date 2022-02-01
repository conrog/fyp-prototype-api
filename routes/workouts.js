let express = require("express");
let router = express.Router();
const auth = require("../middleware/auth");

let workoutsController = require("../controllers/workoutsController");

router
  .all(auth)
  .get("/", workoutsController.get_workouts)
  .get("/liked/:userId", workoutsController.get_liked_workouts_by_user_id)
  .post("/:workoutId/like", workoutsController.like_workout)
  .delete("/:workoutId/like", workoutsController.unlike_workout);

module.exports = router;
