const express = require('express');
const dbConnect = require('./database/index');

const {PORT} = require('./config/index');
const router = require('./routes/index');
const errorHandler = require('./middlewares/errorhandlers');
const cookieParser = require('cookie-parser');
// const 



const app = express();
// const port = 5000;
// const PORT = PORT;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
app.use(cookieParser());
app.use(express.json());
app.use(router);
dbConnect();
app.use('/storage',express.static('storage'));
// app.get('/',(req,res) =>{
//     res.json({msg:'Hello World!'})
// });

app.use(errorHandler);
app.listen(PORT,console.log(`Backend is running on port : ${PORT}`));