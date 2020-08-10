// gunakan path module
const path = require('path')

//gunakan express module
const express=require ('express')

//gunakan hbs views engine
const hbs =require ('hbs')

// gunakan middle ware bodyparse
const bodyParse =require('body-parser')
const app=express()

//set views file 
app.set('views',path.join(__dirname,'views'))

//setview engine
app.set('view engine','hbs')

app.use(bodyParse.urlencoded({ extended:false}))

//set public folder as static folder for static  file

app.use(express.static('public'))

//route ke halaman home
app.get('/',(req,res)=>{
    //render file index.hbs
    res.render('index',{
    name : "Rengga"
})
})
// app.get('/',(req,res)=>{
//   //render file index.hbs
//   res.render('form',{
 
// })
// })

//route untuk menampilkan form 
app.get('/post',(req,res)=>{
    //render file form.hbs
    res.render('form')
})

app.post('/post',(req, res) => {
    //render file form.hbs
    res.render('index',{
      //ambil value dari textname
      name : req.body.textname
    });
  });
   
  app.listen(8000, () => {
    console.log('Server is running at port 8000');
  });   

