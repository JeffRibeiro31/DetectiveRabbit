

//Nessa layer estão presentes os códigos de coordenadas e localização de elementos do jogo

let rabbit = document.querySelector('#rabbitimg');
let pig = document.querySelector('#security1');
let pig2 = document.querySelector('#security2');
let pig3 = document.querySelector('#security3');
let nextSign = document.querySelector('#next');
let cronometro = document.querySelector('.cronometro');


let moveRabbit = 4;
let movePig1 = 4;
let movePig2 = 3;
let movePig = 3;
let movePig3 = 5;


//Carrega imagens do jogo no início da página
window.addEventListener ('load', () => {
    rabbit.style.position = 'absolute';
    rabbit.style.left='1050px';
    rabbit.style.top='50px';
    //-----------posição inicial do guarda1
    pig.style.position = 'absolute';
    pig.style.left='150px';
    pig.style.top='20px';
    //-------------posição inicial do guarda2
    pig2.style.position = 'absolute';
    pig2.style.left='785px';
    pig2.style.top='100px';
    //-------------posição inicial do guarda2
    pig3.style.position = 'absolute';
    pig3.style.left='490px';
    pig3.style.top='110px';

    //-------------posição inicial do guarda2
    nextSign.style.position = 'absolute';
    nextSign.style.left='15px';
    nextSign.style.top='35px';


   //-------------posição inicial do guarda2
   cronometro.style.position = 'absolute';
   cronometro.style.left='1100px';
   cronometro.style.top='30px';




    PigPosition();
    PigPosition2(); 
    PigPosition3();   
    RabbitPosition();

    pigStart();
    pigStart2();
    pigStart3();
    var seconds = 0;
       
   // $(document).ready(function() {
   // setTimeout(pigStart3() 
   //     , 6000);
   // });

    //setTimeout(pigStart3(), 8000);

   
    trataWall()
    timer();

})






function timer(){

    contTempo = 0;

    setInterval(function agregaTempo(){ 
        contTempo+=1;

        if (contTempo >= 60){
            minutos = Math.floor(contTempo / 60);
            if (minutos < 10){
                minutos = "0"+ minutos;
            } 

        } else {
            minutos = 0;
            if (minutos < 10){
                minutos = "0"+ minutos;
            } 
        }


        if (contTempo >= 60){
            segundos = parseInt((contTempo - (minutos*60)));
            if (segundos < 10){
                segundos = "0"+ segundos;
            } 

        } else {
            segundos = contTempo;
            if (segundos < 10){
                segundos = "0"+ segundos;
            } 
        }


      


        let tempoConsolidado = minutos + ":" + segundos

      //  trataTempo = minutos + ":" + segundos

        console.log("teste tempo", contTempo)
        document.querySelector(".cronometro").innerHTML = "Time - " + tempoConsolidado;



    }, 1000);


}





function RabbitPosition() {

    let posicaorabbit = document.getElementById("rabbitimg");
    let rect = posicaorabbit.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);

    let scan = document.querySelector(".table");

    for (let i = 0; i< scan.rows.length; i++){
        for (let j = 0; j< scan.rows[i].cells.length; j++){

        posicaoleitura = scan.rows[i].cells[j]
        let output = posicaoleitura.getBoundingClientRect();
        //console.log(output.top, output.right, output.bottom, output.left);
            if( output.bottom < rect.bottom &&  output.top> rect.top && output.left > rect.left && output.right< rect.right   ){

                scan.rows[i].cells[j].setAttribute("presenca","presenca-sim");
            } else {

                scan.rows[i].cells[j].setAttribute("presenca","presenca-nao");
            }

        }
        
    }

        

}











function returnRabbitPosition(){

    let rabbitPos = document.querySelectorAll('[presenca = "presenca-sim"]');
   // console.log(rabbitPos)

    let localizaId = [rabbitPos[0].id.split("-")];
     let linha = localizaId[0][0];
     let coluna = (parseInt(localizaId[0][1])-2).toString();
     console.log("linha"+linha,"coluna"+coluna);
    


    //let localizaId = [segurancapos[0].id.split("-") , segurancapos[3].id.split("-")] ;
    //let topo = localizaId[0];
   // let base = localizaId[1];

    let table = document.querySelector(".table").rows[linha].cells[coluna];

    let linhaDireita = localizaId[0][0];
    let colunaDireita = (parseInt(localizaId[0][1])+1).toString();
    let tableDireita = document.querySelector(".table").rows[linhaDireita].cells[colunaDireita];
    let linhaBaixo = (parseInt(localizaId[0][0])+1).toString();
    let colunaBaixo = parseInt(localizaId[0][1]).toString();
    let tableBaixo = document.querySelector(".table").rows[linhaBaixo].cells[colunaBaixo];
    
    console.log(linhaBaixo,colunaBaixo);


    //if(table){
   //     let teste = table.hasAttribute('wall')
        //console.log(teste);
   // }


    

    //Iniciando a rota dos segurancas
    
}




function trataWall () {

   let paredes =  document.querySelectorAll('[wall = "active"]');



   let table = document.querySelector(".table");
   

   //Codigo de verificar parede abaixo
   for (i=0; i< paredes.length; i ++){
   let paredes2 = paredes[i].id.split("-");
    let linha = parseInt(paredes2[0]);
    let coluna = parseInt(paredes2[1]);

      if (linha < 14 && linha > 1){
    console.log(linha, coluna);
    table.rows[linha].cells[coluna-1].setAttribute("walld","active");

    }
    }



    //Codigo de verificar parede Acima

    for (i=0; i< paredes.length; i ++){
        let paredes2 = paredes[i].id.split("-");
         let linha = parseInt(paredes2[0]);
         let coluna = parseInt(paredes2[1]);

        if(linha < 14 && linha > 1){

         console.log(linha, coluna);
         table.rows[linha-2].cells[coluna-1].setAttribute("wallup","active");
        }
     
         }
     


       //Codigo de verificar parede à direita
         for (i=0; i< paredes.length; i ++){
            let paredes2 = paredes[i].id.split("-");
             let linha = parseInt(paredes2[0]);
             let coluna = parseInt(paredes2[1]);
    
            if(coluna < 32 && coluna> 0){
    
             console.log(linha, coluna);
             table.rows[linha-1].cells[coluna].setAttribute("wallr","active");
            }
         
             }


             //Codigo de verificar parede à esquerda
         for (i=0; i< paredes.length; i ++){
            let paredes2 = paredes[i].id.split("-");
             let linha = parseInt(paredes2[0]);
             let coluna = parseInt(paredes2[1]);
    
            if(coluna < 32 && coluna > 1){
    
             console.log(linha, coluna);
             table.rows[linha-1].cells[coluna-2].setAttribute("walll","active");
            }
         
             }


             let primeiraLinha = 1;
             let ultimaLinha = 14;
             let primeiraColuna = 1;
             let ultimaColuna = 32
                
             for (i = 0; i < table.rows[ultimaLinha-1]; i++){

                table.rows[i].cells[0].setAttribute("walll","active");


             }


    //while (paredes.length) {
    //    paredes[0].setAttribute('[walld = "active"]')
    //}



}










window.addEventListener('keydown', (e) => {
    
    let extraction =  (document.getElementById("rabbitimg").src).split("/")
    let imageName = extraction[extraction.length-1];
    let table = document.querySelector(".table");

    let paredes =  document.querySelectorAll('[wall = "active"]');




    let rabbitPos = document.querySelectorAll('[presenca = "presenca-sim"]');
     let localizaId = [rabbitPos[0].id.split("-")];
     let travaCima = localizaId[0][0];
      let linhaEsquerda = localizaId[0][0];
      let colunaEsquerda = (parseInt(localizaId[0][1])-2).toString();
      let linhaDireita = localizaId[0][0];
      let colunaDireita = (parseInt(localizaId[0][1])+1).toString();
      let linhaBaixo = (parseInt(localizaId[0][0])+1).toString();
      let colunaBaixo = parseInt(localizaId[0][1]).toString();
      let linhaCima = (parseInt(localizaId[0][0])-1).toString();
      let colunaCima = parseInt(localizaId[0][1]).toString();  




     let tableEsquerda = document.querySelector(".table").rows[linhaEsquerda].cells[colunaEsquerda];
     let tableDireita = document.querySelector(".table").rows[linhaDireita].cells[colunaDireita];
     let tableBaixo = document.querySelector(".table").rows[linhaBaixo].cells[colunaBaixo];
     let tableCima = document.querySelector(".table").rows[linhaCima].cells[colunaCima];


     console.log("linha baixo",linhaBaixo,"colunabaixo",colunaBaixo)

    console.log(e.key);


    switch (e.key) {

        
        case 'ArrowLeft':
            
            if (imageName === "RabbitFrontstop.gif") {
                document.getElementById("rabbitimg").src = "./img/characters/rabbit/RabbitLeftwalk.gif"
            }

            if(tableEsquerda){
                let valid = tableEsquerda .hasAttribute('walll')
                 if(valid !== true){

                    
                rabbit.style.left = parseInt(rabbit.style.left) - moveRabbit + 'px';
                //document.getElementById("rabbitimg").src = "./img/RabbitLeftwalk.gif";
                 }
            }
           
               
            break;


        case 'ArrowRight':
            
                if (imageName === "RabbitFrontstop.gif") {
                    document.getElementById("rabbitimg").src = "./img/characters/rabbit/RabbitRightwalk.gif"
                }

                if(tableDireita){
                    let valid = tableDireita .hasAttribute('wallr')
                     if(valid !== true){
                       
    
                        
                        rabbit.style.left = parseInt(rabbit.style.left) + moveRabbit + 'px';
                    //document.getElementById("rabbitimg").src = "./img/RabbitLeftwalk.gif";
                         
                     }
                }

            

            

          
            break;
        case 'ArrowUp':

                


            
                if (imageName === "RabbitFrontstop.gif") {
                    document.getElementById("rabbitimg").src = "./img/characters/rabbit/RabbitBackwalk.gif"
                }

                if(tableCima){
                    let valid = tableCima.hasAttribute('wallup')
                     if(valid !== true ){
                        if( parseInt(travaCima) >= 2 ){
                        console.log(travaCima);
                        
                        rabbit.style.top = parseInt(rabbit.style.top) - moveRabbit + 'px';
                    //document.getElementById("rabbitimg").src = "./img/RabbitLeftwalk.gif";
                        }
                     }
                }

            


            
            break;
        case 'ArrowDown':

            
                if (imageName === "RabbitFrontstop.gif") {
                    document.getElementById("rabbitimg").src = "./img/characters/rabbit/RabbitFrontwalk.gif"
                }
                

                

                if(tableBaixo){
                    let valid = tableBaixo.hasAttribute('wall')
                     if(valid !== true ){

                        if( parseInt(linhaBaixo) < 14 ){
                            rabbit.style.top = parseInt(rabbit.style.top) + moveRabbit + 'px';
                            console.log("TESTE",linhaBaixo);

                        }
                        
                        
                        
                    //document.getElementById("rabbitimg").src = "./img/RabbitLeftwalk.gif";
                     }
                }
    
                        
                        
                    //document.getElementById("rabbitimg").src = "./img/RabbitLeftwalk.gif";
               


                
            

            
            break;


    }
 
   




    window.addEventListener('keyup', (e) => {

        document.getElementById("rabbitimg").src = "./img/characters/rabbit/RabbitFrontstop.gif"


            //Limpa barreira de parede Abaixo
        









    });




    RabbitPosition();
    gameOver();
    nextStage();


    



});





function gameOver() {

    let guarda = document.querySelectorAll('[light = "light-sim"]')
    let guardapos = document.querySelectorAll('[guarda = "guarda-sim"]')


    //console.log("Teste pos", guarda[1].id);

    let rabbitactual =  document.querySelectorAll('[presenca = "presenca-sim"]')

   // console.log("Teste rabbit", rabbitactual);

    for ( i=0; i < guarda.length; i++){
        for (j=0; j < rabbitactual.length; j++){
            if(rabbitactual[j].id === guarda[i].id){
               // alert("Pego!");
                if(!alert("Pego! Você entrou no raio de visão do segurança... Tente novamente!")) document.location = "./tentarNovamente.html";
                break;
            }
        }
    }


    for ( i=0; i < guardapos.length; i++){
        for (j=0; j < rabbitactual.length; j++){
            if(rabbitactual[j].id === guardapos[i].id){
               // alert("Pego!");
                if(!alert("Pego! Você passou muito perto do segurança... Tente novamente!")) document.location = "./tentarNovamente.html";
                break;
            }
        }
    }

    return("preso!")


}









function nextStage() {


    //console.log("Teste pos", guarda[1].id);

    let table = document.querySelector(".table");
    let rabbitactual =  document.querySelectorAll('[presenca = "presenca-sim"]')

   // console.log("Teste rabbit", rabbitactual);

    for ( i=0; i < rabbitactual.length; i++){
        if(rabbitactual[i].id === "2-2" || rabbitactual[i].id === "2-3" || rabbitactual[i].id === "3-2" || rabbitactual[i].id === "3-3" ){
            alert("Obrigado por jogar a demo de Detective Rabbit")
            window.location.href = "./home.html";

        }

    }




}





