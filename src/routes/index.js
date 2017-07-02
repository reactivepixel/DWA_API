module.exports = (express) => {
	const router = express.Router();

	router.get('/status', (req,res) => {
		res.status(200).json({ status: true });
	});

	router.use('/api/v0', require('./api/v0')(express));

	return router;
}