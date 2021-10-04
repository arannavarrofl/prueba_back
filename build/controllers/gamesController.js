"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log("holiii");
            const promisePool = database_1.default.promise();
            const [rows, fields] = yield promisePool.query('SELECT * FROM game');
            res.json(rows);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const promisePool = database_1.default.promise();
            yield promisePool.query('INSERT INTO game set ?', [req.body]);
            res.json({ message: "Juego guardado correctamente" });
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; //obtener solo una parte de un objeto;
            const promisePool = database_1.default.promise();
            const [rows, fields] = yield promisePool.query('SELECT * FROM game WHERE id = ?', [id]);
            const game = JSON.stringify(rows);
            if (game == "[]") {
                return res.status(404).json({ message: "Juego no encontrado" });
            }
            res.json(rows);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params; //obtener solo una parte de un objeto
                const promisePool = database_1.default.promise();
                yield promisePool.query('UPDATE game set ? WHERE id = ?', [req.body, id]);
                res.json({ text: "Juego eliminado correctamente" });
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params; //obtener solo una parte de un objeto
            const promisePool = database_1.default.promise();
            yield promisePool.query('DELETE FROM game WHERE id = ?', [id]);
            res.json({ text: "Juego eliminado correctamente" });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
