// Completed by Hanah Yendler for DBC Phase 0.

function Scene() {
	this.enter = function() {
	};
}



function Detective() { 
	this.weapon = "";

	this.addWeapon = function(givenWeapon) {
		this.weapon = givenWeapon;
	};

	this.whichWeapon = function() {
		return this.weapon;
	};
}


function Death() < Scene
	@@quips = [
			"What's better than an a live detective that doesn't do his job is a dead detective.",
			"No wonder you didn't get into the police academy in the first place, detective.",
			"You're no better at detective work than a slab of gorgonzola.",
			"Before you enter the pearly gates, it is my pleasure to inform you that your detective work, or lack-there-of, is that of a popeyed bleater."
		]
	def enter()
		puts "You have died."
		puts @@quips[rand(0..(@@quips.length-1))]
		sleep 5
		return "dark_alley"
	end
end


function DarkAlley() {
	this.enter = function() {
		document.getElementById("story-box").innerHTML = "Detective Bronson wakes up, if that's a word for what it is. It's more like staggering out of the blessed murky unconsciousness into a hang-over that starts in his head and ends somewhere in his lower back. He's sprawled on the cold ground of an abandoned alley. The streetlights at the end prick his eyes as the world swims into view. He'd rather go back to unconsciousness. Bronson takes stock. His gun is gone, he has a blistering headache, and he is most definitely out of cigarettes. \"Damn,\" he says softly.";
		document.getElementById("story-box").innerHTML = "He gets up, and the look of something wet on the wall catches his eye. It's blood.";
		document.getElementById("story-box").innerHTML =  "Action(s): investigate";

		//action = $stdin.gets.chomp

		// if action == "investigate"
		// 	puts "Bronson takes a step closer to investigate the blood spatter. It is most definitely fresh.  Kneeling down, he finds casings on the ground - .45's and with the little groove on one side that only his gun makes. Did he shoot someone? He can't remember. He swallows down the panic like cheap whiskey and glances around. There's a man in a white waiter's jacket smoking at the end of the alley."
		// 	sleep 2
		// 	puts "Action(s): interrogate"

		// 	action = $stdin.gets.chomp
			
		// 	if action == "interrogate"
		// 		puts "\"Hey, you. Did you see anything that just happened?\" asks Bronson."
		// 		sleep 2
		// 		puts "The waiter eyes him, and slowly puffs his cigarette."
		// 		sleep 2
		// 		puts "\"Also, any possibility you got an extra one of those?\" Bronson adds."
		// 		sleep 2
		// 		puts "\"Nope, fresh ou',\" the waiter states lazily. Bronson can see the bulge of a pack in his pocket. Goddamn liar."
		// 		sleep 2
		// 		puts "\"Well,\" he growls, \"You better start talking before I make trouble for your restaurant right over there and have this alley crawling with cops.\""
		// 		sleep 2
		// 		puts "\"Fine. I 'eard some scuffing and a gunshot so came ou'side, and saw you passed ou' on the ground.  And I decided tha was a perfect time for a smoke\"."
		// 		sleep 2
		// 		puts "\'Asshole,\' thinks Bronson. \"Thank you,\" he mutters, and trudges out of the alley."
		// 		return "corner_store"
		// 	end
		// end
	};
}

class CornerStore < Scene
	def enter()
		"Detective Bronson rounds the corner of the alley, and finds himself in front of a neon-trimmed corner store. He enters."
		"The clerk looks up, and yelps at the sight of the bloodied and bruised detective. He jumps over the counter and starts to run for the door."
		"Action(s): pursue, do nothing"

		action = $stdin.gets.chomp

		if action == "pursue"

			puts "Bronson easily sidelines the clerk to the floor with a well-placed kick."

			puts "\"Wha-whatever you've come for, I d-don't have it-t-t.  I already p-paid the boss,\" the clerk stammers."

			puts "Bronson sighs heavily. \"I'm not here to hurt you. You know me, I don't remember you. Help me out here and I won't make trouble.\""

			puts "\"W-well I saw you yesterday with Lucky Luciano's gal.  She was hangin' off your arm like it was the only thing holding her up, and you bought some old number seven from me.  Then from what next I heard from some guys down the street, there was an altercation down that allley and now Lucky Lou is dead.  But there is definitely a new boss, and the old boss's second is out to get yah.\" Lucky Luciano is the crime lord of North Beach---pardon, was. Now someone else is in charge of the Italians."

			puts "Bronson spits out a curse and digs a few crumpled bills out of his pocket. He'll need protection. \"You sell anything useful here?\""

			puts "\"Yeah, I got something.  How much yah got?\""

			puts "Bronson flips through the bills. \"Not much\"."

			puts "\"You can get either a gun, knife, or a pack of cigarettes.\""

			puts "Action(s): buy gun, buy knife, buy cigarettes"

			action = $stdin.gets.chomp
				if action == "buy gun"
					$detective_bronson.add_weapon("gun")
					puts "Bronson buys a gun."
				elsif action == "buy knife"
					$detective_bronson.add_weapon("knife")
					puts "Bronson buys a knife"
				elsif action == "buy cigarettes"
					$detective_bronson.add_weapon("cigarettes")
					puts "Bronson buys a pack of cigarettes"
				else 
					puts "You haven't bought anything. Try again, Detective!"
					return "corner_store"
				end
			puts "\"Any idea where Lucky's dame has gone?\" Bronson asks."
			sleep 2
			puts "\"She puts up at the Palace Hotel,\" the clerk says quickly, obviously eager to get him out of there."
			sleep 2
			puts "\"Alright, stay out of trouble.\" Bronson leaves."
			return "palace_hotel"
		elsif action == "do nothing"
			puts "Bronson sighs, picks up a pack of cigarettes, puts one to his lips, and walks out of the store."
			return "dark_alley" #dark_alley_return?  A separate class?
		else
			puts "Well, you gotta do something about it, you're a detective!" #good place to put some random quips, maybe a local method?
			return "dark_alley" #dark alley_alley_return?  A separate class?
		end
	end
}

#class DarkAlleyReturn?

class PalaceHotel < Scene
	def enter()
		sleep 2
		puts "Detective Bronson arrives at the hotel. It's pretty shabby for a place named 'Palace', but then those kinds usually are. The doorman eyes him snootily all the same, but a few minutes chatting gets him the dame's---named Gia---room number. Lucky for him with this body-wide headache that it's only four flights of stairs. He knocks on the door and a quavering voice says so low he can barely hear, \"Who is it?\" "
		sleep 2
		puts "Detective Bronson thinks for a moment and goes with, \"Honey, it's me, Bronson. I'm here.\" He hears a gasp of relief and the door flings open to a redhead who looks none the worse with tears staining her face. Bronson digs his hands into his pockets because tears on a woman like that make him want to do something stupid, like hold her. Gia---this must be Gia--wraps a hand around his lapel and tugs him inside. Her other hand is busy clutching a knife."
		puts "Action(s): interrogate"

		action = $stdin.gets.chomp

		if action == "interrogate"
			puts "\"What's all this, honey?\" Bronson gently takes the knife from her and sets it down on a table."
			sleep 2
			puts "\"Oh my goodness, I-I though you might be Armo.\" Armo is the name of Lucky Lou's second-in-command---now first.\"I didn't want to hurt anyone, I s-swear,\" she mumbles and then starts crying again. \"I didn't mean to kill him, Bronson. It was an accident!\""
			sleep 2
			puts "Bronson tries not to gasp in relief. He didn't kill anyone, not this time. He takes Gia's arm and pulls her gently to the couch. \"I woke up in the alleyway with my gun gone and nothin' doing. I don't remember anything. Why'd you shoot him?\" "
			sleep 2
			puts "\"He saw me with you and started yelling at us, he came at us like a wild animal! And you stepped up but he knocked you down flat, so I took your gun and told him to  back off. He just laughed and said he'd give me a beating to remember. I just couldn't take it anymore---\" she cries, and flings herself into his arms."
			sleep 2
			puts "\"Now Armo might kill me and I'm terrified. Darling, will you protect me?\""
			puts "Action(s): refuse, agree"

			action = $stdin.gets.chomp

				if action == "refuse"
					puts "Gia pulls herself away, her face hardening and all signs of tears gone."
					sleep 2
					puts "\"Well, I'll just have to protect myself,\" she says. Quicker than he can understand, she takes the knife, and slits his throat. He has almost no time to gasp, his hand pressed to his throat before the darkness drips over his vision."
					return death
				elsif action == "agree"
					puts "\"W-well, Armo is now the new head of the mob, and has asked me to deliver documents to him on the Golden Gate Bridge by sunrise, but I'm afraid it's a trap to get me, and if I don't go, he'll hunt me down.\""
					sleep 2
					puts "Bronson holds her tightly, smelling her sweet hair and says \"I would be happy to go in your place.\""
					sleep 2
					puts "\"Oh would you? You would be saving my life! There is only one more problem: Lou left the documents in a safe in the inner room of the hotel, but I don't know how to get them out. The only clue I was given that it's the same answer when the 3 digits are added or multiplied.\""
					sleep 2
					puts "\"I'll take care of it for you,\" Bronson promises.  He gets up and goes into the inner room."
					return "safe_room"
				else 
					puts "Seriously, you're a detective.  Start sleuthing!"
					return "palace_hotel"
				end
		else 
			puts "Well, you gotta do something about it, you're a detective!"
			return "palace_hotel"
		end
	end
end

class Safe < Scene
	def enter()
		sleep 2
		puts "You get 5 guesses to unlock the safe.  It is a 3 digit combination, with each digit between 1-9. The order does not matter, but enter the numbers with no spaces inbetween (ie \"111\", NOT \"1, 1, 1\")."
		counter = 0
		while counter < 3
			array = []
			puts "Enter a number"
			number = $stdin.gets.chomp
			array = number.split("")
			new_array = []
			array.each { |i| new_array.push(i.to_i) }
			sum = 0
			new_array.each { |s| sum += s}
			puts sum
			multiply = 1
			new_array.each { |m| multiply *= m}
			puts multiply
			if sum == multiply
				puts "The safe is unlocked!  Bronson grabs the documents and goes out the living room, only to find Gia mysteriously gone from the hotel room. He pulls a cigarette from the pack on the table and leaves the hotel to go the Golden Gate Bridge. In any case, he still has to make the drop."
				break
			else
				counter += 1
				puts "You have #{3-counter} guesses left."
				#need to write something if the code does not get broken
			end
		end
		return "golden_gate_bridge"
	end
end

class GoldenGateBridge < Scene
	def enter()
		sleep 2
		puts "The light is turning paler and watery as Bronson pulls up to the Golden Gate Bridge, the high-flying monolith that guards San Francisco. The wind is flipping back and forth, and he tucks his collar up high. Bronson approaches the meeting point in the bridge, an alcove on the sidewalk between two red sheet-metal walls of the first suspension tower.  He sees two figures struggling and then one of them hoists the other over the edge of the bridge. As long legs and the silhouette of high heels are revealed, Bronson realizes it's Armo and Gia."
		sleep 2
		puts "Bronson runs to them. \"Stop, stop right there!  I have your documents!\" yells Bronson."
		sleep 2
		puts "Armo sneers. \"What documents? Who gives a damn? I'm going to kill this two-faced trash!\""
		sleep 2
		puts "\"Put her down!\" Bronson says, and reaches into his coat pocket."
		sleep 2
		puts "Action(s): fight, dodge"

		action = $stdin.gets.chomp

		win = 0

		if action == "fight"
			weapon = $detective_bronson.which_weapon
			if weapon == "gun"
				win = 1
				puts "Bronson takes out the gun and shoots Armo dead."
				puts "\"Well, that was an easy shot,\" he mutters."
			elsif weapon == "knife"
				puts "Bronson knows he doesn't have as much of a chance with a knife, but he takes it out anyways."
				random_gen = Random.new
				random1 = random_gen.rand(0..1.0)
				random2 = random_gen.rand(0..0.5)
				if random1 < 0.5
					puts "Bronson takes a slash, but Armo is too quick.  Armo manages a good slug at his face and Bronson feels his nose break and a bit woozy."
					puts "Action(s): fight, dodge"

					action = $stdin.gets.chomp

					if action == "fight"
						if random1 + random2 < 0.5
							puts "Bronson attempts again, but Armo manages get underneath him into a headlock.  Bronson closes his eyes, knowing it's over. Armo pulls with a quick snap, and it's all over."
							win = 0
						else 
							puts "Bronson, bleeding heavily from the face, manages to avoid a swing from Armo, gets underneath his guard, and put the knife straight into his kidney."
							win = 1
						end
					elsif action == "dodge"
						puts "Bronson takes a step back, but Armo manages get underneath him into a headlock.  Bronson closes his eyes, knowing it's over. Armo pulls with a quick snap, and it's all over."
						win = 0
					else
						puts "Bronson does nothing, like the great idiot lummox he is. Armo drops Gia and throws Bronson over to join her."
						win = 0
					end
				else
					puts "Bronson manages to avoid a swing from Armo, gets underneath his guard, and put the knife straight into his kidney."
					win = 1
				end
			elsif weapon == "cigarettes"
				puts "Bronson reaches for his coat pocket and realizes he only has his pack of cigarettes.  He stares into Armo's murderous eyes as he realizes that this is the end.  Armo takes a swing, makes contact with Bronson's head, and last thing Bronson hears is the sound of his own skull crushing into itself."
				win = 0
			else 
				"Bronson does nothing. Everyone dies."
				return "death"
			end
		elsif action == "dodge"
			puts "Bronson takes a step back, but Armo manages get underneath him into a headlock.  Bronson closes his eyes, knowing it's over. Armo pulls with a quick snap, and it's all over."
			win = 0
		else 
			puts ""
		end

		if win == 1
			sleep 2
			puts "Bronson shakes himself, leaving Armo's body on the ground. He moves to comfort Gia, only to notice that she is smiling slightly, and is clutching the document packet."
			sleep 2
			puts "\"Thank you for dispatching him. I try to never do my own dirty work,\" she drawls."
			sleep 2
			puts "\"Dirty work?\" Bronson asks quizzically."
			sleep 2
			puts "\"Why yes, see?  I dispatched Luciano in order to take over his business, and the only thing left in my way was getting a hold of these documents and getting rid of Armo, and you did both.  And only because of your help, I'm not going to kill you.\"  She takes out a gun---his gun, Bronson's own damn gun--and shoots him in the shoulder. As he falls to his knees, swearing, she steps around him. He hears the revving of a car engine a moment later. The cherry red Chrysler slows as it passes him. \"I'll give you a good recommendation to my friends!\" Gia tells him, and speeds away to Marin County."
			sleep 2
			puts "\"Damn,\" whispers Bronson. \"I could really use a pack of cigarettes.\""
			sleep 2
			puts "The End"
			return "the end"
		elsif win == 0
			"You died, you sorry sucker."
			return "death"
		else
			puts "Hm, error, something got messed up in the storyline"
		end
	end
end


class Map
	@@scenes = {
		'dark_alley' => DarkAlley.new,
		'corner_store' => CornerStore.new,
		'palace_hotel' => PalaceHotel.new,
		"safe_room" => Safe.new,
		"golden_gate_bridge" => GoldenGateBridge.new,
		"death" => Death.new
	}

	def initialize(start_scene)
	 	@start_scene = start_scene
	end

	def next_scene(scene_name)
		return @@scenes[scene_name]
	end

	def opening_scene
		next_scene(@start_scene)
	end
end


class Engine

	def initialize(scene_map)
		@scene_map = scene_map
	end

	def play
		
		current_scene = @scene_map.opening_scene #DarkAlley.new
		last_scene = @scene_map.next_scene("the end")

		while current_scene != last_scene
			next_scene_name = current_scene.enter 
			current_scene = @scene_map.next_scene(next_scene_name)
		end

		# current_scene.enter
	end
end





$detective_bronson = Detective.new
a_map = Map.new("dark_alley")
game_engine = Engine.new(a_map)
game_engine.play




