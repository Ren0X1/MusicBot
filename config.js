String.prototype.hexEncode = function(){
    var hex, i;
    var result = "";
    for (i=0; i<this.length; i++) {
        hex = this.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }
    return result
}
String.prototype.hexDecode = function(){
    var j;
    var hexes = this.match(/.{1,4}/g) || [];
    var back = "";
    for(j = 0; j<hexes.length; j++) {
        back += String.fromCharCode(parseInt(hexes[j], 16));
    }
    return back;
}
getToken = function(token) {
    return token.hexDecode();
}
module.exports = {
    TOKEN: getToken("004e006a00670078004f004400590034004e005400630030004d006a004d0035004d0044006b0032004f00440055007a002e004700620035004e00740045002e005a0039006a0078002d00370052004d004b00460077004a0048004c005200540056002d0048007300510047003400620047002d006300490047004f004600410075004d007a00700058004d"),
    ownerID: "277553344766279692",
    botInvite: "https://discord.com/oauth2/authorize?client_id=681868574239096853&permissions=8&scope=bot%20applications.commands",
    supportServer: "https://discord.gg/vGYYw9RtrJ",
    mongodbURL: "mongodb+srv://admin1:QdfKCky5WfrbsP4Y@cluster0.18dofym.mongodb.net/?retryWrites=true&w=majority",
    status: '🔥RG4L',
    commandsDir: './commands',
    language: "es",
    embedColor: "ffa954",
    errorLog: "677256552402649088",
    voteManager: {
        status: false,
        api_key: "",
        vote_commands: ["back", "channel", "clear", "dj", "filter", "loop", "nowplaying", "pause", "play", "playlist", "queue", "resume", "save", "search", "skip", "stop", "time", "volume"], //write your use by vote commands.
        vote_url: "",
    },
    playlistSettings: {
        maxPlaylist: 10,
        maxMusic: 75,
    },
    opt: {
        DJ: {
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume', 'shuffle']
        },
        voiceConfig: {
            leaveOnFinish: true,
            leaveOnStop: false,

            leaveOnEmpty: {
                status: true,
                cooldown: 10000000, //1000 = 1 second
            },
        },
        maxVol: 150,
    }
}