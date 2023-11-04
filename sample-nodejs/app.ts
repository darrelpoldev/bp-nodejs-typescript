import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const PORT = 9000;

// endpoints
app.get('/', (req, res) => {
    res.status(200).send('I am alive, master!');
});

app.listen(PORT, () => {
    console.log(`Your server is ready at http://localhost:${PORT}`);
});
