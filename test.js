function enterPressed(callback) {
	if (e.keyCode=13) {
	    // remove things

	    // callback would do the custom stuff
		callback();
	} else {
		return true;
	};
}



function checkKey1(e) {
  enterPressed(function(){
	if (input.value == "investigate") {

	// stop the continuation of any other form activity
		storyBox.removeChild(p3);
		storyBox.removeChild(p4);
		storyBox.removeChild(form);

		// create new paragraph and node text elements
		var p5 = document.createElement("p");
		var node5 = document.createTextNode("Bronson takes a step closer to investigate the blood spatter. It is most definitely fresh.  Kneeling down, he finds casings on the ground - .45's and with the little groove on one side that only his gun makes. Did he shoot someone? He can't remember. He swallows down the panic like cheap whiskey and glances around. There's a man in a white waiter's jacket smoking at the end of the alley.");

		//append nodes to paragraph, append paragraph to story box
		p5.appendChild(node5);
		storyBox.appendChild(p5);

	} else {
		// wrong input inputted
	}
  })
};



function checkKey(e){
	enterPressed(function(){

		// remove previous elements
		storyBox.removeChild(p1);
		storyBox.removeChild(p2);

		// create new paragraph and node text elements
		var p3 = document.createElement("p");
		var node3 = document.createTextNode("He gets up, and the look of something wet on the wall catches his eye. It's blood.");
		var p4 = document.createElement("p");
		var node4 = document.createTextNode("Action(s): investigate");

		//append nodes to paragraph, append paragraphs to story box
		p3.appendChild(node3);
		p4.appendChild(node4);
		storyBox.appendChild(p3);
		storyBox.appendChild(p4);

		// create a form element, append it
		var form = document.createElement("form");
		var input = document.createElement("input");
		storyBox.appendChild(form);
		input.type = "text";
		input.name = "action";
		input.className = "user-input";
		form.appendChild(input);

		// add event listener
		input.addEventListener("keydown", checkKey1, false);
	});
};	


function DarkAlley() {
	this.enter = function() {
		// change background image
		document.body.style.backgroundImage = "url('img/alley1.jpg')";

		// create storyBox var element
		var storyBox = document.getElementById("story-box");

		// create paragraph elements
		var p1 = document.createElement("p");
		var p2 = document.createElement("p");

		// create nodes with text
		var node1 = document.createTextNode("Detective Bronson wakes up, if that's a word for what it is. It's more like staggering out of the blessed murky unconsciousness into a hang-over that starts in his head and ends somewhere in his lower back. He's sprawled on the cold ground of an abandoned alley. The streetlights at the end prick his eyes as the world swims into view. He'd rather go back to unconsciousness. Bronson takes stock. His gun is gone, he has a blistering headache, and he is most definitely out of cigarettes. \"Damn,\" he says softly.");
		var node2 = document.createTextNode("To continue the story, press enter.");

		//append nodes to paragraphs, and append to storyBox
		p1.appendChild(node1);
		p2.appendChild(node2);
		storyBox.appendChild(p1);
		storyBox.appendChild(p2);

		//add event listener for key
		window.addEventListener("keydown", checkKey, false);
		
		// if key is enter, then continue with rest of the story
		
	};
}


// function Map(start_scene) {
// 	var scenes = {
// 		'dark_alley': DarkAlley.new,
// 		// 'corner_store': CornerStore.new,
// 		// 'palace_hotel': PalaceHotel.new,
// 		// "safe_room": Safe.new,
// 		// "golden_gate_bridge": GoldenGateBridge.new,
// 		// "death": Death.new
// 	}

// 	// this.init = function(start_scene) {
// 	//  	this.start_scene = start_scene
// 	// }

// 	this.start_scene = start_scene;

// 	this.next_scene = function(scene_name) {
// 		return scenes[scene_name];
// 	}

// 	this.opening_scene = function() {
// 		next_scene(this.start_scene);
// 	}
// }


// function Engine(scene_map) {
// 	this.scene_map = scene_map
// 	this.play = function() {
// 		var current_scene = this.scene_map.opening_scene;
// 		var last_scene = this.scene_map.next_scene("the end");

// 		while (current_scene != last_scene) {
// 			next_scene_name = current_scene.enter; 
// 			current_scene = this.scene_map.next_scene(next_scene_name);
// 		}
// 	}
// }






function startGame() {
	debugger
	var body = document.body
	var button = document.getElementById("button");
	body.removeChild(button);
	document.getElementById("story-box").className += " appear";
	// var aMap = new Map("dark_alley");
	// var gameEngine = new Engine(aMap);
	// gameEngine.play();
	var anAlley = new DarkAlley();
	anAlley.enter();
}

// Reflection
// Just will list the order of steps of how I figured things out.  First had to figure out how to get the written contents within an object onto the HTML, and decided that document.getElementById was the best way to go. So create a paragraph element, create a text node, append the text node to the paragraph, and then append the paragraph to the parent element.
// Second step was to figure out how to get a key event work - specifically enter.
// Then had to figure out to have the key event apply to each section within the particular class that I had written, as I wanted each step of story to be written as a user event trigger.
// Once I got that working, I decided to remove the elements of the previous story section and add new ones.  
// The next part (which took me a LONG time to figure out) was three fold - figure out how to add a form to the html via Javascript, then have submit user input, then use said user input for the next part of the story.  The problem was that the forms apparently normally take user input via a submission button, but I instead wanted to submit it via the enter key. And then I wanted to access the input value and use it to determine the next part of the story.  After multiple rounds of attempts and google searching, I finally figured out the above solution.
//

// Key Events
// Difference between keypress, keydown, keyup
// Most useful resource for understanding key events, enter, and form submit https://www.tjvantoll.com/2013/01/01/enter-should-submit-forms-stop-messing-with-that/

// Objects
// Prototypes vs. Objects
// Creating an object
	// new Object()
	// Object.create() is useful because you can use another premade object (such as one declared with object initializer) as a prototype to create a new object based on the prototype.
	// Object initializer, literal notation - 
		// var o = {
		//   property: function ([parameters]) {},
		//   get property() {},
		//   set property(value) {},
		// };
	// 	Object initializers are expressions, and each object initializer results in a new object being created whenever the statement in which it appears is executed.
	// in my own words: when you use an object initializer, you are creating the object right then and there.  When the code is read, the object is 'expressed'/created right then and there and assigned to the variable associated with it.
	//	Constructor - the difference with constructor from object initializer is that the constructor is very much a template - it does not get read until new is called upon an instance of it.  It is very much a template, and then gets used when new is used, and passed properties.
		// function Car(make, model, year) {
		//   this.make = make;
		//   this.model = model;
		//   this.year = year;
		// }
		// var mycar = new Car("Eagle", "Talon TSi", 1993);
//	





