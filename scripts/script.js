function calcular(){
  let num = document.getElementById('num').value
  let res = Math.round(num)
  document.getElementById('result').innerHTML = `O resultado é: ${res}`
}

function calcularPotencia(){
  let num1 = document.getElementById('num1').value
  let num2 = document.getElementById('num2').value
  let res = Math.pow(num1,num2)
  document.getElementById('potencia').innerHTML = `O resultado é: ${res}`
}

function calcularMedidasCirculo(){
  let raio = document.getElementById('raio').value
  let resCircunferencia = (2*Math.PI*raio).toFixed(2)
  let resArea = (Math.PI *  Math.pow(raio,2)).toFixed(2)
  document.getElementById('resCircunferencia').innerHTML = `Circunferência: ${resCircunferencia}`
  document.getElementById('resArea').innerHTML = `Área: ${resArea}`
}

function calcularMedidasCubo(){
  let altura = document.getElementById('altura').value
  let resAreaBase = Math.pow(altura,2)
  let resAreaTotal = resAreaBase * 6
  let resVolume = Math.pow(altura,3)
  document.getElementById('resAreaBase').innerHTML = `Área da base: ${resAreaBase}`
  document.getElementById('resAreaTotal').innerHTML = `Área total: ${resAreaTotal}`
  document.getElementById('resVolume').innerHTML = `Volume: ${resVolume}`
}

document.getElementById('btnCalcular').addEventListener('click',function(){
  let base = document.getElementById('base').value
  let alturaTriangulo = document.getElementById('alturaTriangulo').value
  let res = base * alturaTriangulo /2
  document.getElementById('resAreaTriangulo').innerHTML = `Área do triângulo: ${res}`
})



