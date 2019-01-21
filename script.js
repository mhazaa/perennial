//highlight inherits width and height
var ch = canvas.height;
var lakeText = document.getElementsByClassName('lake');

var clearText = function(){
	for(var i=0; i<lakeText.length; i++){
		lakeText[i].style.opacity = 0;
	}
}

var cutoff = new classes.Actor('black', -ch*7, 0, ch*7, ch, 1);

var sky = new classes.Actor(imgs.sky(), 0, 0, 0, ch, 0);
var clouds = new classes.Actor(imgs.clouds(), 0, 0, 0, ch/1.3, 0);
var sun = new classes.Actor(imgs.sun(), ch/2.13, ch/3.57, 0, ch/1.88, 0);
var hills = new classes.Actor(imgs.hills(), 0, ch/1.9, 0, ch/2.7, 0.05);
//var fire = new classes.Actor(imgs.fire(), ch*1.8, ch/1.6, 0, ch/4.3, 1);
var main = new classes.Actor(imgs.main(), 0, 0, 0, ch, 1);
var sea = new classes.Actor(imgs.sea(), 0, ch/1.43, 0, ch/3.3, 1);

var doorFrame = new classes.Actor(imgs.doorFrame(), ch*12, 0, 0, ch, 1);
var doorFrame2 = new classes.Actor(imgs.doorFrame2(), ch*12, 0, 0, ch, 1);
var doorFrame3 = new classes.Actor(imgs.doorFrame3(), ch*12, 0, 0, ch, 1);
var doorFrameBack = new classes.Actor(imgs.doorFrameBack(), ch*12, 0, 0, ch, 1);
var doorFrameBack2 = new classes.Actor(imgs.doorFrameBack2(), ch*12, 0, 0, ch, 1);
var doorFrameBack3 = new classes.Actor(imgs.doorFrameBack3(), ch*12, 0, 0, ch, 1);

var houseNew = new classes.Actor(imgs.houseNew(), ch*12.132, 0, 0, ch, 1);
var houseOld = new classes.Actor(imgs.houseOld(), ch*12.132, 0, 0, ch, 1);
var houseOld2 = new classes.Actor(imgs.houseOld2(), ch*12.132, 0, 0, ch, 1);
var door = new classes.Actor(imgs.door(), ch*12.05, ch/2.15, 0, ch/2, 1);

var boat = new classes.Actor(imgs.boat(), ch/0.31, ch/1.44, 0, ch/4.31, 1);
var boatWithChar = new classes.Character(imgs.boatWithChar(), ch/0.31, ch/1.65, 0, ch/3.125, 1);

var bench = new classes.Actor(imgs.bench(), 0, ch/1.46, 0, ch/8.69, 1);
var frontTree = new classes.Actor(imgs.frontTree(), ch/3, 0, 0, ch, 1.4);
var forefront = new classes.Actor(imgs.forefront(), 0, 0, 0, ch, 2);
var forefront2 = new classes.Actor(imgs.forefront2(), ch*16, 0, 0, ch, 2);
var forefrontGrass = new classes.Actor(imgs.forefrontGrass(), 0, ch/1.33, 0, ch/4, 2.5);
var birds = new classes.Actor(imgs.birds(), ch/3, ch/4.16, 0, ch/11.36, 0);
var sunReflection = new classes.Actor(imgs.sunReflection(), ch/2.2, ch/1.9, 0, ch/2.63, 0);

var guyChar = new classes.Character(imgs.guyCharAtlas(), ch/2.85, ch/2, 0, ch/2.28, 1, guyCharAtlas);
var grass = new classes.Actor(imgs.grass(), 0, ch/1.33, 0, ch/4, 1);
var grandmaChar = new classes.Character(imgs.grandmaCharAtlas(), ch*13.6, ch/2, 0, ch/2.28, 1, grandmaCharAtlas);

var note = new classes.Actor(imgs.note(), ch/15, ch/6, 0, ch/1.5, 0);
var photoFrame = new classes.Actor(imgs.photoFrame(), ch/15, ch/10, 0, ch/1.3, 0);

var post1 = new classes.Actor(imgs.post1(), 0, 0, 0, ch, 0);
var post2 = new classes.Actor(imgs.post2(), 0, ch/2.2, 0, ch/2, 0);
var post3 = new classes.Actor(imgs.post3(), ch/6.15, 0, 0, ch/1.31, 0);
var post4mist = new classes.Actor(imgs.post4mist(), ch/20, 0, 0, ch/1.31, 0.6);

var boatButton = new classes.Highlighter('white', ch/0.32, ch/1.44, ch/20, ch/20, 1);
var seaCollision = new classes.CollisionBox('red', ch/0.32, ch/1.44, ch/20, ch/4, 1);
var boatEndButton = new classes.Highlighter('white', ch*7.3, ch/1.44, ch/20, ch/20, 1);
var seaEndCollision = new classes.CollisionBox('red', ch*7.3, ch/1.44, ch/20, ch/4, 1);
var doorButton = new classes.Highlighter('white', ch*12, ch/1.44, ch/20, ch/20, 1);
var doorCollision = new classes.CollisionBox('red', ch*12, ch/1.44, ch/10, ch/4, 1);
var timeMachineButton = new classes.Highlighter('white', ch*13.2, ch/1.4, ch/20, ch/20, 1);
var soloTableButton = new classes.Highlighter('white', ch*15.5, ch/1.44, ch/20, ch/20, 1);
var photoFrameButton = new classes.Highlighter('white', ch*12.5, ch/3.8, ch/20, ch/20, 1);
var noteButton = new classes.Highlighter('white', ch*13.6, ch/1.50, ch/20, ch/20, 1);

var startLine = new classes.Actor('red', 0, 0, ch/4, ch/4, 1);

var allComponents = [sky, clouds, sun, birds, hills, sea, bench, sunReflection, main, houseOld2, houseOld, houseNew, doorFrameBack3, doorFrameBack2, doorFrameBack, door, boat, boatWithChar, guyChar, grass, grandmaChar, doorFrame3, doorFrame2, doorFrame, frontTree, forefront2, note, photoFrame, post4mist, forefront, forefrontGrass, post1, post2, post3,
										boatButton, seaCollision, boatEndButton, seaEndCollision, doorCollision, doorButton, timeMachineButton, soloTableButton, photoFrameButton, noteButton, cutoff, startLine];

//default plater character
guyChar.playerController = true;
//hidden elements
startLine.opacity = 0;
grandmaChar.opacity = 0;
soloTableButton.opacity = 0;
note.opacity = 0;
photoFrame.opacity = 0;
boatWithChar.opacity = 0;
soloTableButton.fill = 'rgba(0,0,0,0)';
soloTableButton.clickable = false;
//post processing
post1.transparencyMode = 'overlay';
post1.opacity = 1;
post2.transparencyMode = 'overlay';
post2.opacity = 0.5;
post3.transparencyMode = 'overlay';
post3.opacity = 1;
post4mist.transparencyMode = 'overlay';
post4mist.opacity = 0.9;
grass.opacity = 0.7;



boat.update = function(){
	boat.x = boatWithChar.x;
}

birds.update = function(){
	this.x+= 0.01 * delta;
}

var mainMusicPlaying = false;
boatButton.whenClicked = function(){
	if (!mainMusicPlaying){
		mainMusicPlaying = true;
		audioPlayer.fadeIn(sounds.music(), true);
	}

	if (playerCharacter == guyChar){
		guyChar.opacity = 0;
		boat.opacity = 0;
		boatWithChar.opacity = 1;

		lakeText[0].style.opacity = 1;
		setTimeout(function(){
			if(playerCharacter == boatWithChar){
				lakeText[0].style.opacity = 0;

				setTimeout(function(){
					lakeText[1].style.opacity = 1;
					setTimeout(function(){
						lakeText[1].style.opacity = 0;
					},20000);
				},3000);
			}
		},10000);

	} else if (playerCharacter == boatWithChar){
		guyChar.target = null;
		guyChar.opacity = 1;
		boat.opacity = 1;
		boatWithChar.opacity = 0;
		guyChar.x = boatButton.x - ch/4;
		clearText();
	}
	guyChar.switchCharacters();
	boatWithChar.switchCharacters();
}

boatEndButton.whenClicked = function(){
	if (playerCharacter == boatWithChar){
		clearText();
		boat.opacity = 1;
		boatWithChar.opacity = 0;
		guyChar.x = boatEndButton.x + ch/3;
		guyChar.opacity = 1;
		clearText();

		setTimeout(function(){
			lakeText[2].style.opacity = 1;
			setTimeout(function(){
				lakeText[2].style.opacity = 0;
			},17000);
		},3000);

	}
	else if (playerCharacter == guyChar){
		guyChar.opacity = 0;
		boat.opacity = 0;
		boatWithChar.opacity = 1;

		clearText();
	}

	guyChar.switchCharacters();
	boatWithChar.switchCharacters();
}

//door
doorButton.clickMode = 'double';
var cachedDoorWidth;
doorButton.whenClicked = function(){
	cachedDoorWidth = door.w;
	doorCollision.disableCollision();
	//open door
	door.animation = function(){
		if (door.w > 0){
			door.w -= 0.10 * delta;
		}
	}
	//text
	clearText();
	setTimeout(function(){
		lakeText[3].style.opacity = 1;
	},2000);
	setTimeout(function(){
		lakeText[3].style.opacity = 0;
	},12000);

}
doorButton.whenClicked2 = function(){
	doorCollision.enableCollision();
	//close door
	door.animation = function(){
		if (door.w <= cachedDoorWidth){
			door.w += 0.10 * delta;
		}
	}
}

function switchToPast(){
	//text
	document.getElementsByClassName('year')[0].style.opacity = 1;
	setTimeout(function(){
		document.getElementsByClassName('year')[0].style.opacity = 0;
	},5000);
	setTimeout(function(){
		lakeText[8].style.opacity = 1;
	},3000);
	//graphics
	houseNew.animation = function(){
		this.fadeOut(0.2, 'slow');
	}
	doorFrameBack.animation = function(){
		this.fadeOut(0.2, 'slow');
	}
	doorFrame.animation = function(){
		this.fadeOut(0.2, 'slow');
	}
	guyChar.animation = function(){
		this.fadeOut(0.2, 'slow');
	}
	grandmaChar.animation = function(){
		this.fadeIn(1, 'slow');
	}
	soloTableButton.fill = 'white';
	soloTableButton.clickable = true;
	noteButton.fill = 'rgba(0,0,0,0)';
	photoFrameButton.fill = 'rgba(0,0,0,0)';
	noteButton.clickable = false;
	photoFrameButton.clickable = false;
}
function switchToPresent(){
	//text
	lakeText[9].style.opacity = 1;
	setTimeout(function(){
		lakeText[9].style.opacity = 0;
	},20000);
	//graphics
	houseNew.animation = function(){
		this.fadeIn(1, 'slow');
	}
	doorFrameBack.animation = function(){
		this.fadeIn(1, 'slow');
	}
	doorFrame.animation = function(){
		this.fadeIn(1, 'slow');
	}
	guyChar.animation = function(){
		this.fadeIn(1, 'slow');
	}
	grandmaChar.animation = function(){
		this.fadeOut(0, 'slow');
	}
	soloTableButton.fill = 'rgba(0,0,0,0)';
	soloTableButton.clickable = false;
	noteButton.fill = 'white';
	photoFrameButton.fill = 'white';
	noteButton.clickable = true;
	photoFrameButton.clickable = true;
}
//time machine
timeMachineButton.whenClicked = function(){
	clearText();

	if (playerCharacter == guyChar){
		switchToPast();
	} else if (playerCharacter == grandmaChar){
		switchToPresent();
	}
	guyChar.switchCharacters();
	grandmaChar.switchCharacters();
}
//solo table button
soloTableButton.clickMode = 'double';
soloTableButton.whenClicked = function(){
	clearText();
	lakeText[5].style.opacity = 1;
	grandmaChar.animation = function(){
		this.fadeOut(0, 'slow');
	}
	houseNew.animation = function(){
		this.fadeOut(0, 'slow');
	}
	doorFrameBack.animation = function(){
		this.fadeOut(0, 'slow');
	}
	doorFrame.animation = function(){
		this.fadeOut(0, 'slow');
	}
	houseOld.animation = function(){
		this.fadeOut(0, 'slow');
	}
	doorFrameBack2.animation = function(){
		this.fadeOut(0, 'slow');
	}
	doorFrame2.animation = function(){
		this.fadeOut(0, 'slow');
	}
}

soloTableButton.whenClicked2 = function(){
	grandmaChar.animation = function(){
		this.fadeIn(1, 'slow');
	}

	houseOld.animation = function(){
		this.fadeIn(1, 'slow');
	}
	doorFrameBack2.animation = function(){
		this.fadeIn(1, 'slow');
	}
	doorFrame2.animation = function(){
		this.fadeIn(1, 'slow');
	}

	//houseNew.animation = function(){
	//	this.fadeOut(0.2, 'slow');
	//}

	//text
	clearText();
	/*
	lakeText[6].style.opacity = 1;
	setTimeout(function(){
		clearText();
	},10000);
	*/
}
//note
noteButton.clickMode = 'double';
noteButton.whenClicked = function(){
	clearText();
	note.animation = function(){
		this.fadeIn(1, 'slow');
	}
}
//photo frame
photoFrameButton.clickMode = 'double';
photoFrameButton.whenClicked = function(){
	photoFrame.animation = function(){
		this.fadeIn(1, 'slow');
	}

	clearText();
	lakeText[4].style.opacity = 1;
}
//removing pop-ups when clicking anywhere
window.addEventListener('mouseup', function(){
	if(photoFrameButton.clickNum == 2){
		photoFrameButton.clickNum = 1;
		photoFrame.animation = function(){
			this.fadeOut(0, 'slow');
		}
		lakeText[4].style.opacity = 0;
	}

	if(noteButton.clickNum == 2){
		noteButton.clickNum = 1;
		note.animation = function(){
			this.fadeOut(0, 'slow');
		}
		//text
		lakeText[7].style.opacity = 1;
		setTimeout(function(){
			lakeText[7].style.opacity = 0;
		},25000);
	}
});

//when starting
document.getElementById('begin').addEventListener('click',function(){
	audioPlayer.playNloop(sounds.forrest());
	document.getElementById('startMenu').style.display = 'none';
	document.getElementById('title').classList.add('showTitle');
});



function isInt(value) {
  return !isNaN(value) &&
         parseInt(Number(value)) == value &&
         !isNaN(parseInt(value, 10));
}

var frame = 0;
guyChar.stateMachine = function(){
	if (this.state == 'walkingRight'){
		frame+=0.25;
		if(frame>=17) frame=1;
		if (isInt(frame)){
			this.frame = frame;
		}
	} else if (this.state == 'walkingLeft'){
		this.direction = 'left';
		frame+=0.25;
		if(frame>=34 || frame<17) frame=18;
		if (isInt(frame)){
			this.frame = frame;
		}
	}
	else {
		if(this.direction=='right'){
			this.frame = 0;
		} else {
			this.frame = 17
		}
	}
}

grandmaChar.direction = 'left';
grandmaChar.stateMachine = function(){
	if(this.direction=='right'){
		this.frame = 1;
	} else {
		this.frame = 0
	}
}
