app.all('*',function (req,res,next) {
    res.header("Access-Content-Allow-Origin",'PUT,GET,POST,DELETE,OPTIONS');

})