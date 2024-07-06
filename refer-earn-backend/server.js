const express = require('express');
const bodyParser = require('body-parser');
const referralRoutes = require('./routes/referralRoutes');
const errorHandler = require('./middlewares/errorHandler');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use('/api/referrals', referralRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
