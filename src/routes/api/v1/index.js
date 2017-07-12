module.exports = (express) => {
    const router = express.Router();

    // create
    router.post('/user', (req,res) => {
        res.json({ msg: 'Create Data!' });
    });

    // read
    router.get('/user', (req,res) => {
        res.json({ msg: 'Find Data!' });
    });

    // update
    router.put('/user', (req,res) => {
        res.json({ msg: 'Find Data and update!' });
    });

    // delete
    router.delete('/user', (req,res) => {
        res.json({ msg: 'Find Data and delete!' });
    });

    return router;
}
