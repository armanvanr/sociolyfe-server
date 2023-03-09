

const other = async (req, res) => {
    try {

        res.json({
            message: "Account created successfully"
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        });
    }
};

module.exports = { other };