// đóng mở menu moblie 
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.header-menu-toggle');

menuToggle.addEventListener('click', function (){
  var isClosed = header.clientHeight === 46;
  if(isClosed) {
    header.classList.add('isOpenMenu');
  }
  else {
    header.classList.remove('isOpenMenu');
  }
})

const menuItems = document.querySelectorAll('.menu-item-link');

for(var i=0; i<menuItems.length; i++){
  const menuItem = menuItems[i];
  menuItem.addEventListener('click', function (event){
    const isParentMenu = this.nextElementSibling  && this.nextElementSibling.classList.contains('menu-child');

    if(isParentMenu)
    {
      event.preventDefault();
    }
    else {
      header.classList.remove('isOpenMenu');

    }
  })

  
}

// Slide show tự động chạy sau 4s
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide-item");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}


// Đóng mở giỏ hàng
const buyBtns = document.querySelectorAll('.buy-btn');

const modal = document.querySelector('.modal');

const modalContainer = document.querySelector('.modal-container');

const removeModal = document.querySelector('.modal-close');

const closeBtn = document.querySelector('.modal-clode-btn');

function closeModal () {
  modal.classList.remove('isActiveModal');
}

function showBuyTickets() {
  modal.classList.add('isActiveModal');
}

removeModal.addEventListener('click', closeModal);

closeBtn.addEventListener('click', closeModal);

for(const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', showBuyTickets);
}

modal.addEventListener('click',closeModal);


modalContainer.addEventListener('click', function(even) {
  even.stopPropagation()
})
