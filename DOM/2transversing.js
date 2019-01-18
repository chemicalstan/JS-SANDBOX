
    // Tranversing the DOM simply signifies moving up and down the DOM
    let val;
    const list = document.querySelector('ul');
    const listItem = document.querySelector('li.collection-item:first-child');
    val = list;
    val = listItem;

    // GET NODE Using childNodes
    // this gives us various node types which are as shown below

    // 1-Element
    // 2-Attribute (depricated)
    // 3-Text Node
    // 8-Comment
    // 9-Document itself
    // 10-Doctype
    val = list.childNodes[0];
    val = list.childNodes[0].nodeName;
    val = list.childNodes[0].nodeType; //Text Node
    val = list.childNodes[1].nodeType; //Element
    val = list.childNodes[3].nodeType; //Comment


    // GET CHILDREN ELEMENT NODES
    // This gives us only the element node. This is the one we mostly
    // use in js

    val = list.children[0];
    list.children[0].textContent = 'list itemised';

    // GET CHILDREN CHILDREN
    val = list.children[1].children[0];
    list.children[1].children[0].id =  'test-id';
    
    // FIRST CHILD
    val = list.firstChild; //This returns the first node(text node)
    val = list.firstElementChild; //This returns the first element node.

    //LAST CHILD
    val = list.lastChild;
    val = list.lastElementChild;

    // CHILD ELEMENT COUNT
    val = list.childElementCount;

    //GETTING PARENT NODE
    val = listItem.parentNode;
    val = listItem.parentElement;
    val = listItem.parentElement.parentElement;

    //GETTING NEXT SIBLING
    val = listItem.nextSibling; //this returns plus text
    val = listItem.nextElementSibling.nextElementSibling; //This returns the next element
    // GETTING THE PREVIOUS SIBLING
    val = listItem.previousSibling;
    val = listItem.previousElementSibling; //This is null because we are dealing with the first element

    console.log(val);
