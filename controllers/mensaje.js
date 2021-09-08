
const ctrlHome = {};

ctrlHome.rutaPost = async (req, res) => {
    const {nodos} = req.body;
console.log(nodos);

    res.json(nodos);


}


module.exports = ctrlHome;