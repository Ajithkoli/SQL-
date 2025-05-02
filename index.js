const { faker } = require('@faker-js/faker');
const port=3000;
const {v4: uuidv4 }=require('uuid');
const express=require('express');
const app=express();
const path=require('path');
const methodOverride=require('method-override');

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));



const mysql=require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password:'Ajith@123'
  });


  //create random user details using faker api
  let getRandomUser=()=> {
    return [
       faker.string.uuid(),
      faker.internet.username(), // before version 9.1.0, use userName()
      faker.internet.email(),
     faker.internet.password(),
    ];
  };   

  app.listen(port,(req,res)=>{
    console.log("server is listening to 3000");
  });

app.get("/",(req,res)=>{
  let q="select count(*) from user";
  try{
    connection.query(q,(err,results)=>{
      if(err){
        throw err;
    }
        const count =results[0]["count(*)"];
        res.render("home.ejs",{count});
  });
  }
  catch(err){
        console.log(err);
        res.send("some error in database");
  }
});

app.get("/user",(req,res)=>{
  let q="select * from user";
  try{
    connection.query(q,(err,results)=>{
      if(err){
        throw err;
    }
      let users=results;
       res.render("user.ejs",{users});
        
  });
  }
  catch(err){
        console.log(err);
        res.send("some error in database");
  }
});

app.get("/user/:id/edit",(req,res)=>{
  let {id}=req.params;
  let q=`select * from user where user_id="${id}"`;
  try{
    connection.query(q,(err,results)=>{
      if(err){
        throw err;
    }
       let user=results[0];
       res.render("edit.ejs",{user});
        
  });
  }
  catch(err){
        console.log(err);
        res.send("some error in database");
  }
  
});

//update route
app.patch("/user/:id",(req,res)=>{
  let {id}=req.params;
  let {password:formPass,username:newUsername}=req.body;
  let q=`select * from user where user_id="${id}"`;
  try{
    connection.query(q,(err,results)=>{
      if(err){
        throw err;
    }
      let user=results[0];
      if(formPass !=user.password){
        res.send("Wrong password");
      }else{
        let q2=`update user set username="${newUsername}" where user_id="${id}"`;
        connection.query(q2,(err,result)=>{
          if(err)
            throw err;
          
          res.redirect("/user");
        });

      }
        
  });
  }
  catch(err){
        console.log(err);
        res.send("some error in database");
  }
  
});

app.put("/users/new",(req,res)=>{
  //to add new user
})

// same for delete request

// connection.end(); this line is not required now because the connection will get automatically close after sevicing a request


