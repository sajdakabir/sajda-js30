const pressed = []
	const secretcode = 'sajda'
	window.addEventListener('keyup', (e)=>{
		pressed.push(e.key)
		pressed.splice(-secretcode.length - 1, pressed.length - secretcode.length)
		console.log(pressed)
		if (pressed.join('') === secretcode){
		cornify_add()
	}
	})