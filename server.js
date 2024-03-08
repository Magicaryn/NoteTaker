const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.get('/*', (req, res) =>
res.sendFile(path.join(__dirname,'index.html')))

app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, 'notes.html'))
)

app.listen(PORT, () => console.log(`Listening on PORT: http://localhost:${PORT}`));
