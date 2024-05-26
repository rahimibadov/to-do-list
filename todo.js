//&                             todo list



    //^ elementlere catiriq
let inputText = document.querySelector('#inputText');
let addToDoButton = document.querySelector('#addToDo');
let clearToDo = document.querySelector('#clearToDo');
let ToDoContainer = document.querySelector('#toDoContainer');
    //^ funksionalliga girish
addToDoButton.addEventListener('click',(e)=>{           //? click edende funksiya ishletsin..ne?
    let paraghraph = document.createElement('p');       //? bunu etsin-deyisehn teyin edirik = CREATEELEMENT-metoddur -element yaratsin--hansi tag olsu? p deyirik
    paraghraph.classList.add("paraghraph-styling");     //? ADD buttonuna basanda createElementle paraqraf acilacaq. CLASSLIST.ADD- metoddur- classlist add et elave et-yeni element yarat ve class ver..istifadeci yeni element yazanda bu classi cekib  dusecek..moterizenin icindeki bu ad (paraghraph-styling) css dekidir
    ToDoContainer.appendChild(paraghraph);              //? .APPENCHILD-metoddur evvel yazi yazilib add duymesine vuruldu create element olundu ve class.add le hemin class versiyada rengli ves hemin yazini bura getirir.amma hara? yerin teyin etmemisik. p ni hara atsin? inidi ise APPENCHILD yeni usaq elave et-monitorun icine tulla todocontainere
    paraghraph.innerHTML = inputText.value;             //? paragrafla htmlya yazdir-innerHTML ile- input text value ye berabet et--istifadecinin yazdigi deyer ekranda gorunsun 
    e.preventDefault();                                 //? renderin qarshisini alir
    inputText.value = "";                               //? yazi yazandan sonra icini boshaldir

   //^ monitora dusen metne 1 defe click ettikde uzerinden xett cekir...funksiya icinde funksiya aciriq
paraghraph.addEventListener("click", ()=>{             //? paraqrafa yeni yazilan soze click edende ne olsun?
    paraghraph.style.textDecoration = "line-through";   //? asagi dusen yaziya 1 defe click edende uzerinden xett ceksin..css emeliyyatidir
    paraghraph.style.textDecorationColor = 'orange'
});

    //^ yaziya 2 defe click ettikde element silinir    
paraghraph.addEventListener("dblclick", ()=>{      //? 2 defe click edende.....
    ToDoContainer.removeChild(paraghraph);          //? .... REMOVE CHILDi silir(sadece paraqrafi silsin)//appenchild elave etti removechild sildi
});

  //^ qirmizi ya CLEAR click ettikde butun elementleri silsin
clearToDo.addEventListener("click", ()=>{          //? duymeye vuranda...
    paraghraph.remove();                            //? REMOVE hamisini sil...
});

});
 
//todo CREATEELEMENT METODU YENI TAG ("P") YARADIR VE KEYBOARDDAN ENTER DUYMESINI DESTEKLIYIR-ENTERE VURANDA P YARANIR