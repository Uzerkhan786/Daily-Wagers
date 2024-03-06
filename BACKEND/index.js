const express = require('express');
const mongoDbConnection = require('./src/config/db')
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./src/routes')
const { PORT } = require('./src/config/config-env')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())
app.use('/api', routes);

app.listen(PORT, async () => {
    await mongoDbConnection();
    console.log(`Server is listening at port ${PORT}`);
})