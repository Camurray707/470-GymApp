const Authorize = require("../app/Middleware/Authorize.js");
const VerifyJWT = require("../app/Middleware/VerifyJWT.js");

/*
|--------------------------------------------------------------------------
| Default router
|--------------------------------------------------------------------------
|
| Default router is used to define any routes that don't belong to a
| controller. Also used as a parent container for the other routers.
|
*/
const router = require("koa-router")({
	prefix: "/api/v1",
});

/*router.get("/", function (ctx) {
	console.log("router.get(/)");
	return (ctx.body = "What is up??");
});*/
/*
|--------------------------------------------------------------------------
| login router
|--------------------------------------------------------------------------
|
| Description
|
*/

// Login router configuration.

const LoginController = require("../app/Controllers/LoginController.js");
const loginRouter = require("koa-router")({
	prefix: "/login",
});
loginRouter.get("/:user_id", LoginController.authorizeUser, (err) =>
	console.log("exercisesRoutes.js: login-route error:", err)
);

// Exercises router configuration.

const ExercisesController = require("../app/Controllers/ExerciseController.js");
const exercisesRouter = require("koa-router")({
	prefix: "/exercises",
});
exercisesRouter.get("/all-exercises", ExercisesController.allExercises, (err) =>
	console.log(`allExercises ran into an error: ${err}`)
);
exercisesRouter.get("/name/:workoutName", ExercisesController.exerciseByName, (err) =>
	console.log(`exerciseByName ran into an error: ${err}`)
);
exercisesRouter.get("/id/:id", ExercisesController.exerciseByID, (err) =>
	console.log(`exerciseByID ran into an error: ${err}`)
);
exercisesRouter.get("/bodypart/:bodyPart", ExercisesController.exerciseByBodyPart, (err) =>
	console.log(`exerciseByBodyPart ran into an error: ${err}`)
);
exercisesRouter.get("/muscle/:targetMuscle", ExercisesController.exerciseByMuscle, (err) =>
	console.log(`exerciseByMuscle ran into an error: ${err}`)
);
exercisesRouter.get("/equipment/:equipment", ExercisesController.exerciseByEquipment, (err) =>
	console.log(`exerciseByEquipment ran into an error: ${err}`)
);

// Users router configuration.

const UsersController = require("../app/Controllers/UsersController.js");
const usersRouter = require("koa-router")({
	prefix: "/users",
});
usersRouter.get("/all-users", UsersController.allUsers, (err) =>
	console.log(`allUsers ran into an error: ${err}`)
);
usersRouter.get("/username/:username", UsersController.userByName, (err) =>
	console.log(`userByName ran into an error: ${err}`)
);
usersRouter.get("/id/:id", UsersController.userByID, (err) =>
	console.log(`userByID ran into an error: ${err}`)
);
exercisesRouter.get("/bodypart/:bodyPart", ExercisesController.exerciseByBodyPart, (err) =>
	console.log(`exerciseByBodyPart ran into an error: ${err}`)
);
exercisesRouter.get("/muscle/:targetMuscle", ExercisesController.exerciseByMuscle, (err) =>
	console.log(`exerciseByMuscle ran into an error: ${err}`)
);
exercisesRouter.get("/equipment/:equipment", ExercisesController.exerciseByEquipment, (err) =>
	console.log(`exerciseByEquipment ran into an error: ${err}`)
);

/**
 * Register all of the controllers into the default controller.
 */
router.use(
	"",
	loginRouter.routes(),
	exercisesRouter.routes(),
	usersRouter.routes()
);

module.exports = function (app) {
	app.use(router.routes());
	app.use(router.allowedMethods());
};
