module.exports = {
    TOKEN: "NjgxODY4NTc0MjM5MDk2ODUz.Gq8Rdw.Ru2RxU8meVEXxt1Plt7GdHY8yg8jFdLVLz7kV4",
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