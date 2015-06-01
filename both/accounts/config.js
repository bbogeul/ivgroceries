AccountsTemplates.configureRoute('signIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('signUp', {layoutTemplate: 'appLayout'});
AccountsTemplates.configureRoute('ensureSignedIn', {layoutTemplate: 'appLayout'});
AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    optional: false,
    displayName: "Name",
    errStr: 'Only "Full Name" allowed!',
});