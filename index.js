const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');


//Client to Server --- RESTful 
//req.params has a colon :
//req.query has a question mark ?
//req.body is from a post in a form 

//Server back to Client 
//res.send just text
//res.json sends json * 
//res.render hbs 

app.get('/pizza', (req, res) => { //Home page 
    res.send('do you want toppings')
})
//http://localhost:3000/pizza/pepperoni/large/234234
app.get('/pizza/:toppings/:size/:coupon', (req, res) => { //Home page 
    
    res.json(req.params) //{"toppings": "pepperoni","size": "large","coupon": "234234" }
})

//http://localhost:3000/breakfast?food=eggs&drink=juice
app.get('/breakfast', (req, res) => {
    
    res.json(req.query) //{ food: 'eggs', drink: 'juice' }
})


app.get('/sandwich/:bread', (req, res) => {
        let bread = req.params.bread
        let cheese = req.query.cheese
        let meat = req.query.meat
        res.json({bread, cheese, meat})
})




//http://localhost:3000/toast/jelly/butter/brie?coffee=black
app.get('/toast/:topping/:topping2/:topping3', (req, res)=>{
    console.log(req.params, ' topping brie wants')
    res.json(req.query)
})












app.get('/', (req, res) => {
    //res.sendFile(__dirname + '/index.html')
    res.render('index', {
        cat:'garfield', 
        dog:'beethoven', 
        toys: [{name:'squeaky'}, {name:'frisbee'}, {name:'chewy'}],
        showToys: true
    })
})












//Traditionally done with forms.... Now we do this with JS like axios 
app.post('/schedule', (req, res)=>{
    console.log(req.body) 
    res.json(req.body)
})













app.listen(3000)