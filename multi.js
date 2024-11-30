// // querySelectorAll()
// // Returns a NodeList

// const listItems = document.querySelectorAll(".item");
// console.log(listItems);

// // Access elements by index
// console.log(listItems[1].innerText);

// // Setting a color for specific element
// listItems[1].style.color = "red";

// // We can use forEach() on a NodeList
// listItems.forEach((item, index) => {
//     item.style.color = "red";

//     if (index === 1) {
//         item.remove();
//     }
//     if (index === 0) {
//         item.innerHTML = `Oranges
//         <button class="item-remove btn-link text-red">
//          <i class="fa-solid fa-xmark"></i>
//         </button> `
//     }
// });

// // getElementsByClassName()
// // Returns an HTMLCollection

// const listItems2 = document.getElementsByClassName("item");
// console.log(listItems2[2].innerText);

// const listArray = Array.from(listItems2);

// listArray.forEach((item) => {
//     console.log(item.innerText);
// })

// // getElementsByTagName()



// const listItems3 = document.getElementsByTagName("li");
// console.log(listItems3[0].innerText);

// // create html tag using javascript
// const div = document.createElement("div");
// div.className = "extra div";
// div.id = "extra div";
// div.setAttribute("title", "abcde");
// // div.innerText = "hello world";

// //craete node text
// const text = document.createTextNode('Hello India');
// div.appendChild(text);
// document.querySelector('ul').appendChild(div);
// console.log(div);

// // add list 

function createList(item) {
    const li = document.createElement('li');
    li.innerHTML = `${item}
        <button class="remove-item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
        </button>`;
    document.querySelector('.items').appendChild(li);
}

createList("cherry");

function createNewList(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);
}

createNewList("blueberry");



function createNew(item) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');

    li.appendChild(button);

    document.querySelector('.items').appendChild(li);


}
function createButton(classes) {
    const button = document.createElement("button");
    button.className = classes;

    const icon = createIcon("fa-solid fa-xmark");
    button.appendChild(icon);

    return button;
}

function createIcon(classes) {
    const icon = document.createElement("i");
    icon.className = classes;

    return icon;
}
createNew("kiwi");