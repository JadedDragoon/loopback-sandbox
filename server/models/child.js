'use strict';

module.exports = function(Child) {
  Child.validateAsync('parentId', function(err, done) {
    const Parent = Child.app.models.Parent;
    Parent.exists(this.parentId, function(error, exists) {
      if (error) err(error);
      if (!exists) err();
      done();
    });
  }, {'message': 'Debate not found.'});
};
