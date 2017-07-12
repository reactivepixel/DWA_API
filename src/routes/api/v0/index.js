module.exports = (express) => {
	const router = express.Router();
	// test route
	router.get('/test', (req,res) => {
		res.json({ msg: 'Hello, World!' });
	});

	return router;
}