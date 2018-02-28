//Secret Menu Challenge
//Add event listeners to the following:


/*1) to the navmenu items (Home, Location, Blog) that will show and hide the contents for that specific navmenu item.*/

var menuItems = document.getElementsByClassName('navi');
for(var i=0;i<menuItems.length;i++){
	menuItems[i].addEventListener('mousemove', showContent);
}

function showContent(){
	var menuElem = this.querySelectorAll('.inner')[0];
	if(menuElem.style.display === 'none'){
		menuElem.style.display = 'block';
	}else{
		menuElem.style.display = 'none';
	}
}




/*2) to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var secretMenu = document.getElementsByClassName('name');
for(var i=0;i<secretMenu.length;i++){
	secretMenu[i].addEventListener('click', showMenu);
}

function showMenu(){
	var secret = this.querySelectorAll('.menu')[0];
	if(secret.style.display === 'none'){
		secret.style.display = 'block';
	}else{
		secret.style.display = 'none';
	}
}

/*3) to the thumbs down icon that will add a count (counter) for each time the icon is clicked on.*/
