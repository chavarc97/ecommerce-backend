const asyncHandler = require('express-async-handler')

const getOrders = (req, res) => {
    res.status(200).json({
        message: 'get orders'
    })
}

const setOrder = (req, res) => {
    res.status(200).json({
        message: 'set order'
    })
}

const updateOrder = (req, res) => {
    res.status(200).json({
        message: 'update order'
    })
}

const deleteOrder = (req, res) => {
    res.status(200).json({
        message: 'delete order'
    })
}



module.exports = {
    setOrder,
    getOrders,
    updateOrder,
    deleteOrder
}