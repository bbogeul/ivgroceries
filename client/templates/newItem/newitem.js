Template.newItem.rendered = function() {
    $('.parallax').parallax();
     $('.slider').slider({full_width: true});
     $('.scrollspy').scrollSpy();
};
AutoForm.hooks({
  'noteInsert': {
    onSuccess: function (operation, result, template) {
      toast('Item created successfully!', 4000);
      Router.go('newItem');
    }
  }
});

