const express = require('express');

const feature1 = require('./feature1');

const app = express();

app.listen(3000, () =>
    console.log('Example app listening on port 3000!'),
);

app.get('/', (req, res) => {
  res.send(`Hello ${feature1.registerName(req)}`);
});

app.get('/feature/version', (req, res) => {
    const featureVersion = process.env.FEATURE_VERSION;
    console.log(featureVersion);
    res.send(!!featureVersion ? featureVersion : 'UNDEFINED');
});
