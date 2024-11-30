
// replaceWith() Method
function replaceFistItem(){
    const fistitem = document.querySelector('li:first-child');
    // console.log(fistitem);
    const li = document.createElement('li');
    li.textContent = "Fisrt Item REPLACE";
    fistitem.replaceWith(li);
}
replaceFistItem();

// OuterHTML Property

function replaceSecond(){
    const li = document.querySelector('li:nth-child(2)');
    li.outerHTML ='<li>Replace second item</li>';

}
replaceSecond();


// Replace All Items


// function replaceAll(){
//     const lis = document.querySelectorAll("li");

//     lis.forEach((item,index) => {
//         item.outerHTML = '<li>Replace all</li>';
//         if(index === 1){
//             item.innerHTML = 'second item';
//         }
//         else{
//             item.innerHTML = 'Repalce All';
//         }
//     });
// }

// replaceAll();


