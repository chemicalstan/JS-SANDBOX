let val;
    val = document;
    val = document.all;
    val = document.all.length;
    val = document.all[3];
    val = window;
    val = document.URL;
    val = document.characterSet;
    val = document.body;
    val = document.domain;
    val = document.doctype;

    val = document.forms;
    val = document.forms[0].id;
    val = document.forms[0].className;
    val = document.forms[0].method;
    val = document.forms[0].action;

    val = document.links[0].classList;
    val = document.links[0].className;

    val = document.scripts.length;
    val = document.scripts[0].getAttribute('src');

    let scripts = document.scripts;
    let scriptsArr = Array.from(scripts);

    scriptsArr.forEach(function(script){
        console.log(script.getAttribute('src'));
    });
  



console.log(val);