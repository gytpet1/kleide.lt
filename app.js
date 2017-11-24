var Twig = require("twig"),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser');


Twig.cache(false);

//Variables
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
//View engine

app.set('view engine', 'twig');


app.disable('view cache');
//Routes


app.get('/', function (req, res){
    res.render('home.html');
});

app.listen(process.env.PORT || 4000, function(){
    console.log("Listening to: http://localhost:4000/")
});

/////////////////////////////////// CAMPAIGNS ////////////////////////////////////

// app.get('/api/campaigns/', function (req, res) {
//     res.json(campaigns);
// });
// app.get('/api/campaigns/:id', function (req, res){
//     for(var i in campaigns){
//         if((isNaN(req.params.id) ? campaigns[i].slug : campaigns[i].id) == req.params.id){
//             return res.json(campaigns[i]);
//         }
//     }
//     res.status(404).json({error: 'not found'})
// });
// app.patch('/api/campaigns/:id',function (req, res) {
//     for(var i in campaigns){
//         if(campaigns[i].id == req.params.id)
//         {
//             campaigns[i] = req.body;
//         }
//     }
// })
// app.post('/api/campaigns/',function (req, res) {
//     campaigns.push(req.body);
// })