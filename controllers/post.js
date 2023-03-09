const getPosts = async (req, res) => {
    try {

    } catch (err) {
        return res.status(400).json({
            message: err.message
        })
    }
};

module.exports = {getPosts};