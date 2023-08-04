const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customer', (req, res) => {
    res.send([
        {
        'id': 1,
        'image': 'https://placeimg.com/64/64/any',
        'name': '백수정',
        'birthday': '961222',
        'gender': '남자',
        'job': '대학생'
      },
      {
        'id': 2,
        'image': 'https://placeimg.com/64/64/any',
        'name': '이도현',
        'birthday': '961222',
        'gender': '남자',
        'job': '대학생'
      },
      {
        'id': 3,
        'image': 'https://placeimg.com/64/64/any',
        'name': '백수정',
        'birthday': '961222',
        'gender': '남자',
        'job': '대학생'
      },
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
