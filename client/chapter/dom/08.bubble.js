/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click', () => {
  console.log('%c section', 'color:orange');
});

article.addEventListener('click', () => {
  console.log('%c article', 'color:orange');
});

p.addEventListener('click', () => {
  console.log('%c p', 'color:orange');
});

/* 캡처링 ----------------------------------------------------------------- */
