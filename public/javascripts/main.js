$(function(){
	var socket= io.connect('http://localhost')

	socket.on('connect', function(){
		console.log('hello')
		socket.on('join',function(message){
			$('#room').append("<div class='serverMessage'>"+message+"</div>")
		})
	socket.on('leave', function(message){
			$('#room').append("<div class='serverMessage'>"+message+"</div>")
		
	})
		socket.on('message', function(message){
			$('#room').append("<div>"+message+"</div>")
		})
	})

	
		$('#message-input').on('keyup', function(e){
			if(e.which === 13){
				socket.emit('message',$(this).val())
				$(this).val('')
			}
		});
	
	
});
