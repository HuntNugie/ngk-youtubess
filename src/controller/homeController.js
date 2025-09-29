export const welcome =  function(req,res){
    res.render("index",{layout:"layouts/main.ejs"})
}