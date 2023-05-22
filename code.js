


function verificaIdade(dia,mes,ano) {
    dia = document.getElementById('dia').value
    mes = document.getElementById('mes').value
    ano = document.getElementById('ano').value

    
    
   
        
    const nascimento = `${ano}-${mes}-${dia}`
    
    let result = Math.abs(new Date().getTime() - new Date(nascimento).getTime())

    

    let dias = result / (1000 * 60 * 60 * 24)

    
    
    let anoRetorno =  dias / 365.25
    let restoAno = anoRetorno - Math.floor(anoRetorno)

    let mesesRetorno = restoAno * 12.0082 
    let restoMes = mesesRetorno - Math.floor(mesesRetorno)

    let diasRetorno = restoMes * 30.437   
    
    let retornoUsu = new Array 
 
        
    if (( dia >= 1) && ( dia <= 31) && ( dia != undefined) && (dia != "")) {   
        
        retornoUsu[0] = Math.floor(diasRetorno) 
        document.getElementById('label-dias1').style.color = "hsl(0, 1%, 44%)"
        document.getElementById('alerta-dia').style.visibility = "hidden"
        document.getElementById('dia').style.borderColor = "hsl(0, 1%, 44%)"
       
        
      } else {
        
        retornoUsu = 0
        document.getElementById('days').innerHTML = '--'
        document.getElementById('label-dias1').style.color = "red"
        document.getElementById('alerta-dia').style.visibility = "visible"
        document.getElementById('dia').style.borderColor = "hsl(0, 100%, 67%)"
              
    }  

    if ((mes >=0) && (mes <=12)  && (mes != undefined) && (mes != ""))  {

        retornoUsu[1] = Math.ceil(mesesRetorno)         
        document.getElementById('label-mes2').style.color = "hsl(0, 1%, 44%)"       
        document.getElementById('alerta-mes').style.visibility = "hidden"
        document.getElementById('mes').style.borderColor = "hsl(0, 1%, 44%)"
        

        if (isNaN(anoRetorno) ) {
            document.getElementById('months').innerHTML = "--" 
        }
    } else {
        
        retornoUsu = 0
        document.getElementById('months').innerHTML = '--'       
        document.getElementById('label-mes2').style.color = "red"       
        document.getElementById('alerta-mes').style.visibility = "visible"    
        document.getElementById('mes').style.borderColor = "hsl(0, 100%, 67%)"       
    } 

    if ((ano >= 0) && ( ano != undefined) && (ano != "")) {

        retornoUsu[2] = Math.floor(anoRetorno) 
        document.getElementById('label-ano3').style.color = "hsl(0, 1%, 44%)"
        document.getElementById('alerta-ano').style.visibility = "hidden"
        document.getElementById('ano').style.borderColor = "hsl(0, 1%, 44%)"

        if (isNaN(anoRetorno) ) {
            document.getElementById('years').innerHTML = "--"
        }
        
    } else {

        retornoUsu = 0
        document.getElementById('years').innerHTML = '--'
        document.getElementById('label-ano3').style.color = "red"
        document.getElementById('alerta-ano').style.visibility = "visible"
        document.getElementById('ano').style.borderColor = "hsl(0, 100%, 67%)"
        
    } 
    
        
   
        if ((retornoUsu.length === 3 ) && (isNaN(retornoUsu)) && ( retornoUsu != undefined) ) {
            
            
            
            document.getElementById('days').innerHTML = retornoUsu[0]
            document.getElementById('days').style.letterSpacing = "-1px"
            document.getElementById('months').innerHTML = retornoUsu[1]
            document.getElementById('months').style.letterSpacing = "-1px"
            document.getElementById('years').innerHTML = retornoUsu[2]
            document.getElementById('years').style.letterSpacing = "-1px"

            dia = document.getElementById('dia').value = ''
            mes = document.getElementById('mes').value = ''
            ano = document.getElementById('ano').value = ''

              
            
    
        } else {
            
            document.getElementById('days').innerHTML = '--'
            document.getElementById('months').innerHTML = '--'
            document.getElementById('years').innerHTML = '--'
            
        }

        

    
        
        

    
} 











