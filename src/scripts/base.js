(function(){
  'use script'
  setTimeout(function(){
      if(document.querySelector('#componentePrecoCalculado')) {
          var contentCalc = document.querySelector('.calc-content');
          contentCalc.style.display = "block"
          
          document.querySelector('.after-content').classList.add('view')
          
          document.querySelector('.valor-metro-quadrado-text').textContent = Fbits.Produto.AtributosProduto[0]['Metro Quadrado por Caixa'] + ' valor m²';
          
          if(Object.keys(Fbits.Produto.AtributosProduto[0]) == "Metro Quadrado por Caixa") {
              document.querySelector('#dvGrupoSelecaoAtributos-0').remove();
          }
          
          // Formatação do Valor do Produto
          var valorCaixa = document.querySelector('#spanPrecoCalculadoComponente').textContent;
          valorCaixa = valorCaixa.replace('R$ ', '')
          // FIM Formatação do Valor do Produto
          var preco = Fbits.Produto.PrecoPor; // Preço do Produto
          
          var metroQuadrado = parseFloat(valorCaixa.replace(',', '.')) / preco; // Valor do Metro Quadrado do Produto
          document.querySelector('.caixa-calc').setAttribute('placeholder', metroQuadrado.toFixed('2'))
          var btnCalc = document.querySelector('.btn-calc'); // Botão de Calcular
          
          // Função que Calcula quantas caixas por metro quadrado que o cliente precisa.
          btnCalc.addEventListener('click', function(){
              var metroValue = document.querySelector('.caixa-calc').value; // Metros quadrados que o cliente digitou
              var qtdResult = Math.round((metroValue / metroQuadrado)); // Resultado do Calculo
              
              console.log(qtdResult)
              console.log((metroValue / metroQuadrado))
              
              if(qtdResult <= 0) {
                  qtdResult = 1;
              }
              var qtdFinal = document.querySelector('#item-quantidade-2').value = qtdResult// Input que recebe a quanatidade de Caixas
              var qtdeDeCaixas = document.querySelector('.qtd-de-caixas').textContent = qtdFinal + " Caixas.";
              
              metroValue = qtdFinal * metroQuadrado;
              document.querySelector('.caixa-calc').value = metroValue.toFixed('2')
          })
      } else {
          var contentCalc = document.querySelector('.calc-content');
          contentCalc.style.display = "none"
      }
  }, 1000);
  
})()