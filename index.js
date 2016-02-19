// GET ALL DATA WITH CONSOLE.LOG
// PUSH THOSE DATA IN MONGO
// GET A MOCKUP SITE FOR THIS TO GET THIS DATA AND PUBLISH

var jsdom = require("jsdom");

jsdom.env({
  url: "http://eventbrite.com/",
  scripts: ["http://code.jquery.com/jquery.js"],
  done: function (err, window) {
    var $ = window.$;
    console.log("HN Links");
    $("a").each(function() {
      console.log(" -", $(this).text());
    });
  }
});
