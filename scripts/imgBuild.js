const filecopy = require('filecopy');

filecopy('src/**/img/*.txt', 'dist/img', {});
console.log('書き出しが完了しました');
