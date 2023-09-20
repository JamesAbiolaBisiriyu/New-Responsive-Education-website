//change navbar on scroll

window.addEventListener( 'scroll',() => {
  document.querySelector('nav').classList.toggle
  ('window-scroll', window.scrollY > 0)
})

// show and hide FAQ answers

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');

    // //changes icon

    const icon = faq.querySelector('.faq-icon i');
    if(icon.className =='fa-solid fa-plus'){
      icon.className = "fa-solid fa-minus";
    }
    else
     {
      icon.className = "fa-solid fa-plus";
    }

  })
})