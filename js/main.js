window.onload = function() {
function telephone(icon, model, diagonal, guarantee, weight){
this.icon = icon;
this.type = "phone";
this.model = model;
this.diagonal = diagonal;
this.guarantee = guarantee;
this.weight = weight;
this.screen = {
			key1: 11,
			key2: 13,
			key3: 14
		}
		this.cpu = {
			key1: 2,
			key2: 4,
			key3: 6
		}
}
function Laptop(icon, model, diagonal, guarantee, weight){
		this.icon = icon;
		this.type = "laptop";
		this.model = model;
		this.diagonal = diagonal;
		this.guarantee = guarantee;
		this.weight = weight;
		this.screen = {
			key1: 11,
			key2: 13,
			key3: 14
		}
		this.cpu = {
			key1: 2,
			key2: 4,
			key3: 6
		}
}
function Tablet(icon, model, diagonal, guarantee, weight){
		this.icon = icon;
		this.type = "tablet";
		this.model = model;
		this.diagonal = diagonal;
		this.guarantee = guarantee;
		this.weight = weight;
		this.screen = {
			key1: 11,
			key2: 13,
			key3: 14
		}
		this.cpu = {
			key1: 2,
			key2: 4,
			key3: 6
		}
}
var Motorola = new telephone('<img src="img/214404_gal.jpg" height = 20%>', 'Motorola Defy', 3.7, 2.5, 118);
var Philips = new telephone('<img src="img/hq.jpg" height = 23%>', 'Philips Xenium W6610', 5, 2, 115);
var Lenovo = new Laptop('<img src = "img/Lenovo.jpeg", width = 60px, height = 60px>', 'Lenovo', 22, 2, 2115);
var hp = new Laptop('<img src = "img/hp.jpeg", width = 60px, height = 60px>', 'hp', 21, 3, 1500);
var Ergo = new Tablet('<img src = "img/ergo.jpg", height = 18%>', 'Ergo Tab A720', 7, 2, 270);
var Pixus = new Tablet('<img src = "img/pixus.jpg", height = 10%>', 'Pixus Touch 7', 6.95, 3, 300);
var arr = [Motorola, Philips], goods = [Motorola, Philips, Lenovo, hp,Ergo,Pixus], prots = [telephone,Laptop,Tablet], cart = [];;

document.write('<table style="border-collapse: collapse;">');
for (prop in Motorola) {
	document.write('<th style = "border: 1px solid black">' + prop +'</th>');
}
for (i = 0; i < goods.length; i++) {
	document.write('<tr>');
	for (prop in goods[i]) {
		if (prop == 'screen'|| prop == 'cpu' ) {
					document.write('<td style="border: 1px solid black;"><select>')
						for(var ip in goods[i][prop]){
							document.write('<option value="">'+goods[i][prop][ip]+'</option>')
						}
					document.write('</select></td>');}
		else document.write('<td style="border: 1px solid black;">'+goods[i][prop] +'</td>');

	}
}
document.write('</tr></table>');
for(i = 0; i < prots.length; i++) {
	prots[i].prototype.toString = function() {
		return this.type + ' ' + this.model;
	}

	prots[i].prototype.valueOf = function() {
		return "weight: " +this.weight;
	}

	prots[i].prototype.equals = function(otherObj) {
		var result = +prompt('Введите номер параметра проверки: диагональ (№1), гарантийный срок (№2), вес (№3)');
		if (result == 1) {	
			if (this.diagonal > otherObj.diagonal){
				return "диагональ больше";
			}else if(this.diagonal < otherObj.diagonal){
				return "диагональ меньше";
			}else if(this.diagonal == otherObj.diagonal){
				return "диагонали одинаковые";
			}
		}

		if (result == 2) {	
			if (this.guarantee > otherObj.guarantee){
				return "У " + this.model + " гарантийный срок больше";
			}else if(this.guarantee < otherObj.guarantee){
				return "У " + this.model + " гарантийный срок меньше";
			}else{
				return "У " + this.model + " гарантийный срок одинаковый";
			}
		}

		if (result == 3) {	
			if (this.weight > otherObj.weight){
				return "вес больше";
			}else if(this.weight < otherObj.weight){
				return "вес меньше";
			}else{
				return "вес одинаковый";
			}
		}
	}

	prots[i].prototype.compareTo = function(otherObj){
		if (this.weight > otherObj.weight){
			return "У " + this.model + " вес больше";
		}else if(this.weight < otherObj.weight){
			return "У " + this.model + " вес меньше";
		}else{
			return "Вес одинаковый";
		}
	}
	}
telephone.prototype.basket = function(obj){
	for (p in obj)
	cart.push(obj[p]);
	document.write(cart);

}
/*var btnPush = document.getElementById('Push1');
btnPush.onclick = telephone.prototype.basket;*/
}
