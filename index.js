const express= require('express');
const app=express();
const port=3000;

app.use(express.json());

const datarouter = require("./routes/data");
app.use('/data',datarouter)

app.get("/", (req, res) => {
    res.send(`
      <body>
        <text>test1<text>
          <img src="test.jpeg"></img>
      </body>
    </html>`);
  });

  app.get("/api", (req, res) => {
    res.redirect('https://aws.amazon.com')
  });




app.listen(port, () =>{
    console.log('Server started');
})

