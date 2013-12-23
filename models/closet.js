var mongoose = require('mongoose');

var Schema = mongoose.Schema;
/*
 {
 category: 'tops',
 subCategory: 'sweaters',
 name: 'MARLED ROLLED SLEEVE TUNIC SWEATER',
 description: 'Drop on the coziest casual wear. Sensually soft semi-sheer slub knit is shaped for comfort and styled with on-trend marling, drop shoulders and a hi-lo hem. It is great over a cami and leggings after the sun sets on a warm day.',
 color: 'grey',
 price: '44.90',
 discountedPrice: '22.45',
 size: 'XS',
 review: 'none',
 quantity: 1,
 dateAdded: null,
 datePurchased: null,
 wishList: false,
 basket: false,
 owned: true,
 images: {
 [
 url: 'image1.png',
 description: ‘Mainview’,
 ]
 }
 }
 */
var ClosetSchema = new Schema({
    category: {type: String, required: true},
    subCategory: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String},
    color: {type: String, required: true},
    price: {type: String},
    discountedPrice: {type: String},
    size: {type: String},
    review: {type: String},
    quantity: {type: Number},
    dateAdded: {type: Date},
    datePurchased: {type: Date},
    wishList: {type: Boolean},
    basket: {type: Boolean},
    owned: {type: Boolean},
    images: [
        {
            url: {type: String, required: true},
            description: {type: String}
        }
    ]
});

/**
 * Statics
 */
ClosetSchema.statics = {
    load: function (id, cb) {
        this.findOne({
            _id: id
        }).exec(cb);
    }
};

var Closet = mongoose.model('Closet', ClosetSchema);



