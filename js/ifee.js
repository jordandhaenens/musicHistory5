"use strict";

var Loader = (function(){

	var songJSON = [];
	var songJSON2 = [];

	return {

		retrieveJSON: function(callBack){
			$.ajax({
				url: "./songs.json"
			}).done(function(songsFromJSON){
				songJSON = songsFromJSON;
				$.ajax({
					url: "./songs2.json"
				}).done(function(songsFromJSON2){
					songJSON2 = songsFromJSON2;
					let array = songJSON2.songs;
					$.each(array, function(index, currVal){
						songJSON.songs.push(currVal);
					});
					callBack(songJSON);
				});
			});
		},

		addToLibrary: function(newSongObj){
			songJSON.songs.push(newSongObj);
			console.log("addToLibrary", songJSON);
		},

		showSongs: function(callBack){
			callBack(songJSON);
		}

	};


})();
