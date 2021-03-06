/**
 * Module dependencies
 */

var util = require('util');
var _ = require('lodash');
var mergeDefaults = require('merge-defaults');



/**
 * This `before` function is run before generating targets.
 * Validate, configure defaults, get extra dependencies, etc.
 *
 * @param  {Object} scope
 * @param  {Function} cb    [callback]
 */

module.exports = function(scope, cb) {

  //
  // scope.args are the raw command line arguments.
  //
  // e.g. if you run:
  // sails generate controlller user find create update
  // then:
  // scope.args = ['user', 'find', 'create', 'update']
  //

  mergeDefaults(scope, {
    // foo: scope.args[0]
  });



  //
  // Validate custom scope variables which
  // are required by this generator.
  //

  if (!scope.rootPath) {
    return cb(new Error(
      'Missing scope variable: `rootPath`\n' +
      'Please make sure it is specified and try again.'
    ));
  }


  //
  // Determine default values based on the
  // available scope.
  //

  mergeDefaults(scope, {
    currentTime: new Date()
  });



  //
  // Take multiple "passes" if necessary.
  //

  mergeDefaults(scope, {
    rootPath: scope.rootPath
  });



  //
  // Trigger callback with no error to proceed.
  //

  cb();
};
