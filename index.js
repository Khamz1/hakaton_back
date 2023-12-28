const  express = require( "express")
const  mongoose = require("mongoose")
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb+srv://djamalayl32:yakhya@cluster0.eb0ykyh.mongodb.net/hakaton",{

})
.then(()=>console.log("Успешно соеденился c Mongo"))
.catch(()=>console.log("что то пошло не так в соеденении с Mongo"))

app.listen(process.env.PORT,()=>{
    console.log("Сервер запущен")
})