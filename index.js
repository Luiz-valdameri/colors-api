const customExpress = require('./config/customExpress')

const app = customExpress();
app.listen(8080, () => console.log('Server running on port 8080'));