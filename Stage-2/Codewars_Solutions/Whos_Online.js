//Who's Online?
let whosOnline = (friendsList) => {
    let online = [];
    let offline = [];
    let away = [];

    friendsList.forEach((friend) => {
        if (friend['status'] === 'online') {
            if (friend['lastActivity'] > 10) {
                away.push(friend['username']);
            } else {
                online.push(friend['username']);
            }
        }
        if (friend['status'] === 'offline') {
            offline.push(friend['username']);
        }
        if (friend['status'] === 'away') {
            away.push(friend['username']);
        }
    })

    let statusGroups = {};
    if (online.length > 0) statusGroups.online = online;
    if (offline.length > 0) statusGroups.offline = offline;
    if (away.length > 0) statusGroups.away = away;

    return statusGroups;
}
