import { createServer, Model } from "miragejs";

createServer({
  models: {
    labs: Model,
  },

  seeds(server) {
    server.create("lab", {
      id: "1",
      name: "Lychee Berry",
      price: 300,
      description:
        `Lychee Berry er en leken og søt variant av den kjente Labubu-figuren, inspirert av den tropiske lichy-frukten.
         Lychee Berry er alltid klar for å utforske nye smaker og lukter, og elsker å dele «bærglede» med andre Labubuer,
         du ser den ofte servere små fruktbiter til vennene sine. Selv om den er rolig av natur, bærer den alltid på en liten 
         drøm om å reise til fjerne strøk. Den sitter gjerne og stirrer ut av vinduet, mens den later som den hviler på en tropisk palmestrand.`,
      imageUrl:
        "https://prod-america-res.popmart.com/default/20231026_161756_171000__1200x1200.jpg",
      type: "original",
      pallet:"en myk, rosatonet kropp med lett perlemorskjær.",
      
      
    });
    server.create("lab", {
      id: "2",
      name: "Soymilk",
      price: 159,
      description:
        `Soymilk Labubu har en beroligende tilstedeværelse, den gir ro i sinnet og inviterer til avslapning, akkurat som en varm kopp soyamelk på en kjølig kveld.
         Den elsker å invitere venner til kveldsstund med gode samtaler og deling av små snacks.
         Soymilk er en god lytter, den nikker oppmuntrende og er alltid der for de som trenger trøst.
         Selv om den virker forsiktig, står Soymilk støtt når det blåser opp, akkurat som soyabønnen som tåler både varme og kulde.`,
      imageUrl:
        "https://prod-america-res.popmart.com/default/20231026_161756_177612__1200x1200.jpg",
      type: "original",
      pallet: "en kremhvit kropp med en lett, beige toning som minner om soya­melkens varme nyanser."
      
    });
    server.create("lab", {
      id: "3",
      name: "Sea Salt Coconut",
      price: 140,
      description:
        `Sea Salt Coconut bærer på en indre ro som får den til å virke vis og ettertenksom. Den elsker å sitte på bryggekanten og 
         la blikket vandre utover horisonten mens den lytter til havets rytme.
         Den drømmer om fjerne strender, hemmelige laguner og å fange den perfekte bølgen ved soloppgangen.
         Sea Salt Coconut planlegger rolige ekspedisjoner i sitt eget tempo, aldri i hast, men alltid nysgjerrig på hvilke skjulte perler som venter rundt neste bølge.`
         ,
      imageUrl:
        "https://prod-america-res.popmart.com/default/20231026_161756_636206__1200x1200.jpg",
      type: "original",
      pallet: "en myk, lys himmelblå nyanse som framkaller følelsen av tropisk hav."
    });
    server.create("lab", {
      id: "4",
      name: "Green Grape",
      price: 210,
      description:
       `Som den første druen i klasen inviterer Green Grape alltid til fest. Den spretter rundt med en lystig latter, og sprer umiddelbart godt humør.
        Den elsker å dele sine “druesmakinger” med venner og inviterer Labubuer til piknik under vinrankene og deler gjerne ut historier om solfylte vingårder.
        Green Grape Labubu er en livlig og spontan figur som alltid overrasker i øyeblikket, og takket være hans spontane påfunn blir selv grå hverdagstimer forvandlet til små, uforglemmelige eventyr.`,
      imageUrl:
        "https://prod-america-res.popmart.com/default/20231026_161756_400100__1200x1200.jpg",
      type: "original",
      pallet: "en fyldig, druebladgrønn kropp med en lett gradient mot lyse grønntoner",
    });
    server.create("lab", {
      id: "5",
      name: "Chestnut Cocoa",
      price: 200,
      description:
       `Chestnut Cocoa er som en god klem i vinterkulda, den sprer ro og trygghet rundt seg.
        Den setter gjerne på en kopp “tenkepause” med seg selv, og inviterer venner til dype samtaler om alt mellom himmel og jord.
        Chestnut Cocoa elsker å arrangere koselige hyggekvelder med kakao smaking, pledd og brettspill.
        Den venter tålmodig på din historie og gir alltid et trøstende nikk eller et varmt bamseklem når du trenger støtte.`,
      imageUrl:
        "https://prod-america-res.popmart.com/default/20231026_161756_677189__1200x1200.jpg",
      type: "hemmelig",
      pallet: "en lun, varm brunfarge som minner om ristet kastanje og rik kakao.",
    });
    server.create("lab", {
      id: "6",
      name: "Toffee",
      price: 100,
      description:
        `Toffee er en ekte matentusiast som elsker å eksperimentere med smaker og teksturer. 
         Aller mest gleder den seg til å skape små søte mesterverk på sitt kjøkken.
         Den elsker å forestille seg nye dessertoppskrifter fra myke toffébiter til sjokoladeovertrukne kastanjer
         Etter timevis på kjøkkenbenken elsker Toffee å invitere Labubuvennenene sin på “smaksprøve-runde”. Den arrangerer små, 
         fargerike dessertbord der alle får gi tilbakemelding og føle seg som en del av skapelsesprosessen.`,
      imageUrl:
        "https://prod-america-res.popmart.com/default/20231026_161756_805388__1200x1200.jpg",
      type: "original",
      pallet:"en rik karamellbrun kropp med myke gyldne høydepunkter som minner om nylaget toffee."
      
    });
    server.create("lab", {
      id: "7",
      name: "Sesame Bean",
      price: 225,
      description:
        `Sesame Bean utstråler ro og ettertenksomhet. Den lytter gjerne lenge før den deler kloke, enkle råd.
         Akkurat som sesamfrø tåler varme og press uten å miste sin smak, takler labubuen utfordringer med et smil og god energi.
         Skal du lære noe nytt, vil den stå støtt ved din side og minne deg om at vekst krever tid, som et frø trenger næring før det vokser.
         Fra travle bygater til rolige skogsstier, Sesame Bean kaster seg ut i nye opplevelser, samtidig som den holder seg jordnær og balansert.`,
      imageUrl:
        "https://prod-america-res.popmart.com/default/20231026_161757_093287__1200x1200.jpg",
      type: "original",
      palett:"en myk, dempet grå tone, som et speil av rene, grå sesamfrø."
    });
    server.create("lab", {
      id: "8",
      name: "DADA",
      price: 300,
      description:
       `DADA elsker å slå seg ned og observere verden, den kan tilbringe timer på benken mens den tenker over livets små mysterier.
        Selv om den foretrekker benken, kan et blink i øynene bety at DADA plutselig vil utforske nye hjørner av rommet
        før den finner et nytt, perfekt sitteunderlag.`,
      imageUrl:
        "https://prod-america-res.popmart.com/default/20240710_102728_867680____the-monsters-have-a-seat-vinyl-plush-blind-box-blind-boxes-pop-mart-us-6_____1200x1200.jpg",
      type: "sittende",
      pallet:"en myk og dempet pastellrosa "
    });
    server.create("lab", {
      id: "9",
      name: "BABA",
      price: 160,
      description:
        `BABA elsker små, uskyldige sprell og kan forvandle enhver stillestund til et lite eventyr
         Den stikker hodet inn i skuffer og bokser, drar frem små lapper eller gjemmer blyanter i rare kroker
         Når du oppdager sporene etter rampestrekene, møter den deg med sitt sjarmerende, tidløse smil og de store "uskyldige" brune øynene som smelter 
         hjetet ditt og får deg til å glemme om alt kaoset den har lagd`,
      imageUrl:
        "https://prod-america-res.popmart.com/default/20240710_102728_771361____the-monsters-have-a-seat-vinyl-plush-blind-box-blind-boxes-pop-mart-us-4_____1200x1200.jpg",
      type: "sittende",
      pallet: "et lyst og gyllent brunt"
    });
    server.create("lab", {
      id: "10",
      name: "QUQU",
      price: 250,
      description:
        `Ququ er kreativ og løsningsorient, og kommer opp med uventede løsninger når du står først trenger det.
         Om kvelden, når alt virker stille, setter QUQU seg opp og tegner opp idéer på himmelen med potene. 
         Kanskje planlegger den morgendagens eventyr, eller finner opp nye løsninger på problemene du møter
         alt mens den sitter stille og smilende ved din side.
         `,
      imageUrl:
        "https://prod-america-res.popmart.com/default/20240710_102728_595478____the-monsters-have-a-seat-vinyl-plush-blind-box-blind-boxes-pop-mart-us-2_____1200x1200.jpg",
      type: "sittende",
      pallet: "lys og myk mintgrønn"
    });
    server.create("lab", {
      id: "11",
      name: "DOUDOU",
      price: 150,
      description:
       `DOUDOU er en naturlig leder blant Labubu-figurene, med et hjerte fylt av humor, omtanke og trygghet.
        Den leder ved å inspirere andre, alltid med et smil og en god vits klar for hånden.
        DOUDOU motiverer vennene sine gjennom humor og positive kommentarer, og kan raskt snu en dårlig stemning til en glad og inkluderende atmosfære.
        DOUDOU trives når han får ta ansvar og hjelpe andre med å nå felles mål, alltid med latter som drivkraft.`,
      imageUrl:
        "https://prod-america-res.popmart.com/default/20240710_102728_268600____the-monsters-have-a-seat-vinyl-plush-blind-box-blind-boxes-pop-mart-us-secret_____1200x1200.jpg",
      type: "hemmelig",
      pallet: "mørk sjokoladebrun"
    });
    server.create("lab", {
      id: "12",
      name: "HEHE",
      price: 200,
      description: `HEHE er Labubu-samlingens egen lille stand-up-komiker. Den elsker å fortelle morsomme historier, vitser og lage rare ansiktsuttrykk
        for å få vennene til å le. Ingen situasjon er for alvorlig for HEHE, med en kjapp kommentar og en humoristisk vri, klarer den alltid å lette stemningen.
        Den har en spesiell evne til å finne akkurat den vitsen som passer perfekt til øyeblikket, og HEHE har alltid et lurt glimt i øyet når han ser at andre prøver å holde seg alvorlige.`,
      imageUrl:
       "https://prod-america-res.popmart.com/default/20240710_102728_107694____the-monsters-have-a-seat-vinyl-plush-blind-box-blind-boxes-pop-mart-us-5_____1200x1200.jpg",
      type: "sittende",
      pallet: "fintonet lysgrå"
      
    });
    server.create("lab", {
      id: "13",
      name: "ZIZI",
      price: 70,
      description:
       `ZIZI er den rolige drømmeren blant Labubu-figurene. Mens de andre kanskje løper rundt og leker,
        sitter ZIZI helst med øynene lukket og forestiller seg fantastiske verdener og eventyr. ZIZI sprer ro, harmoni og en behagelig stemning rundt seg.
        Den hjelper vennene sine med å finne roen, senke skuldrene og oppdage gledene ved å slappe av.`,
      imageUrl:
        "https://prod-america-res.popmart.com/default/20240710_102728_788591____the-monsters-have-a-seat-vinyl-plush-blind-box-blind-boxes-pop-mart-us-3_____1200x1200.jpg",
      type: "sittende",
      pallet: "myk, lys grålilla "
    });
    server.create("lab", {
      id: "14",
      name: "SISI",
      price: 100,
      description:
        `SISI er en ekte humørspreder som lyser opp ethvert rom. Alltid smilende, sprudlende og full av glede, elsker den å få vennene sine til å le og smile.
         Den møter hver ny dag med en positiv innstilling, og ser alltid muligheter og eventyr der andre ser problemer.
         SISI er en påminnelse om hvor viktig det er å glede seg over de små tingene i livet.
         SISI bryr seg oppriktig om vennene sine, og viser dette gjennom å arrangere små overraskelser eller morsomme aktiviteter som får alle rundt seg i godt humør`,
      imageUrl:
        "https://prod-america-res.popmart.com/default/20240710_102728_405355____the-monsters-have-a-seat-vinyl-plush-blind-box-blind-boxes-pop-mart-us-1_____1200x1200.jpg",
      type: "sittende",
      pallet: "lys, kremgul som minner om varmt solskinn"
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/labubus", (schema, request) => {
      return schema.labs.all();
    });

    this.get("/labubus/:id", (schema, request) => {
      const id = request.params.id;
      return schema.labs.find(id);
    });
  },
});
