//Cria o Objeto COLDIGO que será usado como identificador do projeto
COLDIGO = new Object();

$(document).ready(function() {
	
	$("header").load("/ProjetoTrilhaWeb/pages/admin/general/header.html");
	$("footer").load("/ProjetoTrilhaWeb/pages/admin/general/footer.html");
	
	
	//Função de carregamento de página de conteúdo que recebe como 
	//parâmetro o nome da pasta com a página a ser carregada
	COLDIGO.carregaPagina = function(pagename){
		//Limpa a tag section
		$("section").empty();
		//Carrega a página solicitada dentro da tag section
		$("section").load(pagename+"/",function(response,status,info){
			if (status == "error"){
				var msg = "houve um erro ao tentar encontrar a página: "+ info.status + " - " + info.statusText;
				$("section").html(msg);
			}
		
		});
	}
	
});