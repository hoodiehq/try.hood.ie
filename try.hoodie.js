$(function(){
	$("form").submit(function(e){
		e.preventDefault();
		var subdomain = $("input[name=subdomain]").val();

		if(subdomain.length > 0) {
			createApp(subdomain).then(onSuccess, onError);

			onSuccess = function(){
				alert('DONE! WHOOT!');
			};

			onError = function(){
				alert('ERROR');
			};
		}

		console.log(subdomain);
	})
})