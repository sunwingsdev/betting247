import React  from "react";
import SportsSection from "../../Components/MultiMarkets/SportsSection/SportsSection";
import SmallDeviceMarkets from "../../Components/MultiMarkets/SmallDeviceMarkets/SmallDeviceMarkets";


const MultiMarkets = () => {
 
  
  const cricketData = [
    [
      {
        id: 1,
        teams: "Women's Premier League",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 3.39,
          team2: 2.3,
          team3: 5.16,
          team4: 3.59,
        },
      },
      {
        id: 2,
        teams: "ICC Champions Trophy",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 9.1,
          team2: 5.8,
        },
      },
      {
        id: 3,
        teams: "Titans Women v Garden Route...",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 4,
        teams: "Border v Northern Cape",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 5,
        teams: "Perth Scorchers SRL T20 v Brisbane...",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 6,
        teams: "Delhi Royals v Gujarat Samp..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 7,
        teams: "North West Dragons v Knights",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.54,
          team2: 1.55,
          team3: 2.8,
          team4: 2.86,
        },
      },
      {
        id: 8,
        teams: "Western Province v Lions",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.04,
          team2: 2.16,
          team3: 1.87,
          team4: 1.95,
        },
      },
      {
        id: 9,
        teams: "Durban Super Giants SRL T20 v Pretoria..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 10,
        teams: "Mumbai Indians Women v Delhi..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.04,
          team2: 2.06,
          team3: 1.94,
          team4: 1.95,
        },
      },
      {
        id: 11,
        teams: "Quetta Gladiators SRL T20 v Multan..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 12,
        teams: "Joburg Super Kings SRL T20 v Mi Cape..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 13,
        teams: "Lucknow Super Giants SRL T20 v Chennai..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
      },
      {
        id: 14,
        teams: "Oman v Namibia",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.2,
          team2: 2.34,
          team3: 1.75,
          team4: 1.83,
        },
      },
      {
        id: 15,
        teams: "Zimbabwe v Ireland",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.97,
          team2: 1.99,
          team3: 2.02,
          team4: 2.04,
        },
      },
      {
        id: 16,
        teams: "Gujarat Giants Women v UP Warriorz..",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.95,
          team2: 2.1,
          team3: 1.91,
          team4: 2.06,
        },
      },
    ],
  ];
  const soccerData = [
    [
      {
        id: 1,
        teams: " Hearts v Rangers I",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.86,
          team2: 2.88,
          team3: 2.28,
          team4: 2.3,
          team5: 4.7,
          team6: 4.8,
        },
      },
      {
        id: 2,
        teams: " PSIS Semarang v PSM Makassar ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.07,
          team2: 1.08,
          team3: 16.5,
          team4: 20,
          team5: 60,
          team6: 90,
        },
      },
      {
        id: 3,
        teams: " FK Radnicki 1923 v Mladost Lucani",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.69,
          team2: 1.76,
          team3: 3.4,
          team4: 3.6,
          team5: 7.4,
          team6: 7.8,
        },
      },
      {
        id: 4,
        teams: " Hradec Kralove v Bohemians 1905 ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.61,
          team2: 1.65,
          team3: 4.2,
          team4: 4.4,
          team5: 6.4,
          team6: 6.8,
        },
      },
      {
        id: 5,
        teams: " Nurnberg v SSV Ulm ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.94,
          team2: 2.96,
          team3: 3.65,
          team4: 3.7,
          team5: 2.56,
          team6: 2.58,
        },
      },
      {
        id: 6,
        teams: " Unterhaching v Saarbrucken ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.75,
          team2: 1.76,
          team3: 4.1,
          team4: 4.2,
          team5: 5.2,
          team6: 5.3,
        },
      },
      {
        id: 7,
        teams: " Schalke 04 v Karlsruhe ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.22,
          team2: 2.3,
          team3: 4.1,
          team4: 4.3,
          team5: 3.1,
          team6: 3.2,
        },
      },
      {
        id: 8,
        teams: " Gent v KFCO Beerschot Wilrijk ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.82,
          team2: 1.83,
          team3: 3.95,
          team4: 4,
          team5: 4.9,
          team6: 5,
        },
      },
      {
        id: 9,
        teams: " Jahn Regensburg v Hamburger SV ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.72,
          team2: 1.75,
          team3: 3.8,
          team4: 3.95,
          team5: 5.9,
          team6: 6,
        },
      },
      {
        id: 10,
        teams: " Radnicki Nis v FK Jedinstvo Ub ",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.8,
          team2: 2.82,
          team3: 3.65,
          team4: 3.7,
          team5: 2.66,
          team6: 2.7,
        },
      },
    ],
  ];

  const tennisData = [
    [
      {
        id: 1,
        teams: "Kovalik v P Kotov",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.78,
          team2: 2.81,
          team3: 1.56,
          team4: 1.57,
        },
      },
      {
        id: 2,
        teams: "Fucsovics v Vavassori",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.14,
          team2: 1.15,
          team3: 7.8,
          team4: 8.2,
        },
      },
      {
        id: 3,
        teams: "Da Merida v Kukushkin",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 50,
          team2: 100,
          team3: 1.01,
          team4: 1.02,
        },
      },
      {
        id: 4,
        teams: "Lu Nardi v Uchiyama",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.21,
          team2: 1.24,
          team3: 5.1,
          team4: 5.6,
        },
      },
      {
        id: 5,
        teams: "Atmane v Ot Virtanen",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.14,
          team2: 2.18,
          team3: 1.86,
          team4: 1.88,
        },
      },
      {
        id: 6,
        teams: "Bot Van de Zandschulp v Er Kirkin",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.1,
          team2: 1.12,
          team3: 9.4,
          team4: 11,
        },
      },
      {
        id: 7,
        teams: "Misolic v Da Rincon",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.22,
          team2: 2.26,
          team3: 1.8,
          team4: 1.82,
        },
      },
      {
        id: 8,
        teams: "Carreno Busta v Ben Hassan",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 1.21,
          team2: 1.22,
          team3: 5.6,
          team4: 5.8,
        },
      },
      {
        id: 9,
        teams: "A Anisimova v Ostapenko",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 2.34,
          team2: 2.38,
          team3: 1.73,
          team4: 1.74,
        },
      },
      {
        id: 10,
        teams: "Ziz Bergs v Humbert",
        status: "In-Play",
        categories: ["Fancy", "BookMaker", "Live"],
        odds: {
          team1: 3.3,
          team2: 3.35,
          team3: 1.42,
          team4: 1.43,
        },
      },
    ],
  ];
 
  return (
    <div className="bg-inPlayBgColor">
     <SportsSection />
      {/* for small device */}
     <SmallDeviceMarkets cricketData={cricketData[0]} soccerData={soccerData[0]} tennisData={tennisData[0]}/>
     {/* {false && <SportsHeader  soccerDataByTime={soccerData} tennisDataByTime={tennisData} />} */}


    </div>
  );
};

export default MultiMarkets;
