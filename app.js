const http = require('http');

http
	.createServer(function (req, res) {
		res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
		
		// Route System
		switch(req.url) {
			case '/' :
				let stringFinal = 'Estás en la home \n';
				stringFinal += 'Esto va más abajo \n';
				stringFinal += 'Otra línea \n';

				for (let i = 0; i < 4; i++) {
					stringFinal += i + '\n';
				}
					
				res.end(stringFinal);
				break;
			case '/contacto' :
				res.end('Dejanos tus consultas');
				break;
			case '/productos' :
				res.end('Comprá lo que querrás');
				break;
			default:
				res.end('¡Ché qué onda!')
				break;
		}
	})
	.listen(3000, 'localhost', function () {
		console.log('¡Servidor andando!');
	});