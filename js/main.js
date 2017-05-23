"use strict";
/**************************
Load JSON
**************************/
function callBack(json){
	let str = "";
	let array = json.songs;
	$.each(array, (index, currVal) =>{
		// console.log("index", index, "currVal", currVal);
		str += `<h3>${currVal.title}</h3>
				<p>${currVal.artist} | ${currVal.album} | </p><hr>`;
	});
	writeFromJSON(str);
}
//
Loader.retrieveJSON(callBack);
/**************************
End
**************************/
/**************************
Write To DOM
**************************/
function writeFromJSON(string){
	var newDiv = `<div class="song">${string}</div>`;
	$("#box2").html(newDiv);
}
/**************************
End
**************************/
/**************************
Add New Music via UI
**************************/
function addNewMusic(){
	let title = $('#inputSong').val();
	let artist = $("#inputArtist").val();
	let album = $("#inputAlbum").val();
	let songObj = {"title": title, "artist": artist, "album": album};

	Loader.addToLibrary(songObj);
	Loader.showSongs(callBack);

	clearTextInputs();
}
//
function clearTextInputs(){
	$("#inputSong").val("");
	$("#inputArtist").val("");
	$("#inputAlbum").val("");
}
/**************************
End
**************************/
/**************************
Switch Between Views
**************************/

$("#homePage").on("click", () => {
	$("#inputView").addClass("hidden");
	$("#box1").removeClass("hidden");
});
//
$("#viewMusic").on("click", () => {
	$("#inputView").addClass("hidden");
	$("#box1").removeClass("hidden");
	$("#box2").removeClass("hidden");
});
//
$("#addMusic").on("click", () => {
	$("#box1").addClass("hidden");
	$("#inputView").removeClass("hidden");
});
//
$("#addToLibrary").on("click", () => {
	addNewMusic();
	$("#box2").removeClass("hidden");
});
/**************************
End
**************************/













