Meteor.startup(function() {
    var numTests = Tests.find({ }).count();
    if (numTests === 0) {
        for (var i = 0; i < 99; i++) {
            Tests.insert({ name: i.toString() });
        }
    }
});

