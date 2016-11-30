$(document).ready(function() {

$("#colorTheme").change(function() {
    if ($(this).val() === "#CCC9C7"){
      $("#textContainer").css("background-color", $(this).val());
      $("#menuBar").css("background-color", "#7F7873");
      $("#optionLeft").css("background-color", "#7F7E7C");
      $("#optionRight").css("background-color", "#7F7E7C");
      $("body").css("background-color", "#FFFFFF");
      $("html").css("background-color", "#FFFFFF");
    }else if ($(this).val() === "#d1807c"){
    	$("#textContainer").css("background-color", $(this).val());
      $("#menuBar").css("background-color", "#3d6f94");
      $("#optionLeft").css("background-color", "#3c94b8");
      $("#optionRight").css("background-color", "#3c94b8");
      $("body").css("background-color", "#84aab3");
      $("html").css("background-color", "#84aab3");
    }else if ($(this).val() === "#E3B482"){
    	$("#textContainer").css("background-color", $(this).val());
      $("#menuBar").css("background-color", "#303669");
      $("#optionRight").css("background-color", "#48509E");
      $("#optionLeft").css("background-color", "#48509E");
      $("body").css("background-color", "#F1D9C0");
      $("html").css("background-color", "#F1D9C0");
    }
}).change();

 var x = 0;
 var left = document.getElementById('optionLeft');
 var right = document.getElementById('optionRight');
 var par1 = document.getElementById('text1');
 var par2 = document.getElementById('text2');
 var op1 = document.getElementById('optionText1');
 var op2 = document.getElementById('optionText2');

 left.addEventListener('click', function (event) {
  x = x+1;
  if (x === 1){
    par1.innerHTML="“Ai... Tá bom cara. Estou logando.” E foi. Deixou o documento em branco aberto pra começar a escrever assim que terminasse de jogar. Não iria perder o foco! Não ia ser como das outras vezes. Todos entraram na partida, os bans haviam sido feitos e estavam escolhendo os campeões quando seu celular, inerte ao seu lado, toma vida e vibra. Ele nem olhou a mensagem. Não gostava de ser interrompido enquanto jogava. Na verdade geralmente deixava o celular desligado durante partidas para evitar exatamente isso. Seus amigos tinham um código de conduta um tanto quanto rígido em relação a abandono de partidas... Mas o celular logo voltou a vibrar. Entraram na partida e o celular não parava. Ele desligou o wifi enquanto esperava na tela de carregamento. Cada um foi pra sua lane e estavam nascendo os minions quando o celular toca.";  
    par2.innerHTML="— Alô. — Por que você não responde minhas mensagens? — O que foi? O que aconteceu? — Preciso de você aqui. Estou mal. Não dormi a noite toda. — Ah? Como assim? — Você sabe, cara... Estou em crise. Vem pra cá. Vamos pra praia, aproveitar que ainda é cedo... — Hm... Eu num posso. Sério mesmo. Eu tenho que fazer um relatório. — EU SEI QUE VOCÊ ESTÁ JOGANDO! Acha que eu não estou vendo aqui você online? Acabou de entrar numa partida. Se você num vinher pra cá melhor nem falar mais comigo. Está tudo acabado.";
    op1.innerHTML="Ignorar e continuar jogando";
    op2.innerHTML="Abandonar jogo";
  }
  if (x === 2){
    par1.innerHTML="Continua história...";
    par2.innerHTML="Continua história...";
    op1.innerHTML="Continuar pela Opção 1";
    op2.innerHTML="Continuar pela Opção 2";
  }
 });

//TODO
// right.addEventListener('click', function (event2)){
// }


});