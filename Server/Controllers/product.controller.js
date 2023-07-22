const {ProductModel} = require('../Models/product.model.js');

const checkProductFields = function (product) {
    const {
        title,
        brand,
        img,
        category,
        color,
        price,
        description,
        specifications,
    } = product;
    const {mainPrice, discount} = price;

    let message;
    if (!title) message += '* title Field Empty *';
    if (!brand) message += '* brand Field Empty *';
    if (!img.length < 3)
        message += `* image Array Should Contain ['mainImg', 'otherImg01', 'otherImg02'] *`;
    if (!category) message += `* category Field Empty *`;
    if (!color) message += `* color Field Empty *`;
    if (!mainPrice) message += `* mainPrice Field Empty *`;
    if (!discount) message += `* discount Field Empty *`;
    if (!description) message += `* description Field Empty *`;
    if (!Object.keys(specifications).length)
        message += `* specification Object Empty *`;

    return message;
};

const addProduct = async function (req, res) {
    try {
        let checkStatus = checkProductFields(req.body);
        if (checkStatus) throw new Error(checkStatus);

        const newProduct = new ProductModel(req.body);
        await newProduct.save();
        return res.status(200).json({
            status: 'success',
            message: 'Product Added Successfully',
        });
    } catch (error) {
        return res.status(400).json({
            status: 'fail',
            error: error.message,
        });
    }
};

const updateProduct = async function (req, res) {
    try {
        const product = await ProductModel.findOne({_id: req.params.id});
        if (!product) throw new Error('Product not Found !');
        await ProductModel.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).json({
            status: 'success',
            message: 'Product Updated Successfully',
        });
    } catch (error) {
        return res.status(400).json({
            status: 'fail',
            error: error.message,
        });
    }
};

const deleteProduct = async function (req, res) {
    try {
        const product = await ProductModel.findOne({_id: req.params.id});
        if (!product) throw new Error('Product not Found !');
        await ProductModel.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            status: 'success',
            message: 'Product Deleted Successfully',
        });
    } catch (error) {
        return res.status(400).json({
            status: 'fail',
            error: error.message,
        });
    }
};

const getProductByID = async function (req, res) {
    try {
        const product = await ProductModel.findOne({_id: req.params.id});
        if (!product) throw new Error('Product not Found !');
        return res.status(200).json({
            status: 'success',
            product: product,
        });
    } catch (error) {
        return res.status(400).json({
            status: 'fail',
            error: error.message,
        });
    }
};

const getAllProducts = async function (req, res) {
    try {
        const {color, category, sort, name, minPrice, maxPrice} = req.query;

        const query = {};
        if (color) query.color = color;
        if (category) query.category = category;
        if (name) query.title = {$regex: name, $options: 'i'};

        if (minPrice && maxPrice) {
            query['price.mainPrice'] = {$gte: minPrice, $lte: maxPrice};
        } else if (minPrice) {
            query['price.mainPrice'] = {$gte: minPrice};
        } else if (maxPrice) {
            query['price.mainPrice'] = {$lte: maxPrice};
        }

        // Getting the Products
        const products = await ProductModel.find(query);

        // Sorting the Products
        if (sort === 'asc') {
            products = products.sort(function (a, b) {
                return a.price.mainPrice - b.price.mainPrice;
            });
        } else if (sort === 'desc') {
            products = products.sort(function (a, b) {
                return b.price.mainPrice - a.price.mainPrice;
            });
        }

        return res.status(200).json({
            status: 'success',
            products: products,
        });
    } catch (error) {
        return res.status(400).json({
            status: 'fail',
            error: error.message,
        });
    }
};

module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    getProductByID,
    getAllProducts,
};
