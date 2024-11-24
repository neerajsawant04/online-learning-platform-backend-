"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const config_1 = require("./config/config");
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// Connect to MongoDB
(0, db_1.default)();
// Routes
app.get('/', (req, res) => res.send('API is running'));
// Error handler (for unexpected errors)
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Internal Server Error';
    res.status(status).json({ message });
});
app.listen(config_1.PORT, () => console.log(`Server running on port ${config_1.PORT}`));
