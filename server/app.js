const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const PORT = 4321;

// Instânciando o servidor usando a função express
const app = express();

app.engine('hbs', hbs.engine({
    defaultLayout: 'main',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname + '/public')))

// Importando rotas:
const indexRoute = require('./routes/indexRoute');

// Anexando rotas:
app.use('', indexRoute);

app.listen(PORT, () => {
    console.log('app is running')
})