let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const purgeBtn = document.getElementById("purge-btn")
const ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads);
}

purgeBtn.addEventListener("click", function() {
  if (ulEl.textContent !== "") {
    ulEl.classList.add("fade-out");

    // Listen for the 'animationend' event and perform actions afterward
    ulEl.addEventListener("animationend", function() {
      ulEl.classList.remove("fade-out");

      // Use requestAnimationFrame to ensure smooth layout updates
      requestAnimationFrame(() => {
        localStorage.clear();
        myLeads = [];
        render(myLeads);
      });
    }, { once: true });
  } else {
    // Add shake animation class on error
    inputEl.classList.add("shake");
    // Remove shake animation class after the animation completes
    setTimeout(() => {
      inputEl.classList.remove("shake");
    }, 500);
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'Delete') {
    if (ulEl.textContent !== "") {
      ulEl.classList.add("fade-out");
  
      // Listen for the 'animationend' event and perform actions afterward
      ulEl.addEventListener("animationend", function() {
        ulEl.classList.remove("fade-out");
  
        // Use requestAnimationFrame to ensure smooth layout updates
        requestAnimationFrame(() => {
          localStorage.clear();
          myLeads = [];
          render(myLeads);
        });
      }, { once: true });
    } else {
      // Add shake animation class on error
      inputEl.classList.add("shake");
      // Remove shake animation class after the animation completes
      setTimeout(() => {
        inputEl.classList.remove("shake");
      }, 500);
    }
  }
});

inputBtn.addEventListener("click", function() {
  if (inputEl.value.trim() !== "") {
    myLeads.push(inputEl.value.trim());
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads);
  } else {
    // Add shake animation class on error
    inputEl.classList.add("shake");
    // Remove shake animation class after the animation completes
    setTimeout(() => {
      inputEl.classList.remove("shake");
    }, 500);
  }
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    if (inputEl.value.trim() !== "") {
      myLeads.push(inputEl.value.trim());
      inputEl.value = "";
      render(myLeads);
    } else {
      // Add shake animation class on error
      inputEl.classList.add("shake");
      // Remove shake animation class after the animation completes
      setTimeout(() => {
        inputEl.classList.remove("shake");
      }, 500);
    }
  }
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    const lead = leads[i];
    
    // Check if the lead starts with "https://"
    const link = lead.startsWith('https://') ? lead : `https://${lead}`;

    listItems += `
      <li class="anchor-list">
        <a class="custom-link" target='_blank' href='${link}'>
          ${lead}
        </a>
      </li>
    `;
  }
  ulEl.innerHTML = listItems;

  // Add event listener for arrow key navigation
  document.addEventListener('keydown', handleArrowNavigation);
}

function handleArrowNavigation(event) {
  const currentActive = document.activeElement;
  const links = document.querySelectorAll('.custom-link');

  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    event.preventDefault();

    let index = Array.from(links).indexOf(currentActive);

    if (event.key === 'ArrowUp') {
      index = (index - 1 + links.length) % links.length;
    } else if (event.key === 'ArrowDown') {
      index = (index + 1) % links.length;
    }

    // Remove the previously selected class
    links.forEach(link => link.classList.remove('selected-link' , 'fw-bold' , 'text-dark'));

    // Add the selected class to the new link
    links[index].classList.add('selected-link', 'fw-bold', 'text-dark');

    links[index].focus();
  }
}

    const phrases = ['Link Goes Here!', '¡Enlace va aquí', 'Link va qui!', 'Link geht hier hin!', 'Länken går här!', 'リンクはこちらです', 'Ссылка идет сюда!', 'Link idzie tutaj!', 'Ο σύνδεσμος πηγαίνει εδώ!', 'Le lien va ici!', ''];
    let index = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < phrases[index].length) {
        inputEl.placeholder += phrases[index][charIndex];
        charIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 500);
      }
    }

    function erase() {
      if (charIndex > 0) {
        inputEl.placeholder = phrases[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50);
      } else {
        index = (index + 1) % phrases.length;
        setTimeout(type, 500);
      }
    }
    type();

 const cursorImagePath = 'images/cursor-click.svg';
 const defaultCursor = 'images/cursor.svg'

 function changeCursorOnClick() {
   document.body.style.cursor = `url(${cursorImagePath}), auto`;
   setTimeout(() => {
    document.body.style.cursor = `url(${defaultCursor}), auto`;
   }, 100);
 }

 document.addEventListener('click', changeCursorOnClick);

 document.addEventListener('DOMContentLoaded', function() {
    const fadeInElement = document.querySelector('.fade-in');
    fadeInElement.classList.add('fade-in-active');
  });

  document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        inputEl.value = "";
    }
};


// Add an event listener for the keydown event on the document
document.addEventListener('keydown', function (event) {
  // Check if the pressed key is alphanumeric
  if (
    (event.key >= 'a' && event.key <= 'z') || // A-Z
    (event.key >= '0' && event.key <= '9') || // 0-9
    (event.key >= 'Numpad0' && event.key <= 'Numpad9') // Numpad 0-9
  ) {
    // Set focus on the input field
    inputEl.focus();
  }
});