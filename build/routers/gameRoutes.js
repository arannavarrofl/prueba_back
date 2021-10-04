"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class GameRoutes {
    constructor() {
        this.router = (0, express_1.Router)(); // definimos erutador
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => {
            res.send('Juegos chidos');
        });
    }
}
const gameRoutes = new GameRoutes();
exports.default = gameRoutes.router;
