document.addEventListener('DOMContentLoaded', function() {
  console.log('🐕 Woof! Welcome to Dogemone! Time to get meme-ing!');
  document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
      console.log('You clicked a button! Much wow! 🚀🐕');
    });
  });
});
