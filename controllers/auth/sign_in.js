module.exports = (req, res) => {
    try {

        res.send({
            success: true,
            user: req.user
        });
    } catch(err){
        res.status(500).send('Error signing in');
    }
}
