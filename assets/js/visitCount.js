/**
 * 
 */
document.getElementById('current-year').textContent = new Date().getFullYear();
  
  document.addEventListener("DOMContentLoaded", function() {
    const counterEl = document.getElementById("visit-counter");
    const storageKey = 'portfolioVisitCount';
    
    let count = localStorage.getItem(storageKey);

    count = count ? parseInt(count) + 1 : 1;
    localStorage.setItem(storageKey, count);

    const formattedCount = count.toString().padStart(6, '0');
    
    counterEl.className = 'font-mono tracking-widest text-gray-400 px-2 py-1 rounded inline-flex items-center bg-gray-800/50';
    
    for (let i = 0; i < formattedCount.length; i++) {
      const digit = document.createElement('span');
      digit.className = 'block min-w-[1ch] text-center';
      digit.textContent = formattedCount[i];
      counterEl.appendChild(digit);
      
      if (i < formattedCount.length - 1) {
        const separator = document.createElement('span');
        separator.className = 'text-gray-500 mx-[0.1em]';
        separator.textContent = '|';
        counterEl.appendChild(separator);
      }
    }
  
    counterEl.classList.add('animate-pulse');

    setTimeout(() => counterEl.classList.remove('animate-pulse'), 1000);
    
    animateValue('projects-count', 0, 10, 1500);
    animateValue('experience-years', 0, 3, 1500);
    animateValue('certificates-count', 0, 15, 1500);
    animateValue('coffee-cups', 0, 500, 2000);
});

/**
 * 
 * @param {*} id 
 * @param {*} start 
 * @param {*} end 
 * @param {*} duration 
 */
function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const value = Math.floor(progress * (end - start) + start);
    obj.innerHTML = value + (id === 'coffee-cups' ? '+' : '+');
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
  
const typingElements = document.querySelectorAll('.typing-effect');

typingElements.forEach(el => {
  const text = el.textContent;
  el.textContent = '';
  
  let i = 0;
  const typing = setInterval(() => {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
      el.style.borderRight = 'none';
    }
  }, 100);
});