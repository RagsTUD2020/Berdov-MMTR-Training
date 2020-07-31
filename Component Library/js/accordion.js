let item1 = {
    title: "Заголовок1",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
}

let item2 = {
    title: "Заголовок2",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
}

let item3 = {
    title: "Заголовок3",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
}



// function Accordion(options) {
//     let elem;
//     let elems = [];

//     getElem = () => {
//         if (!elem) render();
//         return elem;
//     }

    

//     function render() {
//         let root = document.createElement('div');
        
//         options.items.forEach(e => {
//             elem = document.createElement('div');
//             root.appendChild(elem);
//             elem.className = "accordion-item";
//             const itemTitle = document.createElement('div');
//             itemTitle.className = "accordion__item-header";
//             itemTitle.style.cursor = "pointer";
//             itemTitle.textContent = e.title;
//             elem.appendChild(itemTitle);
//             const itemContent = document.createElement('div');
//             itemContent.className = "accordion__item-content";
//             itemContent.style.display = "none";
//             itemContent.textContent = e.content;
//             elem.appendChild(itemContent);
//             elems.push(elem);
//         });
        
    
//         elem.onmousedown = function() {
//           return false;
//         };

//     }


    
//     openContent = (el) => {
//             console.log(el);
//             console.log(elems);
//         elems.forEach(e => {
//             console.log(e);
//             console.log(e.lastChild);
//             e.lastChild.style.display = "none";
//         });
//         const item = el.closest(".accordion__item");
//         console.log(item);
//         item.lastChild.style.display = "block";
        
        
    
//     }
    
//     this.openContent = openContent;
//     this.getElem = getElem;


//     elem.onclick = openContent(getElem());


// };

// let accordion = new Accordion ({
//     items: [item1, item2, item3]
// });

// window.onload = () => {
//     document.body.appendChild(accordion.getElem());
// }

addAccordion = () => {
    document.querySelectorAll(".accordion-container").forEach(root => {
        root.append(accordion.content.cloneNode(true));
        document.body.append(root);

        document.querySelectorAll(".accordion__item-header").forEach(e => {
            console.log(e);
            e.addEventListener('click', function(e){
                openContent(e.target);
            });
        });
    });
    
    
}

openContent = (el) => {
    console.log(el);
    document.querySelectorAll(".accordion__item").forEach(e => {
        console.log(e);
        console.log(e.lastChild);
        e.lastChild.style.display = "none";
    });
    const item = el.closest(".accordion__item");
    item.lastChild.style.display = "block";

}

document.querySelectorAll(".accordion__item-header").forEach(e => {
    console.log(e);
    e.addEventListener('click', function(e){
        openContent(e.target);
    });
});

window.onload = addAccordion();

