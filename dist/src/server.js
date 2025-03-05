"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const applicantRoute_1 = __importDefault(require("../routes/applicantRoute"));
const express_list_endpoints_1 = __importDefault(require("express-list-endpoints"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// Enable CORS
app.use((0, cors_1.default)());
// Middleware to parse JSON
app.use(express_1.default.json());
app.get('/test', (req, res) => {
    res.send('Test route working!');
});
// Use the index route
app.use('/', applicantRoute_1.default);
// List all registered routes
console.log((0, express_list_endpoints_1.default)(app));
// Start Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
