const blogModel = require("../models/blogModel.js");
const { Model } = require("mongoose");

module.exports = function(app,mongoose){

    // POST Blog post
    app.post("/api/volunteer/blog/post", function(req, res) {

        const title = req.body.title;
        const date = (new Date()).toJSON();

        blogModel.create({
            user: "default",
            title: title,
            date: new Date(),
            content: req.body.data,
            url: `${date}/${title}`
        });    

    })
    
    // GET Blog posts, limit to 20 posts
    app.get("/api/volunteer/blog/get/:page", function(req, res) {
        const resPerPage = 20;  // results per page
        const page = req.params.page || 1; // Page
        
        blogModel.find(null, null, { skip: (resPerPage * (page - 1)), limit: resPerPage }, function(err, blogs) {
            if (err) throw new Error(err);
            const count = blogs.length;
            console.log(count);

            // if there are no more blog posts, return no more found
            if (count == 0) {
                res.send("No more blog posts");
            } else {
                res.json(blogs);
            }
        });

    })
}
