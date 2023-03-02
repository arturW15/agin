const openModal = document.querySelector('.button');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.buttonclose');
openModal.addEventListener('click', () => {
    modal.showModal();
})
closeModal.addEventListener('click', () => {
    modal.close();
})

modal.addEventListener('click', (e) => {
    console.log(e.target)
    if(e.target === modal) modal.close();
})

var hername;
function fugive(el) {
  hername = el.value;
}

function fuchek() {
  console.log(hername);
  if (hername == 'Аліна' || hername == 'аліна' || hername == 'Ангеліна' || hername == 'ангеліна' || hername == 'Аліна Єрмійчук') {
  window.location = 'https://arturw15.github.io/onemore/';
  }
  else if (hername == 'Денис') {
     document.write('Ти жартуєш?');
  }
  else {
     document.write('Вибачте, але ваше ім’я не підійшло');
  }
}
