

//Programação dos guardas porcos ---------------------------------------------

function PigPosition2(){
    

    let posicaopig2 = document.getElementById("security2");
    let pigrect2 = posicaopig2.getBoundingClientRect();
 //   //console.log(pigrect2.top, pigrect2.right, pigrect2.bottom, pigrect2.left);

    let extraction2 =  (document.getElementById("security2").src).split("/")
    let imageName2 = extraction2[extraction2.length-1];

     let scan2 = document.querySelector(".table");

    for (let i = 0; i< scan2.rows.length; i++){
        for (let j = 14; j< scan2.rows[i].cells.length; j++){

        posicaoleitura2 = scan2.rows[i].cells[j]
        let output2 = posicaoleitura2.getBoundingClientRect();
        ////console.log(output2.top, output2.right, output2.bottom, output2.left);
            if( output2.bottom < pigrect2.bottom &&  output2.top> pigrect2.top && output2.left > pigrect2.left && output2.right< pigrect2.right   ){

                scan2.rows[i].cells[j].setAttribute("guarda2","guarda-sim");
            } else {

               scan2.rows[i].cells[j].setAttribute("guarda2","guarda-nao");
            }

        }
        
    }

    
    


    //let segurancapos2 = document.querySelectorAll('[guarda2 = "guarda-sim"]');
    //let localizaId2 = [segurancapos2[0].id.split("-") , segurancapos2[3].id.split("-")] ;
    //let topo2 = localizaId2[0];
    //let base2 = localizaId2[1];

    // //console.log(localizaId2);

 

}













    
    





























function pigStart2() {
    
    let posicaopiginit = document.getElementById("security2");
    let pigstart2 = posicaopiginit.getBoundingClientRect();
    cont2 = 0;


    //Detectando posição do segurança

    let segurancapos2 = document.querySelectorAll('[guarda2 = "guarda-sim"]');
    let localizaId2 = [segurancapos2[0].id.split("-") , segurancapos2[3].id.split("-")] ;
    
    let topo2 = localizaId2[0];
    let base2 = localizaId2[1];

     ////console.log(localizaId2);

    //Chamando a variável da tabela para ajustar a visão do seguranca
    let table = document.querySelector(".table");
    


    //Iniciando a rota dos segurancas



    document.getElementById("security2").src = "./img/characters/pigsecurity/PigSecurityFrontStop.gif"
    setInterval(function pigRoute2()
    {

            let segurancapos2 = document.querySelectorAll('[guarda2 = "guarda-sim"]');
            let localizaId2 = [segurancapos2[0].id.split("-") , segurancapos2[3].id.split("-")] ;
            let topo2 = localizaId2[0];
            let base2 = localizaId2[1];


        if ( cont2 < 30  ){
            
            pig2.style.top = parseInt(pig2.style.top);
            PigPosition2();
            
            //--

            

            ////console.log(base2[1])

           for (i=-1;i <= 0; i++){
            let vision = (parseInt(base2[0])+1).toString() +'-' + (parseInt(base2[1])+i).toString()
            //console.log(vision)
            document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
            document.getElementById(vision).setAttribute("light", "light-sim");

            }
        
            for (i=-2;i <= 1; i++){
                let vision = (parseInt(base2[0])+2).toString() +'-' + (parseInt(base2[1])+i).toString()
                //console.log(vision)
                document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                document.getElementById(vision).setAttribute("light", "light-sim");
    
                }


                for (i=-3;i <= 2; i++){
                    let vision = (parseInt(base2[0])+3).toString() +'-' + (parseInt(base2[1])+i).toString()
                    //console.log(vision)
                    document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                    document.getElementById(vision).setAttribute("light", "light-sim");
        
                    }

                for (i=-4;i <= 3; i++){
                let vision = (parseInt(base2[0])+4).toString() +'-' + (parseInt(base2[1])+i).toString()
                //console.log(vision)
                document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                document.getElementById(vision).setAttribute("light", "light-sim");
    
                }

               


            cont2 +=1;
            ////console.log(cont2);








        } 
        
        
        
        if ( cont2 === 30  ){
            for (i=-1;i <= 0; i++){
                let vision = (parseInt(base2[0])+1).toString() +'-' + (parseInt(base2[1])+i).toString()
                //console.log(vision)
                document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                document.getElementById(vision).setAttribute("light", "light-nao");
                }
            
                for (i=-2;i <= 1; i++){
                    let vision = (parseInt(base2[0])+2).toString() +'-' + (parseInt(base2[1])+i).toString()
                    //console.log(vision)
                    document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                    document.getElementById(vision).setAttribute("light", "light-nao");
                    }
    
    
                    for (i=-3;i <= 2; i++){
                        let vision = (parseInt(base2[0])+3).toString() +'-' + (parseInt(base2[1])+i).toString()
                        //console.log(vision)
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                        document.getElementById(vision).setAttribute("light", "light-nao");
                        }
    
                    for (i=-4;i <= 3; i++){
                    let vision = (parseInt(base2[0])+4).toString() +'-' + (parseInt(base2[1])+i).toString()
                    //console.log(vision)
                    document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                    document.getElementById(vision).setAttribute("light", "light-nao");
                    }

            document.getElementById("security2").src = "./img/characters/pigsecurity/PigSecurityFrontWalk.gif"
        
        } 

        


        
                if ( cont2 >= 30 && cont2 < 60  ){

                    
                   
                //Limpando a visão
                   



                let segurancapos2 = document.querySelectorAll('[guarda2 = "guarda-sim"]');
                let localizaId2 = [segurancapos2[0].id.split("-") , segurancapos2[3].id.split("-")] ;
                let topo2 = localizaId2[0];
                let base2 = localizaId2[1];





                pig2.style.top = parseInt(pig2.style.top) + movePig2 + 'px';
                PigPosition2();

                
                if (parseInt(base2[0]) <=13 ) {
                for (i=-1;i <= 0; i++){

                    
                        let vision = (parseInt(base2[0])+1).toString() +'-' + (parseInt(base2[1])+i).toString()
                        //console.log(vision)
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                        document.getElementById(vision).setAttribute("light", "light-sim");

                    }

                    }



                    if (parseInt(base2[0]) <=12 ) {
                    for (i=-2;i <= 1; i++){

                       

                        let vision = (parseInt(base2[0])+2).toString() +'-' + (parseInt(base2[1])+i).toString()
                        //console.log(vision)
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                        document.getElementById(vision).setAttribute("light", "light-sim");
            
                        }
                        }
        
                        if (parseInt(base2[0]) <=11 ) {
                        for (i=-3;i <= 2; i++){
                            

                            let vision = (parseInt(base2[0])+3).toString() +'-' + (parseInt(base2[1])+i).toString()
                            //console.log(vision)
                            document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                            document.getElementById(vision).setAttribute("light", "light-sim");
                
                            }

                        }
        
                        if (parseInt(base2[0]) <=10 ) {

                        for (i=-4;i <= 3; i++){

                           
                        let vision = (parseInt(base2[0])+4).toString() +'-' + (parseInt(base2[1])+i).toString()
                        //console.log(vision)
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                        document.getElementById(vision).setAttribute("light", "light-sim");
            
                            }

                        }
                
                
               

                











                        
                cont2 +=1;





                if (parseInt(base2[0]) <=13 ) {
                    for (i=-1;i <= 0; i++){
    
                        
                            let vision = (parseInt(base2[0])).toString() +'-' + (parseInt(base2[1])+i).toString()
                           // //console.log(vision)
                            document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                            document.getElementById(vision).setAttribute("light", "light-nao");
    
                        }
    
                        }
    
                        
                        if (parseInt(base2[0]) <=13 ) {
                            for (i=-2;i <= 2; i++){
            
                                
                                    let vision1 = (parseInt(base2[0])+1).toString() +'-' + (parseInt(base2[1])-2).toString()
                                    let vision2 = (parseInt(base2[0])+1).toString() +'-' + (parseInt(base2[1])+1).toString()
                                    ////console.log(vision)
                                    document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                    document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                    document.getElementById(vision1).setAttribute("light", "light-nao");
                                    document.getElementById(vision2).setAttribute("light", "light-nao");
                                
                                }
            
                                }
    

                                if (parseInt(base2[0]) <=12 ) {
                                    for (i=-2;i <= 2; i++){
                    
                                        
                                            let vision1 = (parseInt(base2[0])+2).toString() +'-' + (parseInt(base2[1])-3).toString()
                                            let vision2 = (parseInt(base2[0])+2).toString() +'-' + (parseInt(base2[1])+2).toString()
                                            //let vision3 = (parseInt(base2[0])+2).toString() +'-' + (parseInt(base2[1])+1).toString()
                                           // let vision4 = (parseInt(base2[0])+2).toString() +'-' + (parseInt(base2[1])+1).toString()

                                            ////console.log(vision)
                                            document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                            document.getElementById(vision1).setAttribute("light", "light-nao");
                                            document.getElementById(vision2).setAttribute("light", "light-nao");
                                        
                                        }
                    
                                        }


                                        if (parseInt(base2[0]) <=11 ) {
                                            for (i=-2;i <= 2; i++){
                            
                                                
                                                    let vision1 = (parseInt(base2[0])+3).toString() +'-' + (parseInt(base2[1])-4).toString()
                                                    let vision2 = (parseInt(base2[0])+3).toString() +'-' + (parseInt(base2[1])+3).toString()
                                                    //let vision3 = (parseInt(base2[0])+2).toString() +'-' + (parseInt(base2[1])+1).toString()
                                                   // let vision4 = (parseInt(base2[0])+2).toString() +'-' + (parseInt(base2[1])+1).toString()
        
                                                    ////console.log(vision)
                                                    document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                                    document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                                    document.getElementById(vision1).setAttribute("light", "light-nao");
                                                    document.getElementById(vision2).setAttribute("light", "light-nao");
                                                
                                                }
                            
                                                }
        




                
               // //console.log(cont2);
            } 

            if ( cont2 === 60  ){
            
                document.getElementById("security2").src = "./img/characters/pigsecurity/PigSecurityFrontStop.gif"
            } 
    



            if ( cont2 >= 60 && cont2 < 90   ){
                pig2.style.top = parseInt(pig2.style.top);
                PigPosition2();
                
                cont2 +=1;
               // //console.log(cont2);

            } 

            if ( cont2 === 90 ){

                pig2.style.top = parseInt(pig2.style.top);
                PigPosition2();
                document.getElementById("security2").src = "./img/characters/pigsecurity/PigSecurityBackWalk.gif"
                //Colocar aqui
                cont2+=1;
                
                if (parseInt(base2[0]) <=13 ) {
                    for (i=-1;i <= 0; i++){
    
                        
                            let vision = (parseInt(base2[0])+1).toString() +'-' + (parseInt(base2[1])+i).toString()
                           // //console.log(vision)
                            document.getElementById(vision).setAttribute("guardavision", "guardavision-no");

                            document.getElementById(vision).setAttribute("light", "light-nao");
                
                        
                        }
    
                        }



                  if (parseInt(base2[0]) <=13 ) {
                    for (i=-2;i <= 1; i++){
    
                        
                            let vision = (parseInt(base2[0])+2).toString() +'-' + (parseInt(base2[1])-2).toString()
                            let vision2 = (parseInt(base2[0])+2).toString() +'-' + (parseInt(base2[1])-1).toString()
                            let vision3 = (parseInt(base2[0])+2).toString() +'-' + (parseInt(base2[1])).toString()
                            let vision4 = (parseInt(base2[0])+2).toString() +'-' + (parseInt(base2[1])+1).toString()
                           // //console.log(vision)
                            document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                            document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");
                            document.getElementById(vision3).setAttribute("guardavision", "guardavision-no");
                            document.getElementById(vision4).setAttribute("guardavision", "guardavision-no");

                            document.getElementById(vision).setAttribute("light", "light-nao");
                            document.getElementById(vision2).setAttribute("light", "light-nao");
                            document.getElementById(vision3).setAttribute("light", "light-nao");
                            document.getElementById(vision4).setAttribute("light", "light-nao");
                            
                        
                        }
    
                        }      


                        if (parseInt(base2[0]) <=13 ) {
                            for (i=-2;i <= 1; i++){
            
                                
                                    let vision = (parseInt(base2[0])+3).toString() +'-' + (parseInt(base2[1])-3).toString()
                                    let vision2 = (parseInt(base2[0])+3).toString() +'-' + (parseInt(base2[1])-2).toString()
                                    let vision3 = (parseInt(base2[0])+3).toString() +'-' + (parseInt(base2[1])-1).toString()
                                    let vision4 = (parseInt(base2[0])+3).toString() +'-' + (parseInt(base2[1])).toString()
                                    let vision5 = (parseInt(base2[0])+3).toString() +'-' + (parseInt(base2[1])+1).toString()
                                    let vision6 = (parseInt(base2[0])+3).toString() +'-' + (parseInt(base2[1])+2).toString()
                                   // //console.log(vision)
                                    document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                                    document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");
                                    document.getElementById(vision3).setAttribute("guardavision", "guardavision-no");
                                    document.getElementById(vision4).setAttribute("guardavision", "guardavision-no");
                                    document.getElementById(vision5).setAttribute("guardavision", "guardavision-no");
                                    document.getElementById(vision6).setAttribute("guardavision", "guardavision-no");

                                    document.getElementById(vision).setAttribute("light", "light-nao");
                                    document.getElementById(vision2).setAttribute("light", "light-nao");
                                    document.getElementById(vision3).setAttribute("light", "light-nao");
                                    document.getElementById(vision4).setAttribute("light", "light-nao");
                                    document.getElementById(vision5).setAttribute("light", "light-nao");
                                    document.getElementById(vision6).setAttribute("light", "light-nao");
                                
                                }
            
                                }    

                             

                                if (parseInt(base2[0]) <=13 ) {
                                    for (i=-2;i <= 1; i++){
                    
                                        
                                            let vision = (parseInt(base2[0])+4).toString() +'-' + (parseInt(base2[1])-4).toString()
                                            let vision2 = (parseInt(base2[0])+4).toString() +'-' + (parseInt(base2[1])-3).toString()
                                            let vision3 = (parseInt(base2[0])+4).toString() +'-' + (parseInt(base2[1])-2).toString()
                                            let vision4 = (parseInt(base2[0])+4).toString() +'-' + (parseInt(base2[1])-1).toString()
                                            let vision5 = (parseInt(base2[0])+4).toString() +'-' + (parseInt(base2[1])).toString()
                                            let vision6 = (parseInt(base2[0])+4).toString() +'-' + (parseInt(base2[1])+1).toString()
                                            let vision7 = (parseInt(base2[0])+4).toString() +'-' + (parseInt(base2[1])+2).toString()
                                            let vision8 = (parseInt(base2[0])+4).toString() +'-' + (parseInt(base2[1])+3).toString()


                                           // //console.log(vision)
                                            document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision3).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision4).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision5).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision6).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision7).setAttribute("guardavision", "guardavision-no");
                                            document.getElementById(vision8).setAttribute("guardavision", "guardavision-no");
                                        
                                            document.getElementById(vision).setAttribute("light", "light-nao");
                                            document.getElementById(vision2).setAttribute("light", "light-nao");
                                            document.getElementById(vision3).setAttribute("light", "light-nao");
                                            document.getElementById(vision4).setAttribute("light", "light-nao");
                                            document.getElementById(vision5).setAttribute("light", "light-nao");
                                            document.getElementById(vision6).setAttribute("light", "light-nao");
                                            document.getElementById(vision7).setAttribute("light", "light-nao");
                                            document.getElementById(vision8).setAttribute("light", "light-nao");



                                        }
                    
                                        }  


            
                
            } 




            if ( cont2 >= 91 && cont2 < 121  ){
                pig2.style.top = parseInt(pig2.style.top) - movePig2 + 'px';
                PigPosition2();
                cont2+=1;
                
                    if (parseInt(topo2[0]) >=2 ) {
                        for (i=0;i <= 1; i++){

                    
                        let vision = (parseInt(topo2[0])-1).toString() +'-' + (parseInt(topo2[1])+i).toString()
                        //console.log(vision)
                        if ( vision !== "5-19" &&   vision !== "6-19" && vision !== "7-19" && vision !== "6-20" && vision !== "7-20" && vision !== "5-20"){
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                        document.getElementById(vision).setAttribute("light", "light-sim");
                        }
                    }

                    }

                
                    if (parseInt(topo2[0]) >=3 ) {
                        for (i=-1;i <= 2; i++){
        
                            
                                let vision = (parseInt(topo2[0])-2).toString() +'-' + (parseInt(topo2[1])+i).toString()
                                //console.log(vision)
                                if ( vision !== "5-19" &&   vision !== "6-19" && vision !== "7-19" && vision !== "6-20" && vision !== "7-20" && vision !== "5-20"){
                                document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                                document.getElementById(vision).setAttribute("light", "light-sim");
                                }
        
                            }
        
                            }


                    if (parseInt(topo2[0]) >=4 ) {
                        for (i=-2;i <= 3; i++){
        
                            
                                let vision = (parseInt(topo2[0])-3).toString() +'-' + (parseInt(topo2[1])+i).toString()
                                //console.log(vision)
                                if ( vision !== "5-19" &&   vision !== "6-19" && vision !== "7-19" && vision !== "6-20" && vision !== "7-20" && vision !== "5-20" ){
                                document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                                document.getElementById(vision).setAttribute("light", "light-sim");
                    
                                }
                            }
        
                            }
        


                    if (parseInt(topo2[0]) >=5 ) {
                        for (i=-3;i <= 4; i++){
        
                            
                            let vision = (parseInt(topo2[0])-4).toString() +'-' + (parseInt(topo2[1])+i).toString()
                            //console.log(vision)
                            if ( vision !== "5-19" &&   vision !== "6-19" && vision !== "7-19" && vision !== "6-20" && vision !== "7-20" && vision !== "5-20"){
                            document.getElementById(vision).setAttribute("guardavision", "guardavision-yes");
                            document.getElementById(vision).setAttribute("light", "light-sim");
                            }
        
                            }
        
                            }






                            


                
                
               // //console.log(cont2); Limpando rota


              
               if (parseInt(topo2[0]) >=1 ) {
                for (i=0;i <= 1; i++){

                    
                        let vision = (parseInt(topo2[0])).toString() +'-' + (parseInt(topo2[1])+i).toString()
                       // //console.log(vision)
                        document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                        document.getElementById(vision).setAttribute("light", "light-nao");
            

                    }

                    }


              
                    if (parseInt(topo2[0]) >=1  ) {
                        for (i=-1;i <= 2; i++){
        
                            
                                let vision1 = (parseInt(topo2[0])-1).toString() +'-' + (parseInt(topo2[1])-1).toString()
                                let vision2 = (parseInt(topo2[0])-1).toString() +'-' + (parseInt(topo2[1])+2).toString()
                                ////console.log(vision)
                                document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                document.getElementById(vision1).setAttribute("light", "light-nao");
                                document.getElementById(vision2).setAttribute("light", "light-nao");
                            
                            }
        
                            }
               




                     if (parseInt(topo2[0]) >=1  ) {
                        for (i=-2;i <= 3; i++){
        
                            
                                let vision1 = (parseInt(topo2[0])-2).toString() +'-' + (parseInt(topo2[1])-2).toString()
                                let vision2 = (parseInt(topo2[0])-2).toString() +'-' + (parseInt(topo2[1])+3).toString()
                                ////console.log(vision)
                                document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                document.getElementById(vision1).setAttribute("light", "light-nao");
                                document.getElementById(vision2).setAttribute("light", "light-nao");
                            
                            }
        
                            }




                    if (parseInt(topo2[0]) >=1  ) {
                        for (i=-3;i <= 4; i++){
        
                            
                                let vision1 = (parseInt(topo2[0])-3).toString() +'-' + (parseInt(topo2[1])-3).toString()
                                let vision2 = (parseInt(topo2[0])-3).toString() +'-' + (parseInt(topo2[1])+4).toString()
                                ////console.log(vision)
                                document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");

                                document.getElementById(vision1).setAttribute("light", "light-nao");
                                document.getElementById(vision2).setAttribute("light", "light-nao");
                            
                            }
        
                            }




                



            } 

                
            if(cont2 === 121 ){

                    pig2.style.top = parseInt(pig2.style.top);
                    PigPosition2();






                    cont2 = 0;
                    document.getElementById("security2").src = "./img/characters/pigsecurity/PigSecurityFrontStop.gif"
               



                    if (parseInt(topo2[0]-1) >=1 ) {
                        for (i=-1;i <= 2; i++){
        
                            let vision1 = (parseInt(topo2[0])+1).toString() +'-' + (parseInt(topo2[1])-1).toString()
                                let vision2 = (parseInt(topo2[0])+1).toString() +'-' + (parseInt(topo2[1])+2).toString()
                                let vision3 = (parseInt(topo2[0])).toString() +'-' + (parseInt(topo2[1])-2).toString()
                                let vision4 = (parseInt(topo2[0])).toString() +'-' + (parseInt(topo2[1])+3).toString()
                                let vision5 = (parseInt(topo2[0])-1).toString() +'-' + (parseInt(topo2[1])-3).toString()
                                let vision6 = (parseInt(topo2[0])-1).toString() +'-' + (parseInt(topo2[1])+4).toString()
                                ////console.log(vision)
                                document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision3).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision4).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision5).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision6).setAttribute("guardavision", "guardavision-no");

                                document.getElementById(vision1).setAttribute("light", "light-nao");
                                document.getElementById(vision2).setAttribute("light", "light-nao");
                                document.getElementById(vision3).setAttribute("light", "light-nao");
                                document.getElementById(vision4).setAttribute("light", "light-nao");
                                document.getElementById(vision5).setAttribute("light", "light-nao");
                                document.getElementById(vision6).setAttribute("light", "light-nao");
                                

                            
                            }
        
                            }





                    if (parseInt(topo2[0]) >=1 ) {
                        for (i=0;i <= 1; i++){
        
                            
                                let vision = (parseInt(topo2[0])-1).toString() +'-' + (parseInt(topo2[1])+i).toString()
                               // //console.log(vision)
                                document.getElementById(vision).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision).setAttribute("light", "light-nao");
                    
        
                            }
        
                            }
               
                    if (parseInt(topo2[0]) >=1 ) {
                        for (i=-1;i <= 2; i++){
        
                            let vision1 = (parseInt(topo2[0])-2).toString() +'-' + (parseInt(topo2[1])-1).toString()
                               // let vision1 = (parseInt(topo2[0])-2).toString() +'-' + (parseInt(topo2[1])-1).toString()
                                let vision2 = (parseInt(topo2[0])-2).toString() +'-' + (parseInt(topo2[1])+2).toString()
                                let vision3 = (parseInt(topo2[0])-2).toString() +'-' + (parseInt(topo2[1])).toString()
                                let vision4 = (parseInt(topo2[0])-2).toString() +'-' + (parseInt(topo2[1])+1).toString()
                                ////console.log(vision)
                                document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision3).setAttribute("guardavision", "guardavision-no");
                                document.getElementById(vision4).setAttribute("guardavision", "guardavision-no");

                                document.getElementById(vision1).setAttribute("light", "light-nao");
                                document.getElementById(vision2).setAttribute("light", "light-nao");
                                document.getElementById(vision3).setAttribute("light", "light-nao");
                                document.getElementById(vision4).setAttribute("light", "light-nao");
                            
                            }
        
                            }


                            if (parseInt(topo2[0]) >=1 ) {
                                for (i=-2;i <= 3; i++){
                
                                         let vision1 = (parseInt(topo2[0])-3).toString() +'-' + (parseInt(topo2[1])-1).toString()
                                       
                                        let vision2 = (parseInt(topo2[0])-3).toString() +'-' + (parseInt(topo2[1])+2).toString()
                                        let vision3 = (parseInt(topo2[0])-3).toString() +'-' + (parseInt(topo2[1])).toString()
                                        let vision4 = (parseInt(topo2[0])-3).toString() +'-' + (parseInt(topo2[1])+1).toString()
                                        let vision5 = (parseInt(topo2[0])-3).toString() +'-' + (parseInt(topo2[1])+3).toString()
                                        let vision6 = (parseInt(topo2[0])-3).toString() +'-' + (parseInt(topo2[1])-2).toString()

                                        ////console.log(vision)
                                        document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                        document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");
                                        document.getElementById(vision3).setAttribute("guardavision", "guardavision-no");
                                        document.getElementById(vision4).setAttribute("guardavision", "guardavision-no");
                                        document.getElementById(vision5).setAttribute("guardavision", "guardavision-no");
                                        document.getElementById(vision6).setAttribute("guardavision", "guardavision-no");

                                        document.getElementById(vision1).setAttribute("light", "light-nao");
                                        document.getElementById(vision2).setAttribute("light", "light-nao");
                                        document.getElementById(vision3).setAttribute("light", "light-nao");
                                        document.getElementById(vision4).setAttribute("light", "light-nao");
                                        document.getElementById(vision5).setAttribute("light", "light-nao");
                                        document.getElementById(vision6).setAttribute("light", "light-nao");
                                    
                                    }
                
                                    }


                                    if (parseInt(topo2[0]) >=1 ) {
                                        for (i=-3;i <= 4; i++){
                        
                                            let vision1 = (parseInt(topo2[0])-4).toString() +'-' + (parseInt(topo2[1])-1).toString()
                                                let vision2 = (parseInt(topo2[0])-4).toString() +'-' + (parseInt(topo2[1])+2).toString()
                                                let vision3 = (parseInt(topo2[0])-4).toString() +'-' + (parseInt(topo2[1])).toString()
                                                let vision4 = (parseInt(topo2[0])-4).toString() +'-' + (parseInt(topo2[1])+1).toString()
                                                let vision5 = (parseInt(topo2[0])-4).toString() +'-' + (parseInt(topo2[1])+3).toString()
                                                let vision6 = (parseInt(topo2[0])-4).toString() +'-' + (parseInt(topo2[1])-2).toString()
                                                let vision7 = (parseInt(topo2[0])-4).toString() +'-' + (parseInt(topo2[1])+4).toString()
                                                let vision8 = (parseInt(topo2[0])-4).toString() +'-' + (parseInt(topo2[1])-3).toString()

        
                                                ////console.log(vision)
                                                document.getElementById(vision1).setAttribute("guardavision", "guardavision-no");
                                                document.getElementById(vision2).setAttribute("guardavision", "guardavision-no");
                                                document.getElementById(vision3).setAttribute("guardavision", "guardavision-no");
                                                document.getElementById(vision4).setAttribute("guardavision", "guardavision-no");
                                                document.getElementById(vision5).setAttribute("guardavision", "guardavision-no");
                                                document.getElementById(vision6).setAttribute("guardavision", "guardavision-no");
                                                document.getElementById(vision7).setAttribute("guardavision", "guardavision-no");
                                                document.getElementById(vision8).setAttribute("guardavision", "guardavision-no");

                                                document.getElementById(vision1).setAttribute("light", "light-nao");
                                                document.getElementById(vision2).setAttribute("light", "light-nao");
                                                document.getElementById(vision3).setAttribute("light", "light-nao");
                                                document.getElementById(vision4).setAttribute("light", "light-nao");
                                                document.getElementById(vision5).setAttribute("light", "light-nao");
                                                document.getElementById(vision6).setAttribute("light", "light-nao");
                                                document.getElementById(vision7).setAttribute("light", "light-nao");
                                                document.getElementById(vision8).setAttribute("light", "light-nao");
                                                
                                            
                                            }
                        
                                            }








               
                }


            
                

                gameOver();

    
    }, 50);


    

}













































//-----------------------------------------------------------------------------------












