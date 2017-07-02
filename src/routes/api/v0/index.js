module.exports = (express) => {
	const router = express.Router();

	// create

	// read
	router.get('/test', (req,res) => {
		res.json({ msg: 'Hello, World!' });
	});

	// update

	// delete

	return router;
}