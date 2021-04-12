const ranking = [{
    name: "Arsenal",
    points: 99,
    GD: 45,
},
{
    name: "Manchester United",
    points: 60,
    GD: 29,
},
{
    name: "Chelsea",
    points: 75,
    GD: 39,
},
{
    name: "Liverpool",
    points: 88,
    GD: 40,
},
{
    name: "Everton",
    points: 88,
    GD: 42,
},
{
    name: "Yellowstar",
    points: 88,
    GD: 42,
},
{
    name: "Ashley",
    points: 88,
    GD: 42,
},
{
    name: "West Ham",
    points: 88,
    GD: 42,
},
];

ranking.sort(function sosanh(club1, club2) {
    if (club1.points > club2.points) {
        return -1;
    } else if (club1.points < club2.points) {
        return 1;
    } else if (club1.points == club2.points) {
        if (club1.GD < club2.GD) {
            return -1;
        }
        if (club1.GD > club2.GD) {
            return 1
        }
        if (club1.GD == club2.GD) {
            if (club1.name < club2.name) {
                return -1;
            }
            if (club1.name > club2.name) {
                return 1;
            }
        }
    } 
});
console.log('Bảng xếp hạng Premier League: ', ranking);
