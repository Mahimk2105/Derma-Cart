 const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Moisturizer added to cart!');
      });
    });

  
    
    const toggleBtn = document.getElementById('moisturizer-toggle');
    const hiddenCards = document.querySelectorAll('#moisturizer-products .hidden');
    let expanded = false;

    toggleBtn.addEventListener('click', () => {
      hiddenCards.forEach(card => {
        card.style.display = expanded ? 'none' : 'block';
      });
      expanded = !expanded;
      toggleBtn.textContent = expanded ? "Show Less" : "View All Moisturizers";
    });