let bodyColors = [
    "brown",
    "darkbrown",
    "light",
    "pale",
    "tan"
];

let bodyColorIndex = 0;

function updateBody(){ 
    let color =
     bodyColors[bodyColorIndex]; 

     document.getElementById("body").src = 
     "assets/Body-20260601T061014Z-3-001/Body/body_" + color + ".png"; 

     document.getElementById("bodyColorText").textContent = color;
     }
     
function nextBodyColor(){ 
       
     bodyColorIndex++;

         if(bodyColorIndex >= bodyColors.length){ 
            bodyColorIndex = 0; 
        } 
        
        updateBody();
     } 
     
function prevBodyColor(){ 
   
     bodyColorIndex--;

     if(bodyColorIndex < 0){
         bodyColorIndex =
          bodyColors.length - 1; 
        } 
        updateBody(); 
    }



let eyeColors = [
    "blue",
    "pink",
    "green",
    "yellow",
    "brown",
    "black",
    "purple",
    "orange",
    "white",
    "red"
];

let eyeColorIndex = 0;

function updateEyes(){ 
    let color =
     eyeColors[eyeColorIndex]; 

     document.getElementById("eyes").src = 
     "assets/Eyes-20260601T061135Z-3-001/Eyes/eyes_" + color + ".png"; 

     document.getElementById("eyeColorText").textContent = color;
     }
     
function nextEyeColor(){ 
        eyeColorIndex++;

         if(eyeColorIndex >= eyeColors.length){ 
            eyeColorIndex = 0; 
        } 
        
        updateEyes();
     } 
     
function prevEyeColor(){ 
    eyeColorIndex--;
     if(eyeColorIndex < 0){
         eyeColorIndex =
          eyeColors.length - 1; 
        } 
        updateEyes(); 
    }


let hairModel = 1;

let hairColors = [
    "blue",
    "pink",
    "green",
    "yellow",
    "brown",
    "black",
    "purple",
    "orange",
    "white",
    "red"
];

let colorIndex = 0;

function updateHair(){
    
    let color =
    hairColors[colorIndex];

    document.getElementById("hair").src =
    "assets/Hair-20260601T061212Z-3-001/Hair/Hair" + hairModel + "/hair" + hairModel +"_" + color + ".png";
    
    document.getElementById("hairModelText").textContent = "Hair" + hairModel;

    document.getElementById("hairColorText").textContent = color;
}

function nextHair(){

    hairModel++;

    if(hairModel > 9){
        hairModel = 1;
    }

    updateHair();
}

function prevHair(){

    hairModel--;

    if(hairModel < 1){
        hairModel = 9;
    }

    updateHair();
}

function nextHairColor(){

    colorIndex++;

    if(colorIndex >= hairColors.length){
        colorIndex = 0;
    }

    updateHair();
}

function prevHairColor(){

    colorIndex--;

    if(colorIndex < 0){
        colorIndex =
        hairColors.length - 1;
    }


    updateHair();
}

let clothingMode = 0;
// 0 = Dress
// 1 = Shirt & Pants

function updateClothingMode(){

    if(clothingMode === 0){

        document.getElementById("dress").style.display = "block";
        document.getElementById("shirt").style.display = "none";
        document.getElementById("pants").style.display = "none";
        document.getElementById("clothingModeText").textContent =
        "Dress";
    }


    else{
        document.getElementById("dress").style.display = "none";
        document.getElementById("shirt").style.display = "block";
        document.getElementById("pants").style.display = "block";
        document.getElementById("clothingModeText").textContent =
        "Shirt & Pants";
    }
}

function nextClothingMode(){

    clothingMode++;

    if(clothingMode > 1){
        clothingMode = 0;
    }

    updateClothingMode();
}

function prevClothingMode(){

    clothingMode--;

    if(clothingMode < 0){
        clothingMode = 1;
    }

    updateClothingMode();
}

let shirtModel = 1;

let shirtColors = [
    "blue",
    "pink",
    "green",
    "yellow",
    "brown",
    "black",
    "purple",
    "orange",
    "white",
    "red"
];

let shirtColorIndex = 0;

function updateShirt(){

    let color =
    shirtColors[shirtColorIndex];

    document.getElementById("shirt").src =
    "assets/Shirt-20260601T061305Z-3-001/Shirt/Shirt" + shirtModel + "/shirt" + shirtModel + "_" + color + ".png";

    document.getElementById("shirtModelText").textContent =
    "Shirt" + shirtModel;

    document.getElementById("shirtColorText").textContent =
    color;
}

function nextShirt(){

    shirtModel++;

    if(shirtModel > 2){
        shirtModel = 1;
    }
    updateShirt();
}

function prevShirt(){

    shirtModel--;

    if(shirtModel < 1){
        shirtModel = 2;
    }
    
    updateShirt();
}

function nextShirtColor(){

    shirtColorIndex++;

    if(shirtColorIndex >= shirtColors.length){

        shirtColorIndex = 0;
    }

    updateShirt();
}

function prevShirtColor(){

    shirtColorIndex--;

    if(shirtColorIndex < 0){
        shirtColorIndex =
        shirtColors.length - 1;
    }

    updateShirt();
}

let pantsModel = 1;

let pantsColors = [
    "blue",
    "pink",
    "green",
    "yellow",
    "brown",
    "black",
    "purple",
    "orange",
    "white",
    "red"
];

let pantsColorIndex = 0;

function updatePants(){

    let color =
    pantsColors[pantsColorIndex];

    document.getElementById("pants").src =
    "assets/Pants-20260601T061231Z-3-001/Pants/Pants" + pantsModel + "/pants" + pantsModel + "_" + color + ".png";

    document.getElementById("pantsModelText").textContent =
    "Pants" + pantsModel;

    document.getElementById("pantsColorText").textContent =
    color;
}

function nextPants(){

    pantsModel++;

    if(pantsModel > 2){
        pantsModel = 1;
    }
    updatePants();
}

function prevPants(){

    pantsModel--;

    if(pantsModel < 1){
        pantsModel = 2;
    }
    
    updatePants();
}

function nextPantsColor(){

    pantsColorIndex++;

    if(pantsColorIndex >= pantsColors.length){

        pantsColorIndex = 0;
    }

    updatePants();
}

function prevPantsColor(){

    pantsColorIndex--;

    if(pantsColorIndex < 0){
        pantsColorIndex =
        pantsColors.length - 1;
    }

    updatePants();
}

let dressModel = 1;

let dressColors = [
    "blue",
    "pink",
    "green",
    "yellow",
    "brown",
    "black",
    "purple",
    "orange",
    "white",
    "red"
];

let dressColorIndex = 0;

function updateDress(){

    let color =
    dressColors[dressColorIndex];

    let path =
    "assets/Dress-20260602T134208Z-3-001/Dress/Dress" + dressModel + "/dress" + dressModel + "_" + color + ".png";

    console.log(path);

    document.getElementById("dress").src = path;

    document.getElementById("dressModelText").textContent =
    "Dress" + dressModel;

    document.getElementById("dressColorText").textContent =
    color;
}

function nextDress(){

    dressModel++;

    if(dressModel > 3){
        dressModel = 1;
    }
    updateDress();
}

function prevDress(){

    dressModel--;

    if(dressModel < 1){
        dressModel = 3;
    }
    
    updateDress();
}

function nextDressColor(){

    dressColorIndex++;

    if(dressColorIndex >= dressColors.length){
       dressColorIndex = 0;
    }

    updateDress();
}

function prevDressColor(){

    dressColorIndex--;

    if(dressColorIndex < 0){
        dressColorIndex =
        dressColors.length - 1;
    }

    updateDress();
}

let shoesModel = 1;

let shoesColors = [
    "blue",
    "pink",
    "green",
    "yellow",
    "brown",
    "black",
    "purple",
    "orange",
    "white",
    "red"
];

let shoesColorIndex = 0;

function updateShoes(){
    
    let color =
    shoesColors[shoesColorIndex];

    document.getElementById("shoes").src =
    "assets/Shoes-20260601T061323Z-3-001/Shoes/Shoes" + shoesModel + "/shoes" + shoesModel +"_" + color + ".png";
    
    document.getElementById("shoesModelText").textContent = "Shoes" + shoesModel;

    document.getElementById("shoesColorText").textContent = color;
}

function nextShoes(){

    shoesModel++;

    if(shoesModel > 4){
        shoesModel = 1;
    }

    updateShoes();
}

function prevShoes(){

    shoesModel--;

    if(shoesModel < 1){
        shoesModel = 4;
    }

    updateShoes();
}

function nextShoesColor(){

    shoesColorIndex++;

    if(shoesColorIndex >= shoesColors.length){
        shoesColorIndex = 0;
    }

    updateShoes();
}

function prevShoesColor(){

    shoesColorIndex--;

    if(shoesColorIndex < 0){
        shoesColorIndex =
        shoesColors.length - 1;
    }


    updateShoes();
}

let socksModel = 1; 

let socksColors = { 
    1: ["blue","pink","green","yellow","brown","black","purple","orange","white","red"],
     2: ["blue","pink","green","yellow","brown","black","purple","orange","white","red"], 
     3: ["blue","pink","green","yellow","brown","black","purple","orange","white","red"],
      4: ["white","black"] 
    };
    
    let socksColorIndex = 0;


function updateSocks(){ 
    let currentColors = 
    socksColors[socksModel]; 
    
    let color = 
    currentColors[socksColorIndex]; 
    
    document.getElementById("socks").src = 
    "assets/Socks-20260601T061345Z-3-001/Socks/Socks" + socksModel + "/socks" + socksModel + "_" + color + ".png";
    
    document.getElementById("socksModelText").textContent = "Socks" + socksModel; 
    
    document.getElementById("socksColorText").textContent = color;
 }

 function nextSocks(){ 
    
    socksModel++; 
    
    if(socksModel > 4){ 
        socksModel = 1; 
    } 
    
    socksColorIndex = 0; 
    
    updateSocks();
 }

 function prevSocks(){ 

    socksModel--; 
    
    if(socksModel < 1){
         socksModel = 4;
        }
         socksColorIndex = 0;
         
  updateSocks();
        
}

function nextSocksColor(){
    
    let currentColors =
     socksColors[socksModel]; 
     
     socksColorIndex++;
     
     if(socksColorIndex >= currentColors.length){ 
        socksColorIndex = 0;
     } 
     
     updateSocks(); 
}

function prevSocksColor(){ 
    
    let currentColors =
     socksColors[socksModel];
     
     socksColorIndex--; 
     
     if(socksColorIndex < 0){
         socksColorIndex =
          currentColors.length - 1;
         } 
         
         updateSocks(); 
        
}

function updateCharacterName(){

    let name=
    document.getElementById("characterName").value;

    if(name == ""){

        name = "My Character";
    }
    document.getElementById("characterTitle").textContent =
    name;
}

function saveCharacter(){
    
    let name =
    document.getElementById("characterName").value;

    if(name == ""){

        name  = "MyCharacter";
    }
    html2canvas(
        document.getElementById("character")
    ).then(function(canvas){

        let link =
        document.createElement("a");

        link.download =
        name + ".png";

        link.href =
        canvas.toDataURL();

        link.click();
    });
}


updateHair();
updateEyes();
updateBody();
updateClothingMode();
updateShirt();
updatePants();
updateDress();
updateShoes();
updateSocks();
