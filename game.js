const canvas = document.querySelector('canvas')
const fireCounter = document.querySelector('#fireCounter')
const pontu = document.querySelector('#pontu')
const gameButton = document.querySelector('#startId')
const goid = document.querySelector('#goid')
const c = canvas.getContext('2d')
canvas.width = innerWidth
canvas.height = innerHeight

//origem do player 
const origemx = canvas.width / 2
const origemy = canvas.height / 2
let tiros = 0
let evm = 2
let progr = 1000

class Circle
{
	constructor(x, y, radius, color, velocity)
	{
		this.x = x
		this.y = y
		this.radius = radius
		this.color = color
		this.velocity = velocity
	}
	draw()
	{
		c.beginPath()
		c.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false )
		c.fillStyle = this.color
		c.fill()
	}
	update()
	{
		this.draw()
		this.x += this.velocity.x
		this.y += this.velocity.y
		fireCounter.innerHTML = tiros
	}
}

//player 1
class Player extends Circle
{
	/**/
}
let player = new Player(origemx, origemy, 30, 'royalblue', {x: 0, y: 0})
//player.draw()

//classe para inimigos
let enemies = []
class Enemy extends Circle
{
	/**/
}

function init()
{
	player = new Player (origemx, origemy, 30, 'royalblue', {x: 0, y: 0})
	enemies = []
	//console.log(enemies.length)
}

function spawnEnemy()
{
	setInterval
	(
		() =>
		{
			let x
			let y
			const r = 15

			/*random spawn*/
			if ( Math.random() < 0.5 )
			{
				x = Math.random() < 0.5 ? 0 - r : canvas.width + r
				y = Math.random() * canvas.height
			}
			else
			{
				x = Math.random() * canvas.width
				y = Math.random() < 0.5 ? 0 - r : canvas.height + r
			}
			const a = Math.atan2
			(
				player.y - y,
				player.x - x
			)
			const c = 'red'
			const v = 
			{ 
				x: Math.cos(a)*evm, 
				y: Math.sin(a)*evm
			}
			enemies.push(new Enemy(x, y, r, c, v))
			tiros += 1
			evm += 1.2
		},
		progr
	)
}
spawnEnemy()

let aIndex
var corFundo;
function animate()
{
	aIndex = requestAnimationFrame(animate)
	c.fillStyle = corFundo
	c.fillRect(0, 0, canvas.width, canvas.height)
	player.update()

	enemies.forEach
	(
		(e, eIndex) =>
		{
			/**/
			e.update()
			const d = Math.hypot ( player.x - e.x, player.y - e.y )
			if ( d - e.radius - player.radius < 1 )
			{
				cancelAnimationFrame ( aIndex )
				goid.style.display = 'flex'
				pontu.innerHTML = tiros
				tiros = 0
				evm = 2
			}
		}
	)
	//console.log(enemies.length)
}

['click', 'keydown'].forEach
(
	evt => 
	window.addEventListener
	(
		evt,
		(event) =>
		{
			if (evt == 'click')
			{
				window.addEventListener
				(
					evt,
					(event) =>
					{
						const angle = Math.atan2
						(
							event.clientY - player.y,
							event.clientX - player.x
						)
						const velocity = 
						{
							x: Math.cos(angle)*50,
							y: Math.sin(angle)*50,
						}
						player.velocity.x = Math.cos(angle)*6
						player.velocity.y = Math.sin(angle)*6
					}
				)
			}
			else if (evt == 'keydown')
			{
				window.addEventListener
				(
					evt,
					(event) =>
					{
						if ( event.key == ' ')
						{
							player.velocity.x = 0
							player.velocity.y = 0
						}
					}
				)
			}
		}
	)
);

gameButton.addEventListener
( 
	'click', 
	() => 
	{
		init()
		animate()
		//spawnEnemy()
		goid.style.display = 'none'
		tiros = 0
	}
)

function gamecolor(x){
	if (x == 1){
		//Light Mode
		if (document.body.style.backgroundColor == "gainsboro"){
			alert("Already in Light Mode!");
		} else {
			document.body.style.color = "#0f0f0f";
			document.body.style.backgroundColor = "gainsboro";
		}
		corFundo = "rgba(220, 220, 220, 0.5)";
	} else if (x == 2){
		//Dark Mode
		if (document.body.style.color == "gainsboro"){
			alert("Already in Dark Mode!");
		} else {
			document.body.style.color = "gainsboro";
			document.body.style.backgroundColor = "#0f0f0f";
		}
		corFundo = "rgba(15, 15, 15, 0.5)";
	}

};
/*end*/
