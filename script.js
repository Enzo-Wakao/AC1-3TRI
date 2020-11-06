const itens = //Cuidado com as virgulas!!!!!!!!!
[
    {
        musica: "Crash! Gourmet Race",
        jogo: "Kirby Series" 
    },
    {
        musica: "King Dedede Battle",
        jogo: "Kirby Series"
    },
    {
        musica: "Masked Dedede",
        jogo: "Kirby Series" 
    },
    {
        musica: "Green Greens",
        jogo: "Kirby Series" 
    },
    {
        musica: "Candy Mountain",
        jogo: "Kirby Series" 
    },
    {
        musica: "The Adventure Begins",
        jogo: "Kirby Series" 
    },
    {
        musica: "Heavy Lobster's Theme",
        jogo: "Kirby Series" 
    },
    {
        musica: "Squeak Squad Theme",
        jogo: "Kirby Series" 
    },
    {
        musica: "Floral Fields",
        jogo: "Kirby Series" 
    },
    {
        musica: "Fountain Of Dreams",
        jogo: "Kirby Series" 
    },
    {
        musica: "Float Islands",
        jogo: "Kirby Super Star Ultra" 
    },
    {
        musica: "Bubbly Clouds",
        jogo: "Kirby Super Star Ultra"
    },
    {
        musica: "Battle with the Boss",
        jogo: "Kirby Super Star Ultra" 
    },
    {
        musica: "Dyna Blade (Title)",
        jogo: "Kirby Super Star Ultra" 
    },
    {
        musica: "Galacta Knight Battle",
        jogo: "Kirby Super Star Ultra" 
    },
    {
        musica: "Vs Marx",
        jogo: "Kirby Super Star Ultra" 
    },
    {
        musica: "Computer Virus Battle",
        jogo: "Kirby Super Star Ultra" 
    },
    {
        musica: "Crystal Field Area",
        jogo: "Kirby Super Star Ultra" 
    },
    {
        musica: "Minecart Area",
        jogo: "Kirby Super Star Ultra" 
    },
    {
        musica: "My Friend and the Setting Sun",
        jogo: "Kirby Super Star Ultra" 
    },
    {
        musica: "Overworld 1",
        jogo: "Super Mario" 
    },
    {
        musica: "Overworld 2",
        jogo: "Super Mario"
    },
    {
        musica: "Overworld Mario World",
        jogo: "Super Mario" 
    },
    {
        musica: "Overworld New Super Mario Bros",
        jogo: "Super Mario" 
    },
    {
        musica: "Underground Theme",
        jogo: "Super Mario" 
    },
    {
        musica: "Bob-omb Battlefield",
        jogo: "Super Mario" 
    },
    {
        musica: "Gusty Garden Galaxy",
        jogo: "Super Mario" 
    },
    {
        musica: "Bowser's Theme - Super Mario 64",
        jogo: "Super Mario" 
    },
    {
        musica: "King Kaliente",
        jogo: "Super Mario" 
    },
    {
        musica: "Cool, Cool Mountain",
        jogo: "Super Mario"
    },
    {
        musica: "DS Delfino Square",
        jogo: "Mario Kart" 
    },
    {
        musica: "Wario's Gold Mine",
        jogo: "Mario Kart"
    },
    {
        musica: "Coconut Mall",
        jogo: "Mario Kart" 
    },
    {
        musica: "Mushroom Gorge",
        jogo: "Mario Kart" 
    },
    {
        musica: "Moo Moo Meadows",
        jogo: "Mario Kart" 
    },
    {
        musica: "Luigi Circuit & Mario Circuit",
        jogo: "Mario Kart" 
    },
    {
        musica: "Electrodome",
        jogo: "Mario Kart" 
    },
    {
        musica: "Waluigi Pinball",
        jogo: "Mario Kart" 
    },
    {
        musica: "Toad's factory",
        jogo: "Mario Kart" 
    },
    {
        musica: "Funky Stadium",
        jogo: "Mario Kart" 
    },
    {
        musica: "Megalovania",
        jogo: "Undertale" 
    },
    {
        musica: "Bonestroule",
        jogo: "Undertale"
    },
    {
        musica: "Metal Crusher",
        jogo: "Undertale" 
    },
    {
        musica: "Waterfall",
        jogo: "Undertale" 
    },
    {
        musica: "Dummy!",
        jogo: "Undertale" 
    },
    {
        musica: "Hopes and Dreams",
        jogo: "Undertale" 
    },
    {
        musica: "ASGORE",
        jogo: "Undertale" 
    },
    {
        musica: "Snowy",
        jogo: "Undertale" 
    },
    {
        musica: "Ghost Fight",
        jogo: "Undertale" 
    },
    {
        musica: "sans.",
        jogo: "Undertale" 
    },
    {
        musica: "Don't Deal With the Devil",
        jogo: "Cuphead" 
    },
    {
        musica: "Funfair Fever",
        jogo: "Cuphead"
    },
    {
        musica: "Clip Joint Calamity",
        jogo: "Cuphead" 
    },
    {
        musica: "Funhouse Frazzle",
        jogo: "Cuphead" 
    },
    {
        musica: "Carnival Kerfuffle",
        jogo: "Cuphead" 
    },
    {
        musica: "Aviary Action",
        jogo: "Cuphead" 
    },
    {
        musica: "Sugarland Shimmy",
        jogo: "Cuphead" 
    },
    {
        musica: "Floral Fury",
        jogo: "Cuphead" 
    },
    {
        musica: "Ruse Of An Ooze",
        jogo: "Cuphead" 
    },
    {
        musica: "Botanic Panic",
        jogo: "Cuphead" 
    },
];

//Passaremos as informações como string
const lista = document.getElementById("lista");
const data = document.getElementById("data");

lista.style.fontFamily = "Arial";

function search() {
    lista.innerHTML = "";
    for (let i = 0; i < itens.length; i++) {

        if(itens[i].musica >= data.value){
            lista.innerHTML += 
            `
            <li>
                <p> Música: ${itens[i].musica} </p>
                <p> Jogo: ${itens[i].jogo} </p>
            </li
            `;
        }
    }
}