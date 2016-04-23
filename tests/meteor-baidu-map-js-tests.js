// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-baidu-map-js.js.
import { name as packageName } from "meteor/meteor-baidu-map-js";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-baidu-map-js - example', function (test) {
  test.equal(packageName, "meteor-baidu-map-js");
});
