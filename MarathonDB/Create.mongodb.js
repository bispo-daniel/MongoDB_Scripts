use("MarathonDB");

db.createCollection("athletes");

db.athletes.insertMany(
    [
        {
            rank: 1,
            team: "Kenya",
            name: "Eliud Kipchoge",
            time: "2:08:38"
        },
        {
            rank: 2,
            team: "Netherlands",
            name: "Abdi Nageeye",
            time: "2:09:58"
        },
        {
            rank: 3,
            team: "Belgium",
            name: "Bashir Abdi",
            time: "2:10:00"
        },
        {
            rank: 4,
            team: "Kenya",
            name: "Lawrence Cherono",
            time: "2:10:02"
        },
        {
            rank: 5,
            team: "Spain",
            name: "Ayad Lamdassem",
            time: "2:10:16"
        },
        {
            rank: 6,
            team: "Japan",
            name: "Suguru Osako",
            time: "2:10:41"
        },
        {
            rank: 7,
            team: "Tanzania",
            name: "Alphonce Felix Simbu",
            time: "2:11:35"
        },
        {
            rank: 8,
            team: "United States of America",
            name: "Galen Rupp",
            time: "2:11:41"
        },
        {
            rank: 9,
            team: "Morocco",
            name: "Othmane El Goumri",
            time: "2:11:58"
        },
        {
            rank: 10,
            team: "Belgium",
            name: "Koen Naert",
            time: "2:12:13"
        },
        {
            rank: 11,
            team: "Morocco",
            name: "Mohamed Reda El Aaraby",
            time: "2:12:22"
        },
        {
            rank: 12,
            team: "France",
            name: "Nicolas Navarro",
            time: "2:12:50"
        },
        {
            rank: 13,
            team: "Israel",
            name: "Maru Teferi",
            time: "2:13:02"
        },
        {
            rank: 14,
            team: "Eritrea",
            name: "Goitom Kifle",
            time: "2:13:22"
        },
        {
            rank: 15,
            team: "Colombia",
            name: "Jeison Alexander Suarez",
            time: "2:13:29"
        },
        {
            rank: 16,
            team: "EOR",
            name: "Tachlowini Gabriyesos",
            time: "2:14:02"
        },
        
        {
            rank: 17,
            team: "France",
            name: "Morhad Amdouni",
            time: "2:14:33"
        },
        {
            rank: 18,
            team: "Morocco",
            name: "Hamza Sahli",
            time: "2:14:48"
        },
        {
            rank: 19,
            team: "China",
            name: "Shaohui Yang",
            time: "2:14:58"
        },
        {
            rank: 20,
            team: "Italy",
            name: "Eyob Ghebrehiwet Faniel",
            time: "2:15:11"
        },
        {
            rank: 21,
            team: "Spain",
            name: "Daniel Mateo",
            time: "2:15:21"
        },
        {
            rank: 22,
            team: "Eritrea",
            name: "Yohanes Ghebregergis",
            time: "2:15:34"
        },
        {
            rank: 23,
            team: "Denmark",
            name: "Abdi Hakin Ulad",
            time: "2:15:50"
        },
        {
            rank: 24,
            team: "Australia",
            name: "Liam Adams",
            time: "2:15:51"
        },
        {
            rank: 25,
            team: "Bahrain",
            name: "El Hassan Elabbassi",
            time: "2:15:56"
        },
        {
            rank: 26,
            team: "Germany",
            name: "Richard Ringer",
            time: "2:16:08"
        },    
        {
            rank: 27,
            team: "Estonia",
            name: "Tiidrek Nurme",
            time: "2:16:16"
        },    
        {
            rank: 28,
            team: "Israel",
            name: "Girmaw Amare",
            time: "2:16:17"
        },    
        {
            rank: 29,
            team: "United States of America",
            name: "Jacob Riley",
            time: "2:16:26"
        },    
        {
            rank: 30,
            team: "Germany",
            name: "Amanal Petros",
            time: "2:16:33"
        },
        {
            rank: 31,
            team: "Argentina",
            name: "Eulalio Munoz",
            time: "2:16:35"
        },
        {
            rank: 32,
            team: "China",
            name: "Jianhua Peng",
            time: "2:16:39"
        },
        {
            rank: 33,
            team: "Spain",
            name: "Javier Guerra",
            time: "2:16:42"
        },
        {
            rank: 34,
            team: "South Africa",
            name: "Elroy Gelant",
            time: "2:16:43"
        },
        {
            rank: 35,
            team: "Eritrea",
            name: "Oqbe Kibrom Ruesom",
            time: "2:16:57"
        },
        {
            rank: 36,
            team: "New Zealand",
            name: "Zane Robertson",
            time: "2:17:04"
        },
        {
            rank: 37,
            team: "Israel",
            name: "Haimro Alame",
            time: "2:17:17"
        },
        {
            rank: 38,
            team: "Poland",
            name: "Adam Nowicki",
            time: "2:17:19"
        },
        {
            rank: 39,
            team: "Burundi",
            name: "Olivier Irabaruta",
            time: "2:17:44"
        },
        {
            rank: 40,
            team: "Norway",
            name: "Sondre Nordstad Moen",
            time: "2:17:59"
        },
        {
            rank: 41,
            team: "United States of America",
            name: "Abdi Abdirahman",
            time: "2:18:27"
        },
        {
            rank: 42,
            team: "Namibia",
            name: "Tomas Hilifa Rainhold",
            time: "2:18:28"
        },
        {
            rank: 43,
            team: "Paraguay",
            name: "Derlys Ayala",
            time: "2:18:34"
        },
        {
            rank: 44,
            team: "Uganda",
            name: "Fred Musobo",
            time: "2:18:39"
        },
        {
            rank: 45,
            team: "France",
            name: "Sidi-Hassan Chahdi",
            time: "2:18:40"
        },
        {
            rank: 46,
            team: "Canada",
            name: "Ben Preisner",
            time: "2:19:27"
        },
        {
            rank: 47,
            team: "Italy",
            name: "Yassine El Fathaoui",
            time: "2:19:44"
        },
        {
            rank: 48,
            team: "Canada",
            name: "Trevor Hofbauer",
            time: "2:19:57"
        },
        {
            rank: 49,
            team: "South Korea",
            name: "Jungsub Shim",
            time: "2:20:36"
        },
        {
            rank: 50,
            team: "Germany",
            name: "Hendrik Pfeiffer",
            time: "2:20:43"
        },
        {
            rank: 51,
            team: "Uganda",
            name: "Filex Chemongesi",
            time: "2:20:53"
        },
        {
            rank: 52,
            team: "Turkey",
            name: "Yavuz Agrali",
            time: "2:21:00"
        },
        {
            rank: 53,
            team: "Argentina",
            name: "Joaquin Arbe",
            time: "2:21:15"
        },
        {
            rank: 54,
            team: "Great Britain",
            name: "Christopher Thompson",
            time: "2:21:29"
        },
        {
            rank: 55,
            team: "Mongolia",
            name: "Byambajav Tseveenravdan",
            time: "2:21:32"
        },
        {
            rank: 56,
            team: "Mexico",
            name: "Jose Luis Santana Marin",
            time: "2:21:32"
        },
        {
            rank: 57,
            team: "China",
            name: "Guojian Dong",
            time: "2:21:35"
        },
        {
            rank: 58,
            team: "Ireland",
            name: "Kevin Seaward",
            time: "2:21:45"
        },
        {
            rank: 59,
            team: "Belgium",
            name: "Dieter Kersten",
            time: "2:22:06"
        },
        {
            rank: 60,
            team: "Peru",
            name: "Cristhian Pacheco",
            time: "2:22:12"
        },
        {
            rank: 61,
            team: "Austria",
            name: "Peter Herzog",
            time: "2:22:15"
        },
        {
            rank: 62,
            team: "Japan",
            name: "Shogo Nakamura",
            time: "2:22:23"
        },
        {
            rank: 63,
            team: "Poland",
            name: "Arkadiusz Gardzielewski",
            time: "2:22:50"
        },
        {
            rank: 64,
            team: "New Zealand",
            name: "Malcolm Hicks",
            time: "2:23:12"
        },
        {
            rank: 65,
            team: "Mexico",
            name: "Juan Pacheco",
            time: "2:23:41"
        },
        {
            rank: 66,
            team: "Australia",
            name: "Brett Robinson",
            time: "2:24:04"
        },
        {
            rank: 67,
            team: "Lesotho",
            name: "Khoarahlane Seutloali",
            time: "2:25:03"
        },
        {
            rank: 68,
            team: "Esthonia",
            name: "Roman Fosti",
            time: "2:25:37"
        },
        {
            rank: 69,
            team: "Brazil",
            name: "Paulo Roberto Paula",
            time: "2:26:08"
        },
        {
            rank: 70,
            team: "Denmark",
            name: "Thijs Nijhuis",
            time: "2:26:59"
        },
        {
            rank: 71,
            team: "Ireland",
            name: "Paul Pollock",
            time: "Paul Pollock"
        },
        {
            rank: 72,
            team: "Canada",
            name: "Cameron Levins",
            time: "2:28:43"
        },
        {
            rank: 73,
            team: "Japan",
            name: "Yuma Hattori",
            time: "2:30:08"
        },
        {
            rank: 74,
            team: "Mexico",
            name: "Jesus Arturo Esparza",
            time: "2:31:51"
        },
        {
            rank: 75,
            team: "Panama",
            name: "Jorge Castelblanco",
            time: "2:33:22"
        },
        {
            rank: 76,
            team: "Honduras",
            name: "Ivan Zarco Alvarez",
            time: "2:44:36"
        }
    ]
)