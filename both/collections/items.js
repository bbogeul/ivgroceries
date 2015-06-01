Items = new Mongo.Collection('items');

Items.helpers({

});

Items.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});

Items.attachSchema(new SimpleSchema({
  name: {
    type: String,
    max: 200
  },
  quantity: {
    type: Number,
    optional: false,
    autoform: {
      type: 'number'
    }
  }
}));
