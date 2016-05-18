function DarkAlley() {
	this.enter = function() {
		document.body.style.backgroundImage = "url('img/alley1.jpg')";
		
		var storyBox = document.getElementById("story-box");
		var p1 = document.createElement("p");
		var p2 = document.createElement("p");
		var node1 = document.createTextNode("Detective Bronson wakes up, if that's a word for what it is. It's more like staggering out of the blessed murky unconsciousness into a hang-over that starts in his head and ends somewhere in his lower back. He's sprawled on the cold ground of an abandoned alley. The streetlights at the end prick his eyes as the world swims into view. He'd rather go back to unconsciousness. Bronson takes stock. His gun is gone, he has a blistering headache, and he is most definitely out of cigarettes. \"Damn,\" he says softly.");
		var node2 = document.createTextNode("To continue the story, press enter.");
		p1.appendChild(node1);
		p2.appendChild(node2);
		storyBox.appendChild(p1);
		storyBox.appendChild(p2);

		window.addEventListener("keydown", checkKey, false);
		
		function checkKey(e){
			if (e.keyCode =="13") {
				storyBox.removeChild(p1);
				storyBox.removeChild(p2);
				var p3 = document.createElement("p");
				var node3 = document.createTextNode("He gets up, and the look of something wet on the wall catches his eye. It's blood.");
				var p4 = document.createElement("p");
				var node4 = document.createTextNode("Action(s): investigate");

				p3.appendChild(node3);
				p4.appendChild(node4);
				storyBox.appendChild(p3);
				storyBox.appendChild(p4);

				var form = document.createElement("form");
				var input = document.createElement("input");
				storyBox.appendChild(form);
				input.type = "text";
				input.name = "action";
				input.id = "user-input"
				form.appendChild(input);

				input.addEventListener("keydown", checkKey, false);
				function checkKey(e) {
					if (e.keyCode=13) {
						document.form.submit();
						return false;
						var action = document.getElementById('txt_name').value;
						if (action == "investigate") {
							
						}
					} else {
						return true;
					};
				};
			};
		};	
	};
}


// method to create paragraphs
//
// method to create and insert forms
// container that holds all of the data 
// object that holds the sequence/user interactivity bit

function newDarkAlley() {
	var data = {
		{	section: 1, 
			type: paragraph,
			number: 2, 
			"Detective Bronson wakes up, if that's a word for what it is. It's more like staggering out of the blessed murky unconsciousness into a hang-over that starts in his head and ends somewhere in his lower back. He's sprawled on the cold ground of an abandoned alley. The streetlights at the end prick his eyes as the world swims into view. He'd rather go back to unconsciousness. Bronson takes stock. His gun is gone, he has a blistering headache, and he is most definitely out of cigarettes. \"Damn,\" he says softly.", 
			"To continue the story, press enter."
		},
		{}

	}
}

function writeParagraph(data) {
	for (var i = 0, i < length.data, i++) {
		var p = document.createElement("p");
		var node = document.createTextNode(data[i]);
		p.appendChild(node);
	}
	//for each paragraph in the data, create an element p, create a text node, and append the node to the paragraph.  Return that.  

}


function startGame() {
	var body = document.body
	var button = document.getElementById("button");
	body.removeChild(button);
	document.getElementById("story-box").className += " appear";

	var anAlley = new DarkAlley();
	anAlley.enter();
}
