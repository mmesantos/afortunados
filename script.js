// Função para obter ícone baseado no nome da plataforma
function getPlatformIcon(platformName) {
  const name = platformName.toLowerCase()

  // Ícones específicos baseados no nome
  if (name.includes("tela")) return "📺"
  if (name.includes("baixo")) return "⬇️"
  if (name.includes("capa")) return "📖"
  if (name.includes("parabens")) return "🎉"
  if (name.includes("ceia")) return "🍽️"
  if (name.includes("sofa")) return "🛋️"
  if (name.includes("renas")) return "🦌"
  if (name.includes("flauta")) return "🎺"
  if (name.includes("cocl")) return "🥤"
  if (name.includes("bebida")) return "🍹"
  if (name.includes("gaita")) return "🪗"
  if (name.includes("peteca")) return "🏸"
  if (name.includes("suco")) return "🧃"
  if (name.includes("valeu")) return "👍"
  if (name.includes("fato")) return "📰"
  if (name.includes("eq")) return "⚖️"
  if (name.includes("estadio")) return "🏟️"
  if (name.includes("pais")) return "🌍"
  if (name.includes("aeroporto")) return "✈️"
  if (name.includes("relogio")) return "⏰"
  if (name.includes("cadeira")) return "🪑"
  if (name.includes("viola")) return "🎻"
  if (name.includes("farofa")) return "🌾"
  if (name.includes("drums")) return "🥁"
  if (name.includes("guitarra")) return "🎸"
  if (name.includes("ficha")) return "🎫"
  if (name.includes("alegrar")) return "😊"
  if (name.includes("bacana")) return "👌"
  if (name.includes("cataratas")) return "💧"
  if (name.includes("reserva")) return "🏞️"
  if (name.includes("cattleya")) return "🌺"
  if (name.includes("salada")) return "🥗"
  if (name.includes("escola")) return "🏫"
  if (name.includes("campo")) return "🌾"
  if (name.includes("peacock")) return "🦚"
  if (name.includes("pluma")) return "🪶"
  if (name.includes("gatinho")) return "🐱"
  if (name.includes("bife")) return "🥩"
  if (name.includes("ufal")) return "🎓"
  if (name.includes("rique")) return "👨"
  if (name.includes("bisco")) return "🍪"
  if (name.includes("cachaca")) return "🍶"
  if (name.includes("trello")) return "📋"
  if (name.includes("discus")) return "🐠"
  if (name.includes("waze")) return "🗺️"
  if (name.includes("uff")) return "🎓"
  if (name.includes("osklen")) return "👕"
  if (name.includes("ferias")) return "🏖️"
  if (name.includes("ufpr")) return "🎓"
  if (name.includes("buser")) return "🚌"
  if (name.includes("ifood")) return "🍕"
  if (name.includes("uemg")) return "🎓"
  if (name.includes("claro")) return "📱"
  if (name.includes("docura")) return "🍯"

  // Grupo VOY - PG Soft
  if (name.includes("foxes")) return "🦊"
  if (name.includes("bamboos")) return "🎋"
  if (name.includes("pottery")) return "🏺"
  if (name.includes("ivory")) return "🐘"
  if (name.includes("judo")) return "🥋"
  if (name.includes("grin")) return "😁"
  if (name.includes("coffeecat")) return "☕"
  if (name.includes("rowin")) return "🚣"
  if (name.includes("meteor")) return "☄️"
  if (name.includes("colinas")) return "⛰️"
  if (name.includes("chuva")) return "🌧️"
  if (name.includes("cheetah")) return "🐆"
  if (name.includes("skirt")) return "👗"
  if (name.includes("elegance")) return "💎"
  if (name.includes("dandelion")) return "🌼"
  if (name.includes("corrida")) return "🏃"
  if (name.includes("escalada")) return "🧗"
  if (name.includes("earphone")) return "🎧"
  if (name.includes("handball")) return "🤾"

  // Grupo W1
  if (name.includes("pinecone")) return "🌲"
  if (name.includes("nenufar")) return "🪷"
  if (name.includes("fungus")) return "🍄"
  if (name.includes("minecart")) return "⛏️"
  if (name.includes("fence")) return "🚧"
  if (name.includes("nightowl")) return "🦉"
  if (name.includes("highhee")) return "👠"
  if (name.includes("month")) return "📅"
  if (name.includes("corvo")) return "🐦‍⬛"
  if (name.includes("scarab")) return "🪲"
  if (name.includes("cello")) return "🎻"
  if (name.includes("auroras")) return "🌌"
  if (name.includes("bullion")) return "🥇"
  if (name.includes("whisley") || name.includes("whiskey")) return "🥃"
  if (name.includes("jar")) return "🫙"
  if (name.includes("bass")) return "🐟"
  if (name.includes("rum")) return "🍹"
  if (name.includes("volcanic")) return "🌋"
  if (name.includes("vodka")) return "🍸"
  if (name.includes("walrus")) return "🦭"
  if (name.includes("drumset")) return "🥁"
  if (name.includes("soju")) return "🍶"
  if (name.includes("tornado")) return "🌪️"
  if (name.includes("orca")) return "🐋"
  if (name.includes("sled")) return "🛷"
  if (name.includes("karate")) return "🥋"
  if (name.includes("koala")) return "🐨"
  if (name.includes("terno")) return "🤵"
  if (name.includes("hairpin")) return "📍"
  if (name.includes("glitter")) return "✨"
  if (name.includes("cavaleiro")) return "🏇"
  if (name.includes("elf")) return "🧝"
  if (name.includes("rugby")) return "🏉"
  if (name.includes("dive")) return "🤿"
  if (name.includes("shooting")) return "🎯"
  if (name.includes("curling")) return "🥌"
  if (name.includes("birthday")) return "🎂"
  if (name.includes("baseball")) return "⚾"
  if (name.includes("archery")) return "🏹"
  if (name.includes("pingpong")) return "🏓"
  if (name.includes("boxing")) return "🥊"
  if (name.includes("diving")) return "🤿"
  if (name.includes("running")) return "🏃"
  if (name.includes("patim")) return "⛸️"
  if (name.includes("skii")) return "⛷️"

  // Grupo FP
  if (name.includes("jeep")) return "🚙"
  if (name.includes("iphone")) return "📱"
  if (name.includes("princesa")) return "👸"
  if (name.includes("gemas")) return "💎"
  if (name.includes("audi")) return "🚗"
  if (name.includes("suv")) return "🚐"
  if (name.includes("mami")) return "👩"
  if (name.includes("porsche")) return "🏎️"
  if (name.includes("celine")) return "👜"
  if (name.includes("ysl")) return "💄"

  // Ícone padrão
  return "🎰"
}

// Dados dos grupos com informações expandidas
const groupsData = [
  {
    name: "Equipe 777",
    id: "equipe777",
    subtitle: "Grupo premium completo",
    description: "Acesso a plataformas verificadas com os melhores resultados.",
    links: [
      {
        url: "https://tela777.com/?id=450327372&currency=BRL&type=2",
        text: "TELA 777",
        launchDate: "13.01.2025",
      },
      {
        url: "https://baixo777.com/?id=100987448&currency=BRL&type=2",
        text: "BAIXO 777",
        launchDate: "09.01.2025",
      },
      {
        url: "https://capa777.com/?id=633459308&currency=BRL&type=2",
        text: "CAPA 777",
        launchDate: "06.01.2025",
      },
      {
        url: "https://parabens777.com/?id=321779390&currency=BRL&type=2",
        text: "PARABENS 777",
        launchDate: "02.01.2025",
      },
      {
        url: "https://ceia777.com/?id=755899785&currency=BRL&type=2",
        text: "CEIA 777",
        launchDate: "30.12.2024",
      },
      {
        url: "https://www.sofa777.org/?id=520195033&currency=BRL&type=2",
        text: "SOFA 777",
        launchDate: "26.12.2024",
      },
      {
        url: "https://renas777.com/?id=290567216&currency=BRL&type=2",
        text: "RENAS 777",
        launchDate: "23.12.2024",
      },
      {
        url: "https://flauta777.com/?id=727987798&currency=BRL&type=2",
        text: "FLAUTA 777",
        launchDate: "19.12.2024",
      },
      {
        url: "https://cocl777.com/?id=970473120&currency=BRL&type=2",
        text: "COCL 777",
        launchDate: "16.12.2024",
      },
      {
        url: "https://bebida777.com/?id=874839719&currency=BRL&type=2",
        text: "BEBIDAS 777",
        launchDate: "12.12.2024",
      },
      {
        url: "https://gaita777.com/?id=591570952&currency=BRL&type=2",
        text: "GAITA 777",
        launchDate: "09.12.2024",
      },
      {
        url: "https://peteca777.com/?id=381430288&currency=BRL&type=2",
        text: "PETECA 777",
        launchDate: "05.12.2024",
      },
      {
        url: "https://www.suco777.com/?id=528617044&currency=BRL&type=2",
        text: "SUCO 777",
        launchDate: "02.12.2024",
      },
      {
        url: "https://valeu777.com/?id=440546523&currency=BRL&type=2",
        text: "VALEU 777",
        launchDate: "28.11.2024",
      },
      {
        url: "https://fato777.com/?id=783126370&currency=BRL&type=2",
        text: "FATO 777",
        launchDate: "25.11.2024",
      },
      {
        url: "https://eq777.com/?id=808781767&currency=BRL&type=2",
        text: "EQ 777",
        launchDate: "22.11.2024",
      },
      {
        url: "https://estadio777.com/?id=507183639&currency=BRL&type=2",
        text: "ESTÁDIO 777",
        launchDate: "18.11.2024",
      },
      {
        url: "https://pais777.vip/?id=908144915&currency=BRL&type=2",
        text: "PAÍS 777",
        launchDate: "14.11.2024",
      },
      {
        url: "https://aeroporto777.com/?id=509389546&currency=BRL&type=2",
        text: "AEROPORTO 777",
        launchDate: "11.11.2024",
      },
      {
        url: "https://relogio777.com/?id=858240714&currency=BRL&type=2",
        text: "RELÓGIO 777",
        launchDate: "07.11.2024",
      },
      {
        url: "https://cadeira777.bet/?id=481903289&currency=BRL&type=2",
        text: "CADEIRA 777",
        launchDate: "04.11.2024",
      },
      {
        url: "https://viola777.bet/?id=241781434&currency=BRL&type=2",
        text: "VIOLA 777",
        launchDate: "31.10.2024",
      },
      {
        url: "https://farofa777.me/?id=738714161&currency=BRL&type=2",
        text: "FAROFA 777",
        launchDate: "28.10.2024",
      },
      {
        url: "https://drums777.cc/?id=305213247&currency=BRL&type=2",
        text: "DRUMS 777",
        launchDate: "24.10.2024",
      },
      {
        url: "https://guitarra777.com/?id=467291049&currency=BRL&type=2",
        text: "GUITARRA 777",
        launchDate: "21.10.2024",
      },
      {
        url: "https://ficha777.cc/?id=140461806&currency=BRL&type=2",
        text: "FICHA 777",
        launchDate: "17.10.2024",
      },
      {
        url: "https://alegrar777.vip/?id=774409410&currency=BRL&type=2",
        text: "ALEGRAR 777",
        launchDate: "14.10.2024",
      },
      {
        url: "https://bacana777.bet/?id=969624506&currency=BRL&type=2",
        text: "BACANA 777",
        launchDate: "10.10.2024",
      },
      {
        url: "https://cataratas777.bet/?id=476648874&currency=BRL&type=2",
        text: "CATARATAS 777",
        launchDate: "05.10.2024",
      },
      {
        url: "https://www.reserva777.vip/?id=698562112&currency=BRL&type=2",
        text: "RESERVA 777",
        launchDate: "03.10.2024",
      },
      {
        url: "https://cattleya777.bet/?id=639788258&currency=BRL&type=2",
        text: "CATTLEYA 777",
        launchDate: "30.09.2024",
      },
      {
        url: "https://salada777.bet/?id=879494270&currency=BRL&type=2",
        text: "SALADA 777",
        launchDate: "26.09.2024",
      },
      {
        url: "https://escola777.win/?id=278815783&currency=BRL&type=",
        text: "ESCOLA 777",
        launchDate: "23.09.2024",
      },
      {
        url: "https://campo777.com/?id=614984217&currency=BRL&type=2",
        text: "CAMPO 777",
        launchDate: "19.09.2024",
      },
      {
        url: "https://peacock777.com/?id=986063265&currency=BRL&type=2",
        text: "PEACOCK 777",
        launchDate: "16.09.2024",
      },
      {
        url: "https://pluma777.win/?id=910940839&currency=BRL&type=2",
        text: "PLUMA 777",
        launchDate: "12.09.2024",
      },
      {
        url: "https://gatinho777.win/?id=318693449&currency=BRL&type=2",
        text: "GATINHO 777",
        launchDate: "09.09.2024",
      },
      {
        url: "https://bife777.win/?id=436970692&currency=BRL&type=2",
        text: "BIFE 777",
        launchDate: "06.09.2024",
      },
      {
        url: "https://ufal777.com/?id=614325436&currency=BRL&type=2",
        text: "UFAL 777",
        launchDate: "02.09.2024",
      },
      {
        url: "https://rique777.com/?id=665659082&currency=BRL&type=2",
        text: "RIQUE 777",
        launchDate: "29.08.2024",
      },
      {
        url: "https://bisco777.cc/?id=282875805&currency=BRL&type=2",
        text: "BISCO 777",
        launchDate: "26.08.2024",
      },
      {
        url: "https://cachaca777.cc/?id=408527973&currency=BRL&type=2",
        text: "CACHAÇA 777",
        launchDate: "22.08.2024",
      },
      {
        url: "https://trello777.cc/?id=506970304&currency=BRL&type=2",
        text: "TRELLO 777",
        launchDate: "19.08.2024",
      },
      {
        url: "https://discus777.cc/?id=729721401&currency=BRL&type=2",
        text: "DISCUS 777",
        launchDate: "14.08.2024",
      },
      {
        url: "https://waze777.win/?id=693679720&currency=BRL&type=2",
        text: "WAZE 777",
        launchDate: "12.08.2024",
      },
      {
        url: "https://uff777.co/?id=249161471&currency=BRL&type=2",
        text: "UFF 777",
        launchDate: "08.08.2024",
      },
      {
        url: "https://osklen777.co/?id=425254308&currency=BRL&type=2",
        text: "OSKLEN 777",
        launchDate: "01.08.2024",
      },
      {
        url: "https://ferias777.cc/?id=289816799&currency=BRL&type=2",
        text: "FERIAS 777",
        launchDate: "25.07.2024",
      },
      {
        url: "https://ufpr777.co/?id=931823969&currency=BRL&type=2",
        text: "UFPR 777",
        launchDate: "22.07.2024",
      },
      {
        url: "https://buser777.co/?id=184744912&currency=BRL&type=2",
        text: "BUSER 777",
        launchDate: "18.07.2024",
      },
      {
        url: "https://ifood777.co/?id=606043099&currency=BRL&type=2",
        text: "IFOOD 777",
        launchDate: "15.07.2024",
      },
      {
        url: "https://www.uemg777.vip/?id=475343482&currency=BRL&type=2",
        text: "UEMG 777",
        launchDate: "11.07.2024",
      },
      {
        url: "https://claro777.co/?id=586756663&currency=BRL&type=2",
        text: "CLARO 777",
        launchDate: "08.07.2024",
      },
      {
        url: "https://docura777.co/?id=379232794&currency=BRL&type=2",
        text: "DOÇURA 777",
        launchDate: "04.07.2024",
      },
    ],
  },
  {
    name: "Grupo VOY",
    id: "voy",
    subtitle: "Especialista em PG Soft",
    description: "Acesso a plataformas verificadas com os melhores resultados.",
    links: [
      {
        url: "https://foxespg.com/?id=951790562&currency=BRL&type=2",
        text: "FOXES PG",
        launchDate: "03.12.2024",
      },
      {
        url: "https://bamboospg.com/?id=830820887&currency=BRL&type=2",
        text: "BAMBOOS PG",
        launchDate: "27.11.2024",
      },
      {
        url: "https://potterypg.com/?id=578608904&currency=BRL&type=2",
        text: "POTTERY PG",
        launchDate: "26.11.2024",
      },
      {
        url: "https://ivorypg.com/?id=844604004&currency=BRL&type=2",
        text: "IVORY PG",
        launchDate: "23.11.2024",
      },
      {
        url: "https://judopg.com/?id=171032768&currency=BRL&type=2",
        text: "JUDO PG",
        launchDate: "16.11.2024",
      },
      {
        url: "https://grinpg.com/?id=607749436&currency=BRL&type=2",
        text: "GRIN PG",
        launchDate: "19.11.2024",
      },
      {
        url: "https://coffeecatpg.com/?id=313174913&currency=BRL&type=2",
        text: "COFFEECAT PG",
        launchDate: "12.11.2024",
      },
      {
        url: "https://rowingpg.com/?id=533773388&currency=BRL&type=2",
        text: "ROWIN PG",
        launchDate: "09.11.2024",
      },
      {
        url: "https://meteorpg.com/?id=625297700&currency=BRL&type=2",
        text: "METEOR PG",
        launchDate: "05.11.2024",
      },
      {
        url: "https://colinaspg.com/?id=623984474&currency=BRL&type=2",
        text: "COLINAS PG",
        launchDate: "02.11.2024",
      },
      {
        url: "https://chuvapg.com/?id=884566802&currency=BRL&type=2",
        text: "CHUVA PG",
        launchDate: "29.10.2024",
      },
      {
        url: "https://cheetahpg.com/?id=674994769&currency=BRL&type=2",
        text: "CHEETAH PG",
        launchDate: "22.10.2024",
      },
      {
        url: "https://skirtpg.com/?id=735482686&currency=BRL&type=2",
        text: "SKIRT PG",
        launchDate: "15.10.2024",
      },
      {
        url: "https://elegancepg.com/?id=471328197&currency=BRL&type=2",
        text: "ELEGANCE PG",
        launchDate: "09.10.2024",
      },
      {
        url: "https://dandelionpg.com/?id=438949489&currency=BRL&type=2",
        text: "DANDELION PG",
        launchDate: "02.10.2024",
      },
      {
        url: "https://corridapg.com/?id=585246823&currency=BRL&type=2",
        text: "CORRIDA PG",
        launchDate: "25.09.2024",
      },
      {
        url: "https://voy-escaladapg.com/?id=460275419&currency=BRL&type=2",
        text: "ESCALADA PG",
        launchDate: "11.09.2024",
      },
      {
        url: "https://earphonepg.com/?id=662837962&currency=BRL&type=2",
        text: "EARPHONE PG",
        launchDate: "04.09.2024",
      },
      {
        url: "https://handballpg.com/?id=673460450&currency=BRL&type=2",
        text: "HANDBALL PG",
        launchDate: "28.08.2024",
      },
    ],
  },
  {
    name: "Grupo W1",
    id: "w1",
    subtitle: "Confiabilidade garantida",
    description: "Acesso a plataformas verificadas com os melhores resultados.",
    links: [
      {
        url: "https://pineconepg.com/?id=640318632&currency=BRL&type=2",
        text: "PINECONE PG",
        launchDate: "-",
      },
      {
        url: "https://nenufarpg.com/?id=744659586&currency=BRL&type=2",
        text: "NENUFAR PG",
        launchDate: "-",
      },
      {
        url: "https://funguspg.com/?id=636577573&currency=BRL&type=2",
        text: "FUNGUS PG",
        launchDate: "-",
      },
      {
        url: "https://minecartpg.com/?id=909382029&currency=BRL&type=2",
        text: "MINECART PG",
        launchDate: "-",
      },
      {
        url: "https://www.w1-fencepg.com/?id=262711315&currency=BRL&type=2",
        text: "FENCE PG",
        launchDate: "-",
      },
      {
        url: "https://nightowlpg.com/?id=539547183&currency=BRL&type=2",
        text: "NIGHTOWL PG",
        launchDate: "-",
      },
      {
        url: "https://highheelpg.com/?id=534102904&currency=BRL&type=2",
        text: "HIGHHEE PG",
        launchDate: "-",
      },
      {
        url: "https://monthpg.com/?id=301940714&currency=BRL&type=2",
        text: "MONTH PG",
        launchDate: "-",
      },
      {
        url: "https://corvopg.com/?id=784825312&currency=BRL&type=2",
        text: "CORVO PG",
        launchDate: "-",
      },
      {
        url: "https://scarabpg.com/?id=756334831&currency=BRL&type=2",
        text: "SCARAB PG",
        launchDate: "-",
      },
      {
        url: "https://cellopg.com/?id=450818542&currency=BRL&type=2",
        text: "CELLO PG",
        launchDate: "-",
      },
      {
        url: "https://auroraspg.com/?id=837433306&currency=BRL&type=2",
        text: "AURORAS PG",
        launchDate: "-",
      },
      {
        url: "https://bullionpg.com/?id=668947676&currency=BRL&type=2",
        text: "BULLION PG",
        launchDate: "-",
      },
      {
        url: "https://whiskeypg.com/?id=934561293&currency=BRL&type=2",
        text: "WHISLEY PG",
        launchDate: "-",
      },
      {
        url: "https://jarpg.com/?id=765211094&currency=BRL&type=2",
        text: "JAR PG",
        launchDate: "-",
      },
      {
        url: "https://basspg.com/?id=847454852&currency=BRL&type=2",
        text: "BASS PG",
        launchDate: "-",
      },
      {
        url: "https://rumpg.com/?id=112918269&currency=BRL&type=2",
        text: "RUM PG",
        launchDate: "-",
      },
      {
        url: "https://volcanicpg.com/?id=809832728&currency=BRL&type=2",
        text: "VOLCANIC PG",
        launchDate: "-",
      },
      {
        url: "https://vodkapg.com/?id=697006701&currency=BRL&type=2",
        text: "VODKA PG",
        launchDate: "-",
      },
      {
        url: "https://walruspg.com/?id=883617022&currency=BRL&type=2",
        text: "WALRUS PG",
        launchDate: "-",
      },
      {
        url: "https://drumsetpg.com/?id=536809276&currency=BRL&type=2",
        text: "DRUMSET PG",
        launchDate: "-",
      },
      {
        url: "https://sojupg.com/?id=434095466&currency=BRL&type=2",
        text: "SOJU PG",
        launchDate: "-",
      },
      {
        url: "https://tornadopg.com/?id=979122777&currency=BRL&type=2",
        text: "TORNADO PG",
        launchDate: "-",
      },
      {
        url: "https://orcapg.com/?id=537032413&currency=BRL&type=2",
        text: "ORCA PG",
        launchDate: "-",
      },
      {
        url: "https://sledpg.com/?id=474805709&currency=BRL&type=2",
        text: "SLED PG",
        launchDate: "-",
      },
      {
        url: "https://karatepg.com/?id=953273645&currency=BRL&type=2",
        text: "KARATE PG",
        launchDate: "-",
      },
      {
        url: "https://koalapg.vip/?id=974917085&currency=BRL&type=2",
        text: "KOALA PG",
        launchDate: "-",
      },
      {
        url: "https://www.ternopg.com/?id=717657932&currency=BRL&type=2",
        text: "TERNO PG",
        launchDate: "-",
      },
      {
        url: "https://hairpinpg.com/?id=523869025&currency=BRL&type=2",
        text: "HAIRPIN PG",
        launchDate: "-",
      },
      {
        url: "https://glitterpg.com/?id=459135445&currency=BRL&type=2",
        text: "GLITTER PG",
        launchDate: "-",
      },
      {
        url: "https://cavaleiropg.com/?id=429167532&currency=BRL&type=2",
        text: "CAVALEIRO PG",
        launchDate: "-",
      },
      {
        url: "https://elfpg.com/?id=465733351&currency=BRL&type=2",
        text: "ELF PG",
        launchDate: "-",
      },
      {
        url: "https://rugbypg.com/?id=666576139&currency=BRL&type=2",
        text: "RUGBY PG",
        launchDate: "-",
      },
      {
        url: "https://divepg.com/?id=722537449&currency=BRL&type=2",
        text: "DIVE PG",
        launchDate: "-",
      },
      {
        url: "https://shootingpg.com/?id=307662096&currency=BRL&type=2",
        text: "SHOOTING PG",
        launchDate: "-",
      },
      {
        url: "https://curlingpg.com/?id=600109574&currency=BRL&type=2",
        text: "CURLING PG",
        launchDate: "-",
      },
      {
        url: "https://birthdaypg.com/?id=870610154&currency=BRL&type=2",
        text: "BIRTHDAY PG",
        launchDate: "-",
      },
      {
        url: "https://baseballpg.com/?id=724899002&currency=BRL&type=2",
        text: "BASEBALL PG",
        launchDate: "-",
      },
      {
        url: "https://archerypg.com/?id=417042516&currency=BRL&type=2",
        text: "ARCHERY PG",
        launchDate: "-",
      },
      {
        url: "https://pingpongpg.com/?id=581049399&currency=BRL&type=2",
        text: "PINGPONG PG",
        launchDate: "-",
      },
      {
        url: "https://boxingpg.com/?id=710589696&currency=BRL&type=2",
        text: "BOXING PG",
        launchDate: "-",
      },
      {
        url: "https://www.divingpg.com/?id=638117796&currency=BRL&type=2",
        text: "DIVING PG",
        launchDate: "-",
      },
      {
        url: "https://www.runningpg.com/?id=303978159&currency=BRL&type=2",
        text: "RUNNING PG",
        launchDate: "-",
      },
      {
        url: "https://patimpg.com/?id=286335171&currency=BRL&type=2",
        text: "PATIM PG",
        launchDate: "-",
      },
      {
        url: "https://skiipg.com/?id=683920179&currency=BRL&type=2",
        text: "SKII PG",
        launchDate: "-",
      },
    ],
  },
  {
    name: "Grupo FP",
    id: "fp",
    subtitle: "Acesso exclusivo",
    description: "Acesso a plataformas verificadas com os melhores resultados.",
    links: [
      {
        url: "https://www.jeeppg.com/?id=13682855&currency=BRL&type=2",
        text: "JEEP PG",
        launchDate: "26.02.2024",
      },
      {
        url: "https://iphonepg.com/?id=28244239&currency=BRL&type=2",
        text: "IPHONE PG",
        launchDate: "01.03.2024",
      },
      {
        url: "https://princesapg.com/?id=11914646",
        text: "PRINCESA PG",
        launchDate: "23.02.2024",
      },
      {
        url: "https://7hermespg.com/?id=48994612",
        text: "GEMAS PG",
        launchDate: "20.02.2024",
      },
      {
        url: "https://7audipg.com/?id=35821896",
        text: "AUDI PG",
        launchDate: "17.02.2024",
      },
      {
        url: "https://suvpg.com/?id=99344930",
        text: "SUV PG",
        launchDate: "14.02.2024",
      },
      {
        url: "https://mamipg.com/?id=73399170",
        text: "MAMI PG",
        launchDate: "11.02.2024",
      },
      {
        url: "https://4porschepg.com/?id=78708047",
        text: "PORSCHE PG",
        launchDate: "31.01.2024",
      },
      {
        url: "https://7celinepg.com/?id=57729215&currency=BRL&type=2",
        text: "CELINE PG",
        launchDate: "25.01.2024",
      },
      {
        url: "https://7yslpg.com/?id=92917602",
        text: "YSL PG",
        launchDate: "28.01.2024",
      },
    ],
  },
]

// Estado da paginação para cada grupo
const groupPagination = {}

// Elementos DOM
const header = document.getElementById("header")
const searchInput = document.getElementById("searchInput")
const groupsGrid = document.getElementById("groupsGrid")
const emptyState = document.getElementById("emptyState")
const filterButtons = document.querySelectorAll(".filter-btn")
const scrollToTopBtn = document.getElementById("scrollToTop")

let filteredGroups = [...groupsData]
let currentFilter = "all"
const ITEMS_PER_PAGE = 10

// Inicializar paginação para cada grupo
function initializePagination() {
  groupsData.forEach((group) => {
    groupPagination[group.id] = {
      currentPage: 1,
      totalPages: Math.ceil(group.links.length / ITEMS_PER_PAGE),
      showAll: false,
    }
  })
}

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled")
    scrollToTopBtn.classList.add("visible")
  } else {
    header.classList.remove("scrolled")
    scrollToTopBtn.classList.remove("visible")
  }
})

// Scroll to top functionality
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Filter functionality
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"))
    button.classList.add("active")
    currentFilter = button.getAttribute("data-filter")
    applyFilters()
  })
})

// Função para obter plataformas paginadas
function getPaginatedPlatforms(group) {
  const pagination = groupPagination[group.id]
  if (pagination.showAll) {
    const startIndex = (pagination.currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    return group.links.slice(startIndex, endIndex)
  } else {
    return group.links.slice(0, ITEMS_PER_PAGE)
  }
}

// Função para criar botão "Ver mais"
function createSeeMoreButton(group) {
  if (group.links.length <= ITEMS_PER_PAGE) return ""

  const pagination = groupPagination[group.id]
  if (pagination.showAll) return ""

  return `
        <div class="see-more-container">
            <button class="see-more-btn" onclick="showAllPlatforms('${group.id}')">
                <span>Ver mais (${group.links.length - ITEMS_PER_PAGE} restantes)</span>
                <span>↓</span>
            </button>
        </div>
    `
}

// Função para criar paginação
function createPagination(group) {
  const pagination = groupPagination[group.id]
  if (!pagination.showAll || pagination.totalPages <= 1) return ""

  let paginationHTML = '<div class="pagination-container">'

  // Botão anterior
  paginationHTML += `
        <button class="pagination-btn ${pagination.currentPage === 1 ? "disabled" : ""}" 
                onclick="changePage('${group.id}', ${pagination.currentPage - 1})"
                ${pagination.currentPage === 1 ? "disabled" : ""}>
            ←
        </button>
    `

  // Números das páginas
  for (let i = 1; i <= pagination.totalPages; i++) {
    paginationHTML += `
            <button class="pagination-btn ${i === pagination.currentPage ? "active" : ""}" 
                    onclick="changePage('${group.id}', ${i})">
                ${i}
            </button>
        `
  }

  // Botão próximo
  paginationHTML += `
        <button class="pagination-btn ${pagination.currentPage === pagination.totalPages ? "disabled" : ""}" 
                onclick="changePage('${group.id}', ${pagination.currentPage + 1})"
                ${pagination.currentPage === pagination.totalPages ? "disabled" : ""}>
            →
        </button>
    `

  // Info da paginação
  paginationHTML += `
        <div class="pagination-info">
            Página ${pagination.currentPage} de ${pagination.totalPages}
        </div>
    `

  paginationHTML += "</div>"
  return paginationHTML
}

// Função para mostrar todas as plataformas
window.showAllPlatforms = (groupId) => {
  groupPagination[groupId].showAll = true
  groupPagination[groupId].currentPage = 1
  applyFilters()
}

// Função para mudar página
window.changePage = (groupId, page) => {
  const pagination = groupPagination[groupId]
  if (page >= 1 && page <= pagination.totalPages) {
    pagination.currentPage = page
    applyFilters()
  }
}

// Renderizar grupos no grid principal
function renderGroups(groups) {
  groupsGrid.innerHTML = ""

  groups.forEach((group, index) => {
    const groupCard = document.createElement("div")
    groupCard.className = "group-card"
    groupCard.dataset.group = group.id
    groupCard.style.animationDelay = `${index * 0.1}s`

    const paginatedPlatforms = getPaginatedPlatforms(group)
    const platformsHTML = paginatedPlatforms
      .map(
        (link) => `
            <a href="${link.url}" class="platform-item" target="_blank" rel="noopener noreferrer">
                <div class="platform-item-content">
                    <div class="platform-icon">${getPlatformIcon(link.text)}</div>
                    <div class="platform-info">
                        <div class="platform-name">${link.text}</div>
                        <div class="platform-status">
                            <span class="launch-date">${link.launchDate}</span>
                        </div>
                    </div>
                </div>
                <span class="platform-arrow">→</span>
            </a>
        `,
      )
      .join("")

    const seeMoreButton = createSeeMoreButton(group)
    const pagination = createPagination(group)

    groupCard.innerHTML = `
            <div class="group-header">
                <h3 class="group-name">${group.name}</h3>
                <p class="group-description">${group.description}</p>
            </div>
            <div class="group-body">
                <div class="platform-list">
                    ${platformsHTML}
                </div>
                ${seeMoreButton}
                ${pagination}
            </div>
        `

    groupsGrid.appendChild(groupCard)
  })
}

// Aplicar filtros
function applyFilters() {
  let filtered = [...groupsData]

  // Aplicar filtro de grupo
  if (currentFilter !== "all") {
    filtered = filtered.filter((group) => group.id === currentFilter)
  }

  // Aplicar filtro de busca
  const searchTerm = searchInput.value.toLowerCase().trim()
  if (searchTerm) {
    filtered = filtered
      .map((group) => {
        const matchingLinks = group.links.filter((link) => link.text.toLowerCase().includes(searchTerm))

        if (matchingLinks.length > 0) {
          return { ...group, links: matchingLinks }
        }

        if (group.name.toLowerCase().includes(searchTerm) || group.description.toLowerCase().includes(searchTerm)) {
          return group
        }

        return null
      })
      .filter((group) => group !== null)
  }

  filteredGroups = filtered

  if (filteredGroups.length > 0) {
    groupsGrid.parentElement.parentElement.classList.remove("hidden")
    emptyState.classList.add("hidden")
    renderGroups(filteredGroups)
  } else {
    groupsGrid.parentElement.parentElement.classList.add("hidden")
    emptyState.classList.remove("hidden")
  }
}

// Event listeners
searchInput.addEventListener("input", applyFilters)

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchInput.value = ""
    applyFilters()
    searchInput.blur()
  }
})

// Smooth scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const headerHeight = header.offsetHeight
      const targetPosition = target.offsetTop - headerHeight - 20

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      })
    }
  })
})

// Animação de entrada para os cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Inicialização
initializePagination()
applyFilters()

// Observar cards para animação
setTimeout(() => {
  document.querySelectorAll(".group-card").forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "all 0.6s ease"
    observer.observe(card)
  })
}, 100)

// Adicionar efeito de loading nos botões de plataforma
document.addEventListener("click", (e) => {
  if (e.target.closest(".platform-item")) {
    const button = e.target.closest(".platform-item")
    const originalText = button.querySelector(".platform-name").textContent
    const nameElement = button.querySelector(".platform-name")

    nameElement.innerHTML = '<span class="loading"></span> Redirecionando...'

    setTimeout(() => {
      nameElement.textContent = originalText
    }, 2000)
  }
})
