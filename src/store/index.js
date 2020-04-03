import Vue from 'vue'
import Vuex from 'vuex'
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rows: 5,
    columns: 5,
    teamtiles: 17,
    gameboard: {},
    boardSubscription: {},
    client: require('mqtt').connect('wss://test.mosquitto.org:8081', { clientId: 'client_' + Date.now().toString() }),
    players: [],
    topic: 'vue-codenames/',
    lobby_id: '',
    subscribe_qos: 0,
    publish_qos: 0,
    retain: true,
    active_team: '',
    messages: [],
    alert: '', 
    chat: [],
    username: '',
    colors: { 'RED': '#DC143C', 'BLUE': '#6495ED', 'NUETRAL': '#f7dca7', 'ASSASSIN': '#333333' },
    clue: '',
    wordlist: ['AFRICA', 'AGENT', 'AIR', 'ALIEN', 'ALPS', 'AMAZON', 'AMBULANCE', 'AMERICA', 'ANGEL', 'ANTARCTICA', 'APPLE', 'ARM', 'ATLANTIS', 'AUSTRALIA', 'AZTEC', 'BACK', 'BALL', 'BAND', 'BANK', 'BAR', 'BARK', 'BAT', 'BATTERY', 'BEACH', 'BEAR', 'BEAT', 'BED', 'BEIJING', 'BELL', 'BELT', 'BERLIN', 'BERMUDA', 'BERRY', 'BILL', 'BLOCK', 'BOARD', 'BOLT', 'BOMB', 'BOND', 'BOOM', 'BOOT', 'BOTTLE', 'BOW', 'BOX', 'BRIDGE', 'BRUSH', 'BUCK', 'BUFFALO', 'BUG', 'BUGLE', 'BUTTON', 'CALF', 'CANADA', 'CAP', 'CAPITAL', 'CAR', 'CARD', 'CARROT', 'CASINO', 'CAST', 'CAT', 'CELL', 'CENTAUR', 'CENTER', 'CHAIR', 'CHANGE', 'CHARGE', 'CHECK', 'CHEST', 'CHICK', 'CHINA', 'CHOCOLATE', 'CHURCH', 'CIRCLE', 'CLIFF', 'CLOAK', 'CLUB', 'CODE', 'COLD', 'COMIC', 'COMPOUND', 'CONCERT', 'CONDUCTOR', 'CONTRACT', 'COOK', 'COPPER', 'COTTON', 'COURT', 'COVER', 'CRANE', 'CRASH', 'CRICKET', 'CROSS', 'CROWN', 'CYCLE', 'CZECH', 'DANCE', 'DATE', 'DAY', 'DEATH', 'DECK', 'DEGREE', 'DIAMOND', 'DICE', 'DINOSAUR', 'DISEASE', 'DOCTOR', 'DOG', 'DRAFT', 'DRAGON', 'DRESS', 'DRILL', 'DROP', 'DUCK', 'DWARF', 'EAGLE', 'EGYPT', 'EMBASSY', 'ENGINE', 'ENGLAND', 'EUROPE', 'EYE', 'FACE', 'FAIR', 'FALL', 'FAN', 'FENCE', 'FIELD', 'FIGHTER', 'FIGURE', 'FILE', 'FILM', 'FIRE', 'FISH', 'FLUTE', 'FLY', 'FOOT', 'FORCE', 'FOREST', 'FORK', 'FRANCE', 'GAME', 'GAS', 'GENIUS', 'GERMANY', 'GHOST', 'GIANT', 'GLASS', 'GLOVE', 'GOLD', 'GRACE', 'GRASS', 'GREECE', 'GREEN', 'GROUND', 'HAM', 'HAND', 'HAWK', 'HEAD', 'HEART', 'HELICOPTER', 'HIMALAYAS', 'HOLE', 'HOLLYWOOD', 'HONEY', 'HOOD', 'HOOK', 'HORN', 'HORSE', 'HORSESHOE', 'HOSPITAL', 'HOTEL', 'ICE', 'ICE CREAM', 'INDIA', 'IRON', 'IVORY', 'JACK', 'JAM', 'JET', 'JUPITER', 'KANGAROO', 'KETCHUP', 'KEY', 'KID', 'KING', 'KIWI', 'KNIFE', 'KNIGHT', 'LAB', 'LAP', 'LASER', 'LAWYER', 'LEAD', 'LEMON', 'LEPRECHAUN', 'LIFE', 'LIGHT', 'LIMOUSINE', 'LINE', 'LINK', 'LION', 'LITTER', 'LOCH NESS', 'LOCK', 'LOG', 'LONDON', 'LUCK', 'MAIL', 'MAMMOTH', 'MAPLE', 'MARBLE', 'MARCH', 'MASS', 'MATCH', 'MERCURY', 'MEXICO', 'MICROSCOPE', 'MILLIONAIRE', 'MINE', 'MINT', 'MISSILE', 'MODEL', 'MOLE', 'MOON', 'MOSCOW', 'MOUNT', 'MOUSE', 'MOUTH', 'MUG', 'NAIL', 'NEEDLE', 'NET', 'NEW YORK', 'NIGHT', 'NINJA', 'NOTE', 'NOVEL', 'NURSE', 'NUT', 'OCTOPUS', 'OIL', 'OLIVE', 'OLYMPUS', 'OPERA', 'ORANGE', 'ORGAN', 'PALM', 'PAN', 'PANTS', 'PAPER', 'PARACHUTE', 'PARK', 'PART', 'PASS', 'PASTE', 'PENGUIN', 'PHOENIX', 'PIANO', 'PIE', 'PILOT', 'PIN', 'PIPE', 'PIRATE', 'PISTOL', 'PIT', 'PITCH', 'PLANE', 'PLASTIC', 'PLATE', 'PLATYPUS', 'PLAY', 'PLOT', 'POINT', 'POISON', 'POLE', 'POLICE', 'POOL', 'PORT', 'POST', 'POUND', 'PRESS', 'PRINCESS', 'PUMPKIN', 'PUPIL', 'PYRAMID', 'QUEEN', 'RABBIT', 'RACKET', 'RAY', 'REVOLUTION', 'RING', 'ROBIN', 'ROBOT', 'ROCK', 'ROME', 'ROOT', 'ROSE', 'ROULETTE', 'ROUND', 'ROW', 'RULER', 'SATELLITE', 'SATURN', 'SCALE', 'SCHOOL', 'SCIENTIST', 'SCORPION', 'SCREEN', 'SCUBA DIVER', 'SEAL', 'SERVER', 'SHADOW', 'SHAKESPEARE', 'SHARK', 'SHIP', 'SHOE', 'SHOP', 'SHOT', 'SINK', 'SKYSCRAPER', 'SLIP', 'SLUG', 'SMUGGLER', 'SNOW', 'SNOWMAN', 'SOCK', 'SOLDIER', 'SOUL', 'SOUND', 'SPACE', 'SPELL', 'SPIDER', 'SPIKE', 'SPINE', 'SPOT', 'SPRING', 'SPY', 'SQUARE', 'STADIUM', 'STAFF', 'STAR', 'STATE', 'STICK', 'STOCK', 'STRAW', 'STREAM', 'STRIKE', 'STRING', 'SUB', 'SUIT', 'SUPERHERO', 'SWING', 'SWITCH', 'TABLE', 'TABLET', 'TAG', 'TAIL', 'TAP', 'TEACHER', 'TELESCOPE', 'TEMPLE', 'THEATER', 'THIEF', 'THUMB', 'TICK', 'TIE', 'TIME', 'TOKYO', 'TOOTH', 'TORCH', 'TOWER', 'TRACK', 'TRAIN', 'TRIANGLE', 'TRIP', 'TRUNK', 'TUBE', 'TURKEY', 'UNDERTAKER', 'UNICORN', 'VACUUM', 'VAN', 'VET', 'WAKE', 'WALL', 'WAR', 'WASHER', 'WASHINGTON', 'WATCH', 'WATER', 'WAVE', 'WEB', 'WELL', 'WHALE', 'WHIP', 'WIND', 'WITCH', 'WORM', 'YARD', 'ACNE', 'ACRE', 'ADDENDUM', 'ADVERTISE', 'AIRCRAFT', 'AISLE', 'ALLIGATOR', 'ALPHABETIZE', 'ANKLE', 'APATHY', 'APPLAUSE', 'APPLESAUC', 'APPLICATION', 'ARCHAEOLOGIST', 'ARISTOCRAT', 'ARMADA', 'ASLEEP', 'ASTRONAUT', 'ATHLETE', 'AUNT', 'AVOCADO', 'BABY-SITTER', 'BACKBONE', 'BAG', 'BAGUETTE', 'BALD', 'BALLOON', 'BANANA', 'BANISTER', 'BASEBALL', 'BASEBOARDS', 'BASKETBALL', 'BEANSTALK', 'BEDBUG', 'BEER', 'BEETHOVEN', 'BIB', 'BICYCLE', 'BIG', 'BIKE', 'BILLBOARD', 'BIRD', 'BIRTHDAY', 'BITE', 'BLACKSMITH', 'BLANKET', 'BLEACH', 'BLIMP', 'BLOSSOM', 'BLUEPRINT', 'BLUNT', 'BLUR', 'BOA', 'BOAT', 'BOB', 'BOBSLED', 'BODY', 'BONNET', 'BOOK', 'BOOTH', 'BOWTIE', 'BOY', 'BRAINSTORM', 'BRAND', 'BRAVE', 'BRIDE', 'BROCCOLI', 'BROKEN', 'BROOM', 'BRUISE', 'BRUNETTE', 'BUBBLE', 'BUDDY', 'BULB', 'BUNNY', 'BUS', 'BUY', 'CABIN', 'CAFETERIA', 'CAKE', 'CALCULATOR', 'CAMPSITE', 'CAN', 'CANDLE', 'CANDY', 'CAPE', 'CAPITALISM', 'CARDBOARD', 'CARTOGRAPHY', 'CD', 'CEILING', 'CENTURY', 'CHALK', 'CHAMPION', 'CHARGER', 'CHEERLEADER', 'CHEF', 'CHESS', 'CHEW', 'CHICKEN', 'CHIME', 'CIRCUS', 'CLAY', 'CLOCKWORK', 'CLOWN', 'CLUE', 'COACH', 'COAL', 'COASTER', 'COG', 'COLLEGE', 'COMFORT', 'COMPUTER', 'CONE', 'CONSTRICTOR', 'CONTINUUM', 'CONVERSATION', 'COOP', 'CORD', 'CORDUROY', 'COT', 'COUGH', 'COW', 'COWBOY', 'CRAYON', 'CREAM', 'CRISP', 'CRITICIZE', 'CROW', 'CRUISE', 'CRUMB', 'CRUST', 'CUFF', 'CURTAIN', 'CUTICLE', 'CZAR', 'DAD', 'DART', 'DAWN', 'DEEP', 'DEFECT', 'DENT', 'DENTIST', 'DESK', 'DICTIONARY', 'DIMPLE', 'DIRTY', 'DISMANTLE', 'DITCH', 'DIVER', 'DOGHOUSE', 'DOLL', 'DOMINOES', 'DOOR', 'DOT', 'DRAIN', 'DRAW', 'DREAM', 'DRINK', 'DRIP', 'DRUMS', 'DRYER', 'DUMP', 'DUNK', 'DUST', 'EAR', 'EAT', 'EBONY', 'ELBOW', 'ELECTRICITY', 'ELEPHANT', 'ELEVATOR', 'ELF', 'ELM', 'ERGONOMIC', 'ESCALATOR', 'EUREKA', 'EVOLUTION', 'EXTENSION', 'EYEBROW', 'FANCY', 'FAST', 'FEAST', 'FEUDALISM', 'FIDDLE', 'FIGMENT', 'FINGER', 'FIRST', 'FISHING', 'FIX', 'FIZZ', 'FLAGPOLE', 'FLANNEL', 'FLASHLIGHT', 'FLOCK', 'FLOTSAM', 'FLOWER', 'FLU', 'FLUSH', 'FLUTTER', 'FOG', 'FOIL', 'FOOTBALL', 'FOREHEAD', 'FOREVER', 'FORTNIGHT', 'FRECKLE', 'FREIGHT', 'FRINGE', 'FROG', 'FROWN', 'GALLOP', 'GARBAGE', 'GARDEN', 'GASOLINE', 'GEM', 'GINGER', 'GINGERBREAD', 'GIRL', 'GLASSES', 'GOBLIN', 'GOODBYE', 'GRANDPA', 'GRAPE', 'GRATITUDE', 'GRAY', 'GUITAR', 'GUM', 'GUMBALL', 'HAIR', 'HALF', 'HANDLE', 'HANDWRITING', 'HANG', 'HAPPY', 'HAT', 'HATCH', 'HEADACHE', 'HEDGE', 'HEM', 'HIDE', 'HILL', 'HOCKEY', 'HOMEWORK', 'HONK', 'HOPSCOTCH', 'HOSE', 'HOT', 'HOUSE', 'HOUSEBOAT', 'HUG', 'HUMIDIFIER', 'HUNGRY', 'HURDLE', 'HURT', 'HUT', 'IMPLODE', 'INN', 'INQUISITION', 'INTERN', 'INTERNET', 'INVITATION', 'IRONIC', 'IVY', 'JADE', 'JAPAN', 'JEANS', 'JELLY', 'JIG', 'JOG', 'JOURNAL', 'JUMP', 'KILLER', 'KILOGRAM', 'KITCHEN', 'KITE', 'KNEE', 'KNEEL', 'KOALA', 'LACE', 'LADDER', 'LADYBUG', 'LAG', 'LANDFILL', 'LAUGH', 'LAUNDRY', 'LAW', 'LAWN', 'LAWNMOWER', 'LEAK', 'LEG', 'LETTER', 'LEVEL', 'LIFESTYLE', 'LIGAMENT', 'LIGHTSABER', 'LIME', 'LIZARD', 'LOITERER', 'LOLLIPOP', 'LOVESEAT', 'LOYALTY', 'LUNCH', 'LUNCHBOX', 'LYRICS', 'MACHINE', 'MACHO', 'MAILBOX', 'MARK', 'MARS', 'MASCOT', 'MAST', 'MATCHSTICK', 'MATE', 'MATTRESS', 'MESS', 'MIDSUMMER', 'MISTAKE', 'MODERN', 'MOLD', 'MOM', 'MONDAY', 'MONEY', 'MONITOR', 'MONSTER', 'MOOCH', 'MOP', 'MOTH', 'MOTORCYCLE', 'MOUNTAIN', 'MOWER', 'MUD', 'MUSIC', 'MUTE', 'NATURE', 'NEGOTIATE', 'NEIGHBOR', 'NEST', 'NEUTRON', 'NIECE', 'NIGHTMARE', 'NOSE', 'OAR', 'OBSERVATORY', 'OFFICE', 'OLD', 'OLYMPIAN', 'OPAQUE', 'OPENER', 'ORBIT', 'ORGANIZE', 'OUTER', 'OUTSIDE', 'OVATION', 'OVERTURE', 'PAIL', 'PAINT', 'PAJAMAS', 'PALACE', 'PARODY', 'PARTY', 'PASSWORD', 'PASTRY', 'PAWN', 'PEAR', 'PEN', 'PENCIL', 'PENDULUM', 'PENIS', 'PENNY', 'PEPPER', 'PERSONAL', 'PHILOSOPHER', 'PHONE', 'PHOTOGRAPH', 'PICNIC', 'PIGPEN', 'PILLOW', 'PINCH', 'PING', 'PINWHEEL', 'PLAID', 'PLAN', 'PLANK', 'PLAYGROUND', 'PLOW', 'PLUMBER', 'POCKET', 'POEM', 'POMP', 'PONG', 'POPSICLE', 'POPULATION', 'PORTFOLIO', 'POSITIVE', 'PROCRASTINATE', 'PROTESTANT', 'PSYCHOLOGIST', 'PUBLISHER', 'PUNK', 'PUPPET', 'PUPPY', 'PUSH', 'PUZZLE', 'QUARANTINE', 'QUICKSAND', 'QUIET', 'RACE', 'RADIO', 'RAFT', 'RAG', 'RAINBOW', 'RAINWATER', 'RANDOM', 'RECYCLE', 'RED', 'REGRET', 'REIMBURSEMENT', 'RETALIATE', 'RIB', 'RIDDLE', 'RIM', 'RINK', 'ROLLER', 'ROOM', 'ROUNDABOUT', 'RUNG', 'RUNT', 'RUT', 'SAD', 'SAFE', 'SALMON', 'SALT', 'SANDBOX', 'SANDCASTLE', 'SANDWICH', 'SASH', 'SCAR', 'SCARED', 'SCOUNDREL', 'SCRAMBLE', 'SCUFF', 'SEASHELL', 'SEASON', 'SENTENCE', 'SEQUINS', 'SET', 'SHAFT', 'SHALLOW', 'SHAMPOO', 'SHEEP', 'SHEETS', 'SHERIFF', 'SHIPWRECK', 'SHIRT', 'SHOELACE', 'SHORT', 'SHOWER', 'SHRINK', 'SICK', 'SIESTA', 'SILHOUETTE', 'SINGER', 'SIP', 'SKATE', 'SKATING', 'SKI', 'SLAM', 'SLEEP', 'SLING', 'SLOW', 'SLUMP', 'SMITH', 'SNEEZE', 'SNUGGLE', 'SONG', 'SPARE', 'SPEAKERS', 'SPIT', 'SPONGE', 'SPOOL', 'SPOON', 'SPRINKLER', 'SQUINT', 'STAIRS', 'STANDING', 'STOCKHOLDER', 'STOPLIGHT', 'STOUT', 'STOVE', 'STOWAWAY', 'STREAMLINE', 'STRIPE', 'STUDENT', 'SUN', 'SUNBURN', 'SUSHI', 'SWAMP', 'SWARM', 'SWEATER', 'SWIMMING', 'TACHOMETER', 'TALK', 'TAXI', 'TEAPOT', 'TEENAGER', 'TELEPHONE', 'TEN', 'TENNIS', 'THINK', 'THRONE', 'THROUGH', 'THUNDER', 'TIDE', 'TIGER', 'TINTING', 'TIPTOE', 'TIPTOP', 'TIRED', 'TISSUE', 'TOAST', 'TOILET', 'TOOL', 'TOOTHBRUSH', 'TORNADO', 'TOURNAMENT', 'TRACTOR', 'TRASH', 'TREASURE', 'TREE', 'TRUCK', 'TUB', 'TUBA', 'TUTOR', 'TELEVISION', 'TWANG', 'TWIG', 'TWITTERPATED', 'TYPE', 'UNEMPLOYED', 'UPGRADE', 'VEST', 'VISION', 'WAG', 'WATERMELON', 'WAX', 'WEDDING', 'WEED', 'WELDER', 'WHATEVER', 'WHEELCHAIR', 'WHIPLASH', 'WHISK', 'WHISTLE', 'WHITE', 'WIG', 'WILL', 'WINDMILL', 'WINTER', 'WISH', 'WOLF', 'WOOL', 'WORLD', 'WRISTWATCH', 'YARDSTICK', 'ZAMBONI', 'ZEN', 'ZERO', 'ZIPPER', 'ZONE', 'ZOO']

  },
  getters: {
    getField,
    playerList(state){
      return [...new Set(state.players)];
    },
    isSpyMaster(state){
      if(typeof state.gameboard.spymasters === 'undefined'){
        return true
      }
      return state.gameboard.spymasters.includes(state.username)
    }
  },
  mutations: {
    updateField,
    guess(state, index) {
      state.gameboard.tiles[index].guessed = !state.gameboard.tiles[index].guessed
      this.commit("publishGameBoard")
    },
    generateBoard(state) {
      let tilecount = state.rows * state.columns
      let tileselections = state.wordlist.sort(() => Math.random() - Math.random()).slice(0, (tilecount))
      let startteam = ''
      Math.random() > .50 ? startteam = 'RED' : startteam = 'BLUE'
      let redlist = []
      let bluelist = []
      let nuetralist = []
      if (startteam == 'RED') {
        redlist = Array(9).fill('RED')
        bluelist = Array(8).fill('BLUE')
      }
      else {
        redlist = Array(8).fill('RED')
        bluelist = Array(9).fill('BLUE')
      }
      nuetralist = Array(tilecount - redlist.length - bluelist.length - 1).fill('NUETRAL')
      let fullcolorlist = [].concat(redlist, bluelist, nuetralist, ['ASSASSIN'])
      // Shuffle the array.
      function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }

        return array;
      }
      state.active_team = startteam
      fullcolorlist = shuffle(fullcolorlist)
      state.gameboard = {
        starting_team: startteam,
        rows: state.rows,
        columns: state.columns,
        spymasters: [state.username],
        tiles: tileselections.map((t) => {
          return { word: t, value: fullcolorlist.pop(), guessed: false }
        })
      }
      this.commit("publishGameBoard")
    },
    toggleSpyMaster(state, player){

      
      if (typeof state.gameboard.spymasters === 'undefined'){
        return false
      }
      const isspymaster = state.gameboard.spymasters.includes(player)
      const message = isspymaster ? 'Do you want to remove ' + player  + ' as SpyMaster?': 'Do you want to make ' + player + ' a SpyMaster?'
      
      if (window.confirm(message)) { 
        if (isspymaster){
          state.gameboard.spymasters = state.gameboard.spymasters.filter((s)=>{
            return s !== player
          })
        }
        else{
          state.gameboard.spymasters.push(player)
        }
        this.commit("publishGameBoard")
      }

    },
    resetGameboard(state){
      state.gameboard = {}
      state.players = []
      state.chat = []
      state.clue = ''
      state.alert = ''
      state.client.unsubscribe(Object.keys(state.client._resubscribeTopics))
    },
    publishGameBoard(state){
      state.client.publish(state.topic + state.lobby_id+'/board', JSON.stringify(state.gameboard), { qos: parseInt(state.publish_qos), retain: state.retain,  messageExpiryInterval: 1080 })
    },
    unsubscribePlayer(state){
      state.client.publish(state.topic + state.lobby_id+'/players/'+state.username, JSON.stringify(''), { qos: parseInt(state.publish_qos), retain: state.retain, messageExpiryInterval: 1080 })
    },
    // WHEN MQTT message is recieved.
    messageRecieved(state, payload) {
      // state.messages.push(payload.topic)
      // if (payload.topic.includes("players")){
      //   state.players.push(JSON.parse(payload.message))
      // }
      if (payload.topic.includes("players/")){
        const topic = payload.topic.substr(payload.topic.indexOf('players/')+8)
        const message = JSON.parse(payload.message)
        if(message && !state.players.includes(message)){
          state.players.push(message)
        }
        if (!message && state.players.includes(topic)){
          state.players = state.players.filter((p) =>{ return p !== topic}) 
        }
      }
      if (payload.topic.includes("board")){
        state.gameboard = JSON.parse(payload.message)
        if(state.gameboard.spymasters.length===0){
          state.gameboard.spymasters.push(state.username)
        }
      }
      if (payload.topic.includes("chat")){
        state.chat.push(JSON.parse(payload.message))
      }
      if (payload.topic.includes("clue")){
        state.clue = JSON.parse(payload.message)
      }
    },
    sendChat(state, message){
      state.client.publish(state.topic + state.lobby_id+'/chat', JSON.stringify({user:state.username, message}), { qos: parseInt(state.publish_qos), retain: state.retain, messageExpiryInterval: 1080 })
    },
    sendClue(state, clue){
      state.client.publish(state.topic + state.lobby_id+'/clue', JSON.stringify({user: state.username, clue}), { qos: parseInt(state.publish_qos),  messageExpiryInterval: 1080 })
    },
    // Called on first load of lobby.
    subscribeToLobby(state){
      state.client.on('message', (topic, message) => { this.commit("messageRecieved", { topic, message }) })
      state.client.subscribe(state.topic + state.lobby_id+'/board', { qos: parseInt(state.subscribe_qos) })
      state.client.subscribe(state.topic + state.lobby_id+'/players', { qos: parseInt(state.subscribe_qos) })
      state.client.subscribe(state.topic + state.lobby_id+'/players/+', { qos: parseInt(state.subscribe_qos) })
      state.client.subscribe(state.topic + state.lobby_id+'/clue', { qos: parseInt(state.subscribe_qos) })
      state.client.subscribe(state.topic + state.lobby_id+'/chat', { qos: parseInt(state.subscribe_qos) })
      // state.client.publish(state.topic + state.lobby_id+'/players', JSON.stringify(state.username), { qos: parseInt(state.publish_qos), retain: state.retain })
      state.client.publish(state.topic + state.lobby_id+'/players/'+state.username, JSON.stringify(state.username), { qos: parseInt(state.publish_qos), retain: state.retain, messageExpiryInterval: 1080 })
    }
  },
  actions: {
  },
  modules: {
  }
})
