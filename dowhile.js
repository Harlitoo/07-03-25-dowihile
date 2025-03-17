function contador() { // declara a função "contador" os parenteses vazios significa que não tem parametro para ser enviado ou "coletado"
    const tempo = new Date(); // declaração da variável "tempo" somente leitura, a qual receberá o objeto "date" do javascript
    //clearTimeout();
   // while (document.getElementById("cbxMarcarTempo").checked)
    let hora = tempo.getHours(); //declaração do variável "hora" tenporária, a qual receberá o retorno do metodo "tempo.get.hours"
    let minuto = tempo.getMinutes();//declaração do variável "minuto" tenporária, a qual receberá o retorno do metodo "tempo.get.minutes"
    let segundo = tempo.getSeconds(); //declaração da variável "segundo" temporária, a qual receberá o retorno do método "tempo.get.Seconds"
    console.log("hora:",hora, "minuto", minuto, "segundo", segundo) // mostrará o valor da variável "hora" no console do navegador
    
   if (document.getElementById("cbxMarcarTempo").checked == true) { //confirma se o "tempo" está verificado (verdadeiro). 
       document.getElementById("div_hora").innerText = hora; // vai inserir o texto "hora" do "tempo.getHours"
       document.getElementById("div_minuto").innerText = minuto; //vai inserir o texto "minuto", derivado do "tempo.getMinutes", se o texto estiver verificado
       document.getElementById("div_segundo").innerText = segundo; // vai inserir o texto "segundo", derivado do "tempo.getseconds", se o texto estiver verificado
    } // encerra o bloco de códigos do "if" true(verdadeiro)
    setInterval(contador, 1000); // essa linha apenas conta 1 segundo
    if (document.getElementById("cbxMarcarTempo").checked == false) { //ele vai validar se o cbxMarcartempo não estiver verificado
        document.getElementById("div_hora").innerText = hora;//vai zerar a div.hora (vai limpar)
        document.getElementById("div_minuto").innerText = minuto;//vai zerar a div.minuto (vai limpar)
        document.getElementById("div_segundo").innerText = segundo;//vai zerar a div.segundo (vai limpar)
     // Document,ReportBody.innerText = hora; //mostrará o valor da variável "hora" no texto da tag "body"
        clearInterval(); // vai limpar todos os setInterval do código
    }//encerra o bloco de codigos do "if" false (falso)
}

document.getElementById("cbxMarcarTempo").addEventListener('click', () => {// adiciona na lista de evento do javaScript o evento clique do objeto CheckBoX MarcarTempo
    contador();
});//encerra o bloco de códigos do método e função "contador"


//obs. faz com que você deixe o código bonito visualmente. Identação é um requisito classificatório em concurso


 //window.setTimeout(contador, 1000); // executa apenas uma vez 
// window.setInterval(contador, 1000); // executa infinitamente