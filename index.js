
let FrutasContainer = [];
let LaticíniosContainer = [];
let CongeladosContainer = [];
let DocesContainer = [];
let LegumesContainer = [];
let OutrosContainer = [];
let Food = '';
let Category = document.getElementById('Category');
let Frutas = document.getElementById('Frutas');
let Laticínios = document.getElementById('Laticínios');
let Congelados = document.getElementById('Congelados');
let Doces = document.getElementById('Doces');
let Legumes = document.getElementById('Legumes')
let Outros = document.getElementById('Outros')
let Categoryselect;
function Createinput() {
    let input = document.createElement("input"); 
    input.id = 'alimento';
    const containerDiv = document.getElementById("container");
    containerDiv.insertBefore(input, containerDiv.children[2]);

}
function GetValue(){
     Food = document.getElementById('alimento').value
     Question()
};
function Question(){
     Category.textContent ='Em qual categoria essa comida se encaixa?'
     createCategorySelect()
};
function createCategorySelect(){
    Categoryselect = document.createElement("select");
  Categoryselect.id = 'Categoryselect';
  Category.appendChild(Categoryselect);
  CreateCategoryOptions();

  }
function CreateCategoryOptions(){
    let optionDefault = document.createElement("option");
    optionDefault.value = '';
    optionDefault.textContent = 'Selecione uma categoria';
    Categoryselect.appendChild(optionDefault);

    let optionFrutas = document.createElement("option");
    optionFrutas.value = 'Frutas';
    optionFrutas.textContent = 'Frutas'; 
  
    Categoryselect.appendChild(optionFrutas);
    
    let optionLaticínios = document.createElement("option");
    optionLaticínios.value = 'Laticínios';
    optionLaticínios.textContent = 'Laticínios';
    
    Categoryselect.appendChild(optionLaticínios);

    let optionCongelados = document.createElement("option");
    optionCongelados.value = 'Congelados';
    optionCongelados.textContent = 'Congelados';
   
    Categoryselect.appendChild(optionCongelados);

    let optionDoces = document.createElement("option");
    optionDoces.value = 'Doces';
    optionDoces.textContent = 'Doces';
   
    Categoryselect.appendChild(optionDoces);

    let optionLegumes = document.createElement("option");
    optionLegumes.value = 'Legumes';
    optionLegumes.textContent = 'Legumes';

    Categoryselect.appendChild(optionLegumes);

    let optionOutros = document.createElement("option");
    optionOutros.value = 'Outros';
    optionOutros.textContent = 'Outros'
    Categoryselect.appendChild(optionOutros);

    
    Categoryselect.addEventListener('change', function() {
        handleCategoryChange(this.value);
    });
}
function handleCategoryChange(selectedCategory) {
    switch (selectedCategory) {
        case 'Frutas':
            FrutasContainer.push(Food);
            break;
        case 'Laticínios':
            LaticíniosContainer.push(Food);
            break;
        case 'Congelados':
            CongeladosContainer.push(Food);
            break;
        case 'Doces':
            DocesContainer.push(Food);
            break;
        case 'Legumes':
            LegumesContainer.push(Food);
            break;
        case 'Outros':
            OutrosContainer.push(Food);
            break;
        default:
            break;
    }
    deleteCategoryselect();
    displayArrays();
    Category.textContent =''
}
function deleteCategoryselect(){
  let el = document.getElementById('Categoryselect')
  if (!el)
    return
  el.parentElement.removeChild(el);
};
function displayArrays(){
Frutas.textContent = `Frutas: ${FrutasContainer}`
Laticínios.textContent = `Laticínios: ${LaticíniosContainer}`
Congelados.textContent = `Congelados: ${CongeladosContainer}`
Doces.textContent = `Doces: ${DocesContainer}`
Legumes.textContent = `Legumes: ${LegumesContainer}`
Outros.textContent = `Outros: ${OutrosContainer}`
}
function RemoveElement() {
    let el = document.getElementById('alimento')
    if (!el)
      return
    el.parentElement.removeChild(el)
  }
function DeletelastElementOfArrays(){
    if (FrutasContainer.length > 0) {
        FrutasContainer.pop();
    } else if (LaticíniosContainer.length > 0) {
        LaticíniosContainer.pop();
    } else if (CongeladosContainer.length > 0) {
        CongeladosContainer.pop();
    } else if (DocesContainer.length > 0) {
        DocesContainer.pop();
    } else if (LegumesContainer.length > 0) {
        LegumesContainer.pop();
    } else if (OutrosContainer.length > 0) {
        OutrosContainer.pop();
    }else{
     alert('Não foi possível encontrar o item dentro da lista!')
    };
    displayArrays();
};