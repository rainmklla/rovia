// Single source of truth for all destination data.
// HomePage's Featured section is DERIVED from this array (top 4 by rating) —
// never hard-code a second list anywhere else.

const destinations = [
    {
        id: 1,
        name: "Kyoto",
        country: "Japan",
        region: "Asia",
        rating: 4.9,
        price: 1450,
        tagline: "A thousand temple gates, one long exhale.",
        description:
            "Kyoto keeps its past close: vermilion torii tunnels climb the hillside at Fushimi Inari, geiko still cross the stone lanes of Gion at dusk, and moss gardens hold silence like a held breath. Spend mornings in temples before the crowds, afternoons in tea houses, and evenings following the smell of grilled skewers through Pontocho alley.",
        bestSeason: "Late March – April, November",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    },
    {
        id: 2,
        name: "Lisbon",
        country: "Portugal",
        region: "Europe",
        rating: 4.7,
        price: 980,
        tagline: "Yellow trams, blue tiles, salt air.",
        description:
            "Lisbon is built on seven hills, which means every street eventually rewards you with a viewpoint over terracotta rooftops and the wide Tagus river. Ride the rattling Tram 28, get lost in the Alfama's tiled facades, and end the day with a plate of grilled sardines and a glass of vinho verde.",
        bestSeason: "April – June, September – October",
        image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200&q=80",
    },
    {
        id: 3,
        name: "Queenstown",
        country: "New Zealand",
        region: "Oceania",
        rating: 4.8,
        price: 2100,
        tagline: "The adventure capital, alpine lake edition.",
        description:
            "Ringed by the jagged Remarkables and fronted by Lake Wakatipu, Queenstown is where you bungee jump before lunch and eat a Fergburger after. Beyond the adrenaline, the surrounding Otago region hides some of the country's best wineries and hiking trails with views that stop conversations mid-sentence.",
        bestSeason: "December – February, June – August (ski season)",
        image: "https://i.pinimg.com/736x/30/0a/20/300a2003dc3f081777cd992a8bed9b88.jpg",
    },
    {
        id: 4,
        name: "Marrakech",
        country: "Morocco",
        region: "Africa",
        rating: 4.5,
        price: 760,
        tagline: "A maze that rewards getting lost.",
        description:
            "The medina of Marrakech is a puzzle of narrow souks selling spices, leather, and lanterns, all funneling toward the constant theatre of Jemaa el-Fnaa square. Escape the heat in a shaded riad courtyard, then watch the square transform at night into a sprawl of food stalls, drummers, and storytellers.",
        bestSeason: "March – May, September – November",
        image: "https://images.unsplash.com/photo-1553603227-2358aabe821e?w=1200&q=80",
    },
    {
        id: 5,
        name: "Reykjavik",
        country: "Iceland",
        region: "Europe",
        rating: 4.6,
        price: 1680,
        tagline: "Basecamp for fire, ice, and northern lights.",
        description:
            "Reykjavik itself is compact and colorful, but its real job is being the launch pad for Iceland's Ring Road: geothermal lagoons, black sand beaches, and glaciers a few hours' drive away. In winter the aurora dances overhead; in summer the sun barely sets at all.",
        bestSeason: "June – August (midnight sun), September – March (northern lights)",
        image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1200&q=80",
    },
    {
        id: 6,
        name: "Cusco",
        country: "Peru",
        region: "South America",
        rating: 4.7,
        price: 890,
        tagline: "Inca stonework and Andean sky.",
        description:
            "Once the capital of the Inca Empire, Cusco sits at over 3,400 meters, its colonial churches built directly atop precision-cut Inca foundations. It's the gateway to the Sacred Valley and Machu Picchu, but the city alone — with its markets, chicherias, and mountain light — deserves a slow few days.",
        bestSeason: "May – September (dry season)",
        image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1200&q=80",
    },
    {
        id: 7,
        name: "Kraków",
        country: "Poland",
        region: "Europe",
        rating: 4.4,
        price: 640,
        tagline: "A medieval square that never quite goes quiet.",
        description:
            "Kraków's Old Town survived the 20th century largely intact, leaving a Gothic square, a Renaissance cloth hall, and a hilltop castle to wander between pierogi stops. It's also the closest major city to Auschwitz-Birkenau and the Wieliczka Salt Mine, both essential, sobering day trips.",
        bestSeason: "May – September",
        image: "https://images.unsplash.com/photo-1600166898405-da9535204843?w=1200&q=80",
    },
    {
        id: 8,
        name: "Ubud",
        country: "Indonesia",
        region: "Asia",
        rating: 4.6,
        price: 720,
        tagline: "Rice terraces, river gorges, slower mornings.",
        description:
            "Ubud trades Bali's beaches for jungle and terraced rice paddies that step down the hillsides in bright green ribbons. Mornings mean yoga or a walk through the Campuhan Ridge; afternoons mean wood-carving workshops or a swim in a jungle river gorge.",
        bestSeason: "April – October (dry season)",
        image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=80",
    },
    {
        id: 9,
        name: "Banff",
        country: "Canada",
        region: "North America",
        rating: 4.8,
        price: 1320,
        tagline: "Turquoise lakes under jagged granite.",
        description:
            "Set inside Canada's first national park, Banff is surrounded by peaks that turn glacial lakes an almost unreal shade of turquoise. Hike to Lake Agnes for tea with a view, drive the Icefields Parkway, and keep an eye out for elk wandering straight through town.",
        bestSeason: "June – September, December – March (ski season)",
        image: "https://images.unsplash.com/photo-1609825488888-3a766db05542?w=1200&q=80",
    },
    {
        id: 10,
        name: "Hoi An",
        country: "Vietnam",
        region: "Asia",
        rating: 4.5,
        price: 540,
        tagline: "Lantern light on the Thu Bon river.",
        description:
            "Hoi An's ancient trading-port streets are closed to cars after dark, when silk lanterns take over and the river fills with tiny floating candles. By day, get a suit tailored in 24 hours, cycle out to rice paddies, or take a cooking class at a market stall.",
        bestSeason: "February – April",
        image: "https://i.pinimg.com/736x/ad/77/a0/ad77a0fcfc2af3fcfd2c8caf684f419f.jpg",
    },
    {
        id: 11,
        name: "Santorini",
        country: "Greece",
        region: "Europe",
        rating: 4.7,
        price: 1580,
        tagline: "Whitewashed cliffs above a drowned volcano.",
        description:
            "Santorini's villages cling to the rim of a caldera formed by one of history's largest volcanic eruptions. Beyond the postcard sunsets over Oia, the island has black- and red-sand beaches, ancient Akrotiri's buried ruins, and vineyards grown low against the wind.",
        bestSeason: "May – June, September – October",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=80",
    },
    {
        id: 12,
        name: "Cape Town",
        country: "South Africa",
        region: "Africa",
        rating: 4.6,
        price: 1180,
        tagline: "Table Mountain, two oceans, one city.",
        description:
            "Cape Town sits where the Atlantic and Indian Oceans nearly meet, overlooked by the flat-topped bulk of Table Mountain. Spend a day in the Cape Winelands, another spotting penguins at Boulders Beach, and an evening watching the sun drop into the sea from Signal Hill.",
        bestSeason: "November – March",
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80",
    },
];

export default destinations;