// server.js
const express = require('express');
const { createSSRApp } from 'vue';
const { renderToString } from '@vue/server-renderer';

const app = express();

app.get('/', async (req, res) => {
  const vueApp = createSSRApp({
    data() {
      return {
        message: 'Vue.jsを使って文字を表示させる例です。',
      };
    },
    template: '<div>{{ message }}</div>',
  });

  try {
    const html = await renderToString(vueApp);

    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vue.js Example</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script type="module" src="client.js"></script>
      </body>
      </html>
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
