import express from "express";
import session from "express-session";
import expressLayouts from "express-ejs-layouts";
const app = express();
app.use(expressLayouts);//to use express-ejs-layouts for layout management
app.use(express.static("public"));//to serve static files like css,js,images etc from public folder
app.set("layout", "layout");//to set the default layout file to layout.ejs
app.set("view engine","ejs")
app.set("views","views")
app.listen(8080, () => console.log("Server Started"));

app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: "secret-key",//recommend to store in .env file
  resave: false,//if true session is saved every request even if there is no change
  saveUninitialized: false//if true a default cookie gets created
}));

let users = [
    {name:"Himanshu",email:"himanshu.madduri@gmail.com",password:"12345"},
    {name:"John",email:"john.doe@gmail.com",password:"67890"},
    {name:"Mounish",email:"mounish@gmail.com",password:"1234"},
]

app.get("/login", (req, res) => {
  res.render("login", { error: null });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (user) {
    if (user.password === password) {
        req.session.user = user;//storing user data in session , check in browser , inspect application cookies
      res.redirect("/");
    } else {
      res.render("login", { error: "Invalid Password" });
    }
  } else {
    res.render("login", { error: "User not found" });
  }
//   res.redirect("/");
});


app.get("/register",(req,res) =>{
    res.render("register");
});

app.post("/register",(req,res)=>{
    users = [...users,req.body];
    res.redirect("/");
})



app.get("/",(req,res) =>{
    if (req.session.user){
        res.render("dashboard",{users});//Writing users here to pass the users array to the dashboard.ejs file
    }else{
        res.redirect("/login");
    }
});