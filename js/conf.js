
//Neste arquivo estão presentes as funcões essenciais do jogo, como contagem de vidas 
//e configuração de modos de jogo




//Função que retira elementos de cenário da tela para vizualização de matriz base
function modoConstrutor (){
   
    let floorAtivo = document.getElementsByClassName('table-content floor');
    while (floorAtivo.length) {
        floorAtivo[0].classList.remove("floor");
    }

   // let wallAtivo = document.querySelectorAll('[wall = "active"]');
   // console.log(wallAtivo);
   // while (wallAtivo.length) {
    //  wallAtivo[0].setAttribute("wall","inactive");
  //  }


}


//Função que reativa elementos de cenário, e esconde a layer de matriz base
function modoGame (){
   
  var floorInativo = document.querySelectorAll(".table tbody td");
  for (let i = 0; i< floorInativo.length; i++){
    floorInativo[i].classList.add('floor');

  }
 
}





