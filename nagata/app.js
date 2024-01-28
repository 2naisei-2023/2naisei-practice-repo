// app.js
import { createSSRApp } from 'vue';
import { renderToString } from '@vue/server-renderer';

const app = createSSRApp({
  data() {
    return {
      message: 'Vue.jsを使って文字を表示させる例です。'
    };
  },
  template: '<div>{{ message }}</div>'
});

// サーバーサイドでHTMLに変換
renderToString(app).then((html) => {
  console.log(html);
}).catch((error) => {
  console.error(error);
});
