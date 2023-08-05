const express = require("express");
const app = express();
const path = require("path");
const port = 8000
var contactList = [
    {
        name:"kirithiv",
        number:3863386838
    },
    {
        name:"kiriv",
        number:3863386838
    },
    {
        name:"rithiv",
        number:3863386838
    },
    {
        name:"kiv",
        number:3863386838
    }
]
app.set("view engine",'ejs')
app.set("views",path.join(__dirname,'views'))
app.use(express.urlencoded())
app.use(express.static("asserts"))
app.use((req,res,next)=>{
    console.log("middle 1 called")
    next()
})
app.use((req,res,next)=>{
    console.log("middle 2 called")
    next()
})
app.get("/",(req,res)=>{
    return res.render("home",{title:"My home page"});
})
app.get("/practice",(req,res)=>{
    return res.render("practice",{
        title:"lets practice ejs",
        contact_list:contactList,
    });
})

app.get("/contacts",(req,res)=>{
    return res.render("mycontacts",{
        title:"My Contacts",
        contact_list: contactList,
    });
})
app.get("/delete-contact",(req,res)=>{
    contactList = contactList.filter(e=>{
        return e.name!=req.query.name
    })
    return res.redirect("back")

})
app.post("/contacts-add",(req,res)=>{
    contactList.push({
        name:req.body.myname,
        number:req.body.mycontactnumber
    })
    return res.redirect("back")
})
app.listen(port,(err)=>{
    if (err){
        console.log(err)
        throw err
    }
    console.log("server running on port",port)
})