const Models = require("../models/newsModel.js");

exports.getNewsAll = async function(req, res){
    let m=await Models.getAll();
    res.render('news', {data:m});

};

exports.getNews = async function(req, res){
    console.log(req.params);
    let m=await Models.getOne(req.params.idNews);
    res.render('newsShow', {data:m});

};