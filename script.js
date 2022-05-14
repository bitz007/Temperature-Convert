const calculateTemp = () =>
{
let numberTemp= document.getElementById('temp').value;
 let formatSelected = document.getElementById('temp_diff');
 let valueTemp = temp_diff.options[formatSelected.selectedIndex].value;

const celToFah = (cel) => {

    let farenhite = Math.round((cel*9/5) + 32);
    return farenhite;
}

const fahToCel = (fah) => {

    const celsius = Math.round(5/9*(fah-32));
    return celsius;
}

let result;

if(valueTemp== 'cel'){

    result = celToFah(numberTemp);
    document.getElementById('resultContainer').innerHTML = `${result} Farenhite`;
    console.log(result + "farenhite");
}else{

    result = fahToCel(numberTemp);
    document.getElementById('resultContainer').innerHTML = `${result} Celcius`;
}


}
