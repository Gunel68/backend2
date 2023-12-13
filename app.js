const express = require('express');
const app = express();
const items = [
    {id:1, name:'Phone',price:'4000',miqdari:'20'},
    {id:2, name:'Toys',price:'120',miqdari:'4'},
    {id:3, name:'Glasses',price:'10',miqdari:'6'},
    {id:4, name:'Bag',price:'320',miqdari:'25'},
    {id:5, name:'Computer',price:'2178',miqdari:'1'},
    {id:6, name:'Dress',price:'500',miqdari:'10'},
    {id:7, name:'Ring',price:'490',miqdari:'15'},
    {id:8, name:'Case',price:'43',miqdari:'400'},
    {id:9, name:'neckles',price:'678',miqdari:'70'},
    {id:10, name:'door',price:'543',miqdari:'15'},
]
app.get('/', (req,res)=>{

    res.send("home page")
})

app.get('/items', (req,res)=>{
   
    res.send(items)
})
app.get('/items/:id', (req,res)=>{
    const userID = req.params.id;
    const selectedItem = items.find(user=>user.id == userID)
    if(selectedItem){

        res.send(selectedItem)
    }else{
        res.status(404).send('items arenot find')
    }
})

app.listen(4000, ()=>{
    console.log("Started");
})
  
