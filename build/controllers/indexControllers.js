"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: "La API ya va quedando homs" });
    }
}
exports.indexController = new IndexController();
