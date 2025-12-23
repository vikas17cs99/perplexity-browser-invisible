const readline = require('readline');

function askProvider() {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    console.log('\nChoose AI Provider:');
    console.log('1) ChatGPT');
    console.log('2) Gemini');
    console.log('3) Perplexity');

    rl.question('\nEnter choice (1/2/3): ', (answer) => {
      rl.close();

      switch (answer.trim()) {
        case '1':
          resolve('chatgpt');
          break;
        case '2':
          resolve('gemini');
          break;
        case '3':
          resolve('perplexity');
          break;
        default:
          console.log('Invalid choice. Defaulting to Perplexity.');
          resolve('perplexity');
      }
    });
  });
}

module.exports = { askProvider };
