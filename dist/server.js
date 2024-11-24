"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const config_1 = require("./config/config");
const app_1 = __importDefault(require("./app"));
// Use routes
app_1.default.use('/api/auth', authRoutes_1.default);
app_1.default.listen(config_1.PORT, () => {
    console.log(`Server is running on port ${config_1.PORT}`);
});
