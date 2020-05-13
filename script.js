var database = [
	{
		username: 'a',
		password: '1234'
	},
	{
		username: 'b',
		password: '4321'
	}
];

var newsFeed = [
	{
		username: 'Bobby',
		timeline: 'So tired from all that learning!'
	},
	{
		username: 'Sally',
		timeline: 'JavaScript is soooo cooool!'
	}
];

function readPosts() {

	for(var i = 0; i < newsFeed.length; i ++) {
		var posts = newsFeed[i].username + ': ' + newsFeed[i].timeline;		
		console.log(newsFeed[i])
	}
	return posts;
}

function isValidUser(user, pass) {
	
	for(var i = 0; i < database.length; i++) {
		if(database[i].username === user && database[i].password === pass) {
			return true;
		}
	}
	return false;
}

function isLogedIn(user,  pass) {
	if(isValidUser(user,  pass)) {
		document.querySelector('li').textContent = readPosts();
		pageEvents();
	} else {
		alert('Wrong USERNAME or PASSWORD!!!');
		
		var emptyPage = document.createElement('div');
		emptyPage.appendChild(document.createTextNode('You are not logged in and events not working'));
		document.querySelector('.login-alert').appendChild(emptyPage);
	}
}

var userPrompt = prompt('Enter your username!');
var passPrompt = prompt('Enter your password!');

isLogedIn(userPrompt, passPrompt);

function pageEvents() {
	var button = document.querySelector('.clickMe');
	var removeTopClass = document.querySelector('.top');
	var addButton = document.querySelector('#addButton');
	var addUser = document.querySelector('#addUser');
	var addTimeline = document.querySelector('#addTimeline');
	var ul = document.querySelector('.userList');
	
	button.addEventListener('click', function(){
		alert("BUTTON IS CLICKED");
		removeTopClass.remove('.top');
	});
	
	function createList() {
		var li = document.createElement('li');
		var span = document.createElement('span');
		span.classList.toggle("delete");
		li.appendChild(document.createTextNode(addUser.value + ': ' + addTimeline.value));
		li.appendChild(span);
		ul.appendChild(li);
		addUser.value = '';
		addTimeline.value = '';
	}
	
	function addList() {
		if(addUser.value === '') {
			alert('value is empty! Add text');
		} else {
			createList();
		}
	}
	
	function addListKeypress(event) {
		if(event.keyCode === 13) {
			
			if(addUser.value === '') {
				alert('value is empty! Add text');
			} else {
				createList();
			}
		}
	}

	var checkExist = setInterval(function() {
		var deleteElement = document.querySelector('.delete');
		if (deleteElement) {
			deleteElement.addEventListener('click', function(){
				document.querySelector('li').remove();
			});
			console.log(checkExist);
			clearInterval(checkExist);
			
		}
	}, 100);
	
	addButton.addEventListener('click', addList);
	addUser.addEventListener('keypress', addListKeypress);
	addTimeline.addEventListener('keypress', addListKeypress);

}