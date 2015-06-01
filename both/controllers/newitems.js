NewItemController = AppController.extend({
    waitOn: function() {
    return this.subscribe('items');
  },
  data: {
    items: Items.find({})
  }
    });