const DATA = {
	"DarkAlley": {
		image: "url('img/alley1.jpg')",
		text: ["Detective Bronson wakes up, if that's a word for what it is. It's more like staggering out of the blessed murky unconsciousness into a hang-over that starts in his head and ends somewhere in his lower back. He's sprawled on the cold ground of an abandoned alley. The streetlights at the end prick his eyes as the world swims into view. He'd rather go back to unconsciousness. Bronson takes stock. His gun is gone, he has a blistering headache, and he is most definitely out of cigarettes. \"Damn,\" he says softly.", "To continue the story, press enter."],
		nextActions: "enter",
		nextScene: "CornerStore"
	},
	"CornerStore": {
		image: "url('img/cornerstore.jpg')",
		text: ["Detective Bronson rounds the corner of the alley, and finds himself in front of a neon-trimmed corner store. He enters.", "The clerk looks up, and yelps at the sight of the bloodied and bruised detective. He jumps over the counter and starts to run for the door.", "Action(s): pursue, do nothing"],
		nextActions: ["pursue", "do nothing"],
		nextScene: "CornerStore2"
	}
}

var addTextToPage = function(text_array) {
	var storyBox = document.getElementById("story-box");
	var paragraphs = [];
	var nodes = [];
	for (var i = 0; i < text_array.length; i++){
		paragraphs[i] = document.createElement("p");
		nodes[i] = document.createTextNode(text_array[i]);
		paragraphs[i].appendChild(nodes[i]);
		storyBox.appendChild(paragraphs[i]);
	}
}



var Scene = function(hash){
	this.image = hash.image;
	this.text = hash.text;
	this.nextActions = hash.nextActions;
	this.nextScene = hash.nextScene;
	// var event = new CustomEvent('build', {'detail': this.nextScene})
	// window.dispatchEvent(event);
	this.next = function() {
		console.log(this.nextScene)
		if (this.nextActions == "enter"){
			window.myParam = this.nextScene
			window.addEventListener("keydown", checkKey, false)
		}
	}
	this.load = function() {
		//will need to clear storybox here
		document.body.style.backgroundImage = this.image;
		// var storyBox = document.getElementById("story-box");
		addTextToPage(this.text);
		this.next();
	}
}

function checkKey(e){
	console.log(e.target.myParam);
	// console.log(e.detail)
	// if (e.keyCode =="13"){
	// 	console.log(scene)
	// 	var nextScene = new Scene(DATA[scene]);
	// 	console.log(nextScene)
	// 	nextScene.load();
	// }
}

// function Scene =  function(text, action, nextActions) {
// 	this.text = text;
// 	this.action = action;
// 	this.nextActions = nextActions
// }

// Scene.prototype.next = function() {

// }

function startGame() {
	var body = document.body;
	var button = document.getElementById("button");
	body.removeChild(button);
	document.getElementById("story-box").className += " appear";
	// var aMap = new Map("dark_alley");
	// var gameEngine = new Engine(aMap);
	// gameEngine.play();
	// var anAlley = new DarkAlley();
	var darkAlley = new Scene(DATA["DarkAlley"]);
	darkAlley.load();
}