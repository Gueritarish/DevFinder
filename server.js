const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.sendFile( 'main.html', {root: './'});
});

app.use(
    express.static('./')
);
app.listen(PORT = 8080, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});