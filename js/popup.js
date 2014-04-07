//iLUEU*)z1];N
//cometta -> user
//comettask

$( "#botonGuardar" ).click(function() {

//    alert($("#selectUsuario option:selected").text() + " " + $("#inputTarea").val() + " " + $("#inputTiempo").val() + " " + $("#selectProyecto option:selected").text());

    $.post("http://task.open-comet.net/index.php",
	   {
	       postAccion : "guardar",
	       postResponsable : $("#selectUsuario option:selected").text(),
	       postTarea : $("#inputTarea").val(),
	       postTiempo : $("#inputTiempo").val(),
	       postProyecto : $("#selectProyecto option:selected").text()
	   },
	   function(responseText){
	       $("#mensajeAjax").html("");
	       $("#mensajeAjax").append(responseText);

	       $("#inputTarea").val("");
	       $("#inputTiempo").val("");

	       $("#selectUsuario").focus();
	   });
});

$("#botonLimpiar").click(function(){
    $("#inputTarea").val("");
    $("#inputTiempo").val("");

    $("#selectUsuario").focus();
});
