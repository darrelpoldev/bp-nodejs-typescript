"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const PORT = 9000;
// Endpoints
app.get('/', (req, res) => {
    res.status(200).send('I am alive, master!');
});
app.listen(PORT, () => {
    console.log(`Your server is ready at http://localhost:${PORT}`);
});
