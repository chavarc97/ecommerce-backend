const getProducts = (req, res) => {
    res.status(200).json({
        message: 'get products'
    })
}

const getProductById = (req, res) => {
    res.status(200).json({
        message: 'get product by id'
    })
}

const createProduct = (req, res) => {
    res.status(200).json({
        message: 'create product'
    })
}

const updateProduct = (req, res) => {
    res.status(200).json({
        message: 'update product'
    })
}

const deleteProduct = (req, res) => {
    res.status(200).json({
        message: 'delete product'
    })
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}