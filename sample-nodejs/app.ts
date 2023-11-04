import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

const PORT = 9000;

// endpoints
/**
app.post(`/sample-post`, (req, res) => {
    const {  prop1, prop2, prop3, } = req.body;
    const invalidPayload = !prop1 || !prop2 || !prop3;
    if (invalidPayload) {
        return res.status(400).json({error: "Invalid Payload"})
    }
    // do whatever here
    const result = {};
    return res.status(201).json({message: "Success!", result});
})
**/

app.get('/', (req, res) => {
    res.status(200).send('I am alive, master!');
});

app.listen(PORT, () => {
    console.log(`Your server is ready at http://localhost:${PORT}`);
});
