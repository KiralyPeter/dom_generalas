

const ul = document.querySelector("#lista");

const gyumolcsok = [
    "szilva", 
    "alma", 
    "körte", 
    "barack", 
    "eper", 
    "banán"
];

// 1db bejövő paraméter esetén nem szükséges zárójel a NÉVTELEN függvény bejövő paraméteréhez
gyumolcsok.forEach( (gyumolcs) => {
    // console.log(gyumolcs); -- csak teszteléshez kellett...
    
    var li = document.createElement("li");
    li.textContent = gyumolcs;
    ul.append(li);
});

// li elemet generálása

