
const handleHelloword=(req,res)=>{
    
    return res.render("home.ejs");
}


const handleUserPage=(req,res)=>{
    return res.render("user.ejs");
}

module.exports={
    handleHelloword,
    handleUserPage

}