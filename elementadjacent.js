// function insertelement(){
//     const filter = document.querySelector('.filter')

//     const h1 = document.createElement('h1');
//     h1.textContent = "I like JS";

//     filter.insertAdjacentElement('beforeend', h1);
// }

// insertelement();

// function inserttext(){
//     const text = document.querySelector('li:first-child');

//     text.insertAdjacentText('beforeend','i like JS')
// }
// inserttext();


// insertAdjacentHTML example
// function insertHtml() {
//     const clearBtn = document.querySelector('#clear');

//     clearBtn.insertAdjacentHTML('afterbegin', '<h2>insertAdjacentHTML</h2>');
//   }

// insertHtml();

// insertBefore Example
function insertBeforeItem() {
    const ul = document.querySelector('ul');



    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const btn = document.querySelector("button");
    btn.className = "remove-item btn-link text-red";

    const icon = document.querySelector("i");
    icon.className = "fa-solid fa-xmark";

    btn.appendChild(icon);
    li.appendChild(btn);


    const thirdItem = document.querySelector('li:nth-child(3)');

    ul.insertBefore(li, thirdItem);
}

insertBeforeItem();