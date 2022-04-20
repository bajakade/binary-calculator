
document.addEventListener('click', writeOrCompute)

function writeOrCompute(e){
	let input = e.target.innerText.toString()
	if( ['=','C'].includes(input)){
		computeResult(input)
	}else{
		let str = document.querySelector('#res').innerText.toString()
		document.querySelector('#res').innerText = str.concat(input)
	}
}

function computeResult(val){
	if(val == 'C'){
		document.querySelector('#res').innerText = ''
	}else{
		
		const res = document.querySelector('#res').innerText
		const ops = ['+', '-', '*', '/']
		
		for(let i = 0, op = ops[i]; i < ops.length; i++){
			if(res.indexOf(op) > -1 ){
				let oprands = res.split(op)
				
				switch(op){
					case '+':
						document.querySelector('#res').innerText = toBinary(toBase10(oprands[0]) + toBase10(oprands[1]))
						break
					case '-':
						document.querySelector('#res').innerText = toBinary(toBase10(oprands[0]) - toBase10(oprands[1]))
						break
					case '*':
						document.querySelector('#res').innerText = toBinary(toBase10(oprands[0]) * toBase10(oprands[1]))
						break
					case '/':
						document.querySelector('#res').innerText = toBinary(toBase10(oprands[0]) / toBase10(oprands[1]))
						break
				}
				
				break	
			}else{
				op = ops[i+1]
			}
		}
		
		
	}
}

function toBase10(str){

	let value = str.split('')
			.reverse()
			.map((curr, index) => curr * Math.pow(2,index))
			.reduce((prev,curr) => prev + curr )
			
	return value
}

function toBinary(input){
	let  arr = []
	do{
		arr.push(parseInt(input%2))
		input = parseInt(input/2)
	}while(input > 0);
	
	return arr.reverse().join('')
}