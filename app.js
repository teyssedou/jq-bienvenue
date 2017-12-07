$('#bouton').click(function(){
	var prenom = $("#first_name").val();
	var nom = $("#last_name").val();
	var ville = $("#city").val();
$('#username').html(prenom+" "+nom+" "+ville)		
})

console.log('have fun !');
