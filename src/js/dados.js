let dados = [
    {
        titulo: "Cheddar McMelt",
        descricao: "Pão integral, hambúrguer, cebola grelhada, queijo cheddar cremoso.",
        localizacao: {
            nome: "Brasil",
            link: "https://www.google.com/maps/place/Brasil"
        },
        curiosidade: "Um clássico amado pelos brasileiros.",
        imagem: "src\imagens\cheddar-mcmelt.png"
    },
    {
        titulo: "McLobster",
        descricao: "Pão de hot dog, lagosta, alface, molho especial.",
        localizacao: {
            nome: "Canadá",
            link: "https://www.google.com/maps/place/Canadá"
        },
        curiosidade: "Disponível apenas em algumas regiões do Canadá durante o verão.",
        imagem: "imagens/mclobster.jpg"
    },
    {
        titulo: "McSpaghetti",
        descricao: "Espaguete, molho de tomate, carne moída.",
        localizacao: {
            nome: "Filipinas",
            link: "https://www.google.com/maps/place/Filipinas"
        },
        curiosidade: "Uma combinação inusitada, mas muito popular nas Filipinas.",
        imagem: "imagens/mcspaghetti.jpg"
    },
    {
        titulo: "McArabia",
        descricao: "Pão pita, carne de frango ou carne bovina, alface, tomate, cebola, molho especial.",
        localizacao: {
            nome: "Oriente Médio",
            link: "https://www.google.com/maps/place/Oriente+Médio"
        },
        curiosidade: "Um lanche inspirado nos sabores tradicionais do Oriente Médio.",
        imagem: "imagens/mcarabia.jpg"
    },
    {
        titulo: "Samurai Burger",
        descricao: "Hambúrguer de carne ou frango, molho teriyaki, alface.",
        localizacao: {
            nome: "Singapura",
            link: "https://www.google.com/maps/place/Singapura"
        },
        curiosidade: "O molho teriyaki dá um toque japonês ao lanche.",
        imagem: "imagens/samurai-burger.jpg"
    },
    {
        titulo: "McPinto",
        descricao: "Arroz, feijão, ovos, queijo e salsa.",
        localizacao: {
            nome: "Costa Rica",
            link: "https://www.google.com/maps/place/Costa+Rica"
        },
        curiosidade: "Uma refeição típica costarriquenha adaptada para o café da manhã.",
        imagem: "imagens/mcpinto.jpg"
    },
    {
        titulo: "McMolletes",
        descricao: "Pão, feijão, queijo, molho pico de gallo.",
        localizacao: {
            nome: "México",
            link: "https://www.google.com/maps/place/México"
        },
        curiosidade: "Baseado em um tradicional prato mexicano de café da manhã.",
        imagem: "imagens/mcmolletes.jpg"
    },
    {
        titulo: "McVeggie",
        descricao: "Pão, hambúrguer vegetariano, alface, tomate, cebola, molho especial.",
        localizacao: {
            nome: "Índia",
            link: "https://www.google.com/maps/place/Índia"
        },
        curiosidade: "Uma opção vegetariana em um país onde o vegetarianismo é comum.",
        imagem: "imagens/mcveggie.jpg"
    },
    {
        titulo: "Ebi Filet-O",
        descricao: "Hambúrguer de camarão empanado, alface, molho tártaro.",
        localizacao: {
            nome: "Japão",
            link: "https://www.google.com/maps/place/Japão"
        },
        curiosidade: "Uma opção de frutos do mar popular no Japão.",
        imagem: "imagens/ebi-filet-o.jpg"
    },
    {
        titulo: "Shaka Shaka Chicken",
        descricao: "Peito de frango empanado, tempero de queijo ou pimenta.",
        localizacao: {
            nome: "Japão",
            link: "https://www.google.com/maps/place/Japão"
        },
        curiosidade: "O cliente sacode o saquinho para misturar o tempero com o frango.",
        imagem: "imagens/shaka-shaka-chicken.jpg"
    },
    {
        titulo: "McKroket",
        descricao: "Croquete de carne, mostarda, pão de hambúrguer.",
        localizacao: {
            nome: "Países Baixos",
            link: "https://www.google.com/maps/place/Países+Baixos"
        },
        curiosidade: "Inspirado no tradicional croquete holandês.",
        imagem: "imagens/mckroket.jpg"
    },
    {
        titulo: "McTurco",
        descricao: "Carne de kebab, alface, cebola, molho de iogurte, pão pita.",
        localizacao: {
            nome: "Turquia",
            link: "https://www.google.com/maps/place/Turquia"
        },
        curiosidade: "Um lanche com sabores típicos da culinária turca.",
        imagem: "imagens/mcturco.jpg"
    },
    {
        titulo: "McNürnburger",
        descricao: "Três salsichas Nürnberger, cebola, mostarda, pão de hambúrguer.",
        localizacao: {
            nome: "Alemanha",
            link: "https://www.google.com/maps/place/Alemanha"
        },
        curiosidade: "Inspirado nas famosas salsichas de Nürnberg.",
        imagem: "imagens/mcnurnburger.jpg"
    },
    {
        titulo: "McBacon Deluxe",
        descricao: "Hambúrguer de carne, bacon, alface, tomate, queijo, maionese, pão de hambúrguer.",
        localizacao: {
            nome: "Austrália",
            link: "https://www.google.com/maps/place/Austrália"
        },
        curiosidade: "Uma das opções mais pedidas na Austrália.",
        imagem: "imagens/mcbacon-deluxe.jpg"
    },
    {
        titulo: "McShrimp",
        descricao: "Camarões empanados, maionese, alface, pão de hambúrguer.",
        localizacao: {
            nome: "Rússia",
            link: "https://www.google.com/maps/place/Rússia"
        },
        curiosidade: "O McDonald's na Rússia oferece frutos do mar em seus menus.",
        imagem: "imagens/mcshrimp.jpg"
    },
    {
        titulo: "Quiche de Queijo",
        descricao: "Ovo, queijo, massa de quiche.",
        localizacao: {
            nome: "França",
            link: "https://www.google.com/maps/place/França"
        },
        curiosidade: "Adaptado de um prato típico francês.",
        imagem: "imagens/quiche-de-queijo.jpg"
    },
    {
        titulo: "Greek Mac",
        descricao: "Pão pita, hambúrguer de carne, tomate, alface, cebola, molho tzatziki.",
        localizacao: {
            nome: "Grécia",
            link: "https://www.google.com/maps/place/Grécia"
        },
        curiosidade: "Uma variação do tradicional gyro grego.",
        imagem: "imagens/greek-mac.jpg"
    },
    {
        titulo: "McParmesana",
        descricao: "Hambúrguer de carne, queijo parmesão, presunto, tomate, pão de hambúrguer.",
        localizacao: {
            nome: "Argentina",
            link: "https://www.google.com/maps/place/Argentina"
        },
        curiosidade: "A versão argentina do hambúrguer com sabores locais.",
        imagem: "imagens/mcparmesana.jpg"
    },
    {
        titulo: "McItaly",
        descricao: "Hambúrguer de carne, queijo Parmigiano-Reggiano, alface, molho de alcachofra, pão ciabatta.",
        localizacao: {
            nome: "Itália",
            link: "https://www.google.com/maps/place/Itália"
        },
        curiosidade: "Feito com ingredientes tradicionais italianos.",
        imagem: "imagens/mcitaly.jpg"
    },
    {
        titulo: "McCamembert Bites",
        descricao: "Pedaços empanados de queijo camembert.",
        localizacao: {
            nome: "França",
            link: "https://www.google.com/maps/place/França"
        },
        curiosidade: "Uma opção de petisco com queijo típico da França.",
        imagem: "imagens/mccamembert-bites.jpg"
    },
    {
        titulo: "McDo Sarsi Float",
        descricao: "Refrigerante de sarsaparilla, sorvete de baunilha.",
        localizacao: {
            nome: "Filipinas",
            link: "https://www.google.com/maps/place/Filipinas"
        },
        curiosidade: "Sarsaparilla é um refrigerante popular nas Filipinas.",
        imagem: "imagens/mcdo-sarsi-float.jpg"
    },
    {
        titulo: "Tropical McShake",
        descricao: "Shake de frutas tropicais como manga e maracujá",
        localizacao: {
            nome: "Brasil",
            link: "https://www.google.com/maps/place/Brasil"
        },
        curiosidade: "Sabores tropicais comuns no Brasil.",
        imagem: "imagens/tropical-mcshake.jpg"
    },
    {
        titulo: "McPork",
        descricao: "Hambúrguer de carne suína, alface, cebola, molho especial, pão de hambúrguer.",
        localizacao: {
            nome: "Japão",
            link: "https://www.google.com/maps/place/Japão"
        },
        curiosidade: "Uma opção popular de carne suína no Japão.",
        imagem: "imagens/mcpork.jpg"
    },
    {
        titulo: "McFeast",
        descricao: "Hambúrguer de carne, queijo, alface, tomate, cebola, picles, maionese, ketchup, pão de hambúrguer.",
        localizacao: {
            nome: "África do Sul",
            link: "https://www.google.com/maps/place/África+do+Sul"
        },
        curiosidade: "Um lanche robusto, muito popular na África do Sul.",
        imagem: "imagens/mcfeast.jpg"
    },
    {
        titulo: "McKebab",
        descricao: "Carne de kebab, alface, cebola, tomate, molho de iogurte, pão pita.",
        localizacao: {
            nome: "Israel",
            link: "https://www.google.com/maps/place/Israel"
        },
        curiosidade: "Inspirado no popular kebab israelense.",
        imagem: "imagens/mckebab.jpg"
    },
    {
        titulo: "McFalafel",
        descricao: "Bolinho de falafel, alface, tomate, molho tahine, pão pita.",
        localizacao: {
            nome: "Israel",
            link: "https://www.google.com/maps/place/Israel"
        },
        curiosidade: "Opção vegetariana inspirada no falafel do Oriente Médio.",
        imagem: "imagens/mcfalafel.jpg"
    },
    {
        titulo: "McCurry Pan",
        descricao: "Pão, curry de legumes, molho branco.",
        localizacao: {
            nome: "Índia",
            link: "https://www.google.com/maps/place/Índia"
        },
        curiosidade: "Uma opção vegetariana com sabores indianos.",
        imagem: "imagens/mccurry-pan.jpg"
    },
    {
        titulo: "McAloo Tikki",
        descricao: "Hambúrguer de batata e ervilha, alface, cebola, tomate, molho especial.",
        localizacao: {
            nome: "Índia",
            link: "https://www.google.com/maps/place/Índia"
        },
        curiosidade: "Um dos lanches mais vendidos na Índia.",
        imagem: "imagens/mcaloo-tikki.jpg"
    },
    {
        titulo: "McPatty",
        descricao: "Carne de cordeiro, alface, tomate, cebola, molho de iogurte, pão de hambúrguer.",
        localizacao: {
            nome: "Nova Zelândia",
            link: "https://www.google.com/maps/place/Nova+Zelândia"
        },
        curiosidade: "O cordeiro é uma carne muito popular na Nova Zelândia.",
        imagem: "imagens/mcpatty.jpg"
    },
    {
        titulo: "McVeggie Deluxe",
        descricao: "Hambúrguer vegetariano, queijo, alface, tomate, maionese, pão de hambúrguer.",
        localizacao: {
            nome: "Austrália",
            link: "https://www.google.com/maps/place/Austrália"
        },
        curiosidade: "Uma opção vegetariana popular na Austrália.",
        imagem: "imagens/mcveggie-deluxe.jpg"
    },
    {
        titulo: "McFry Potato",
        descricao: "Batata frita com molho de queijo e bacon.",
        localizacao: {
            nome: "Japão",
            link: "https://www.google.com/maps/place/Japão"
        },
        curiosidade: "Uma variação da batata frita comum.",
        imagem: "imagens/mcfry-potato.jpg"
    },
    {
        titulo: "McPorridge",
        descricao: "Aveia cozida com açúcar mascavo, frutas frescas ou secas.",
        localizacao: {
            nome: "Malásia",
            link: "https://www.google.com/maps/place/Malásia"
        },
        curiosidade: "Uma opção de café da manhã saudável.",
        imagem: "imagens/mcporridge.jpg"
    },
    {
        titulo: "McSbrinz",
        descricao: "Hambúrguer de carne, queijo Sbrinz, alface, tomate, pão de hambúrguer.",
        localizacao: {
            nome: "Suíça",
            link: "https://www.google.com/maps/place/Suíça"
        },
        curiosidade: "Queijo Sbrinz é um dos queijos mais antigos da Suíça.",
        imagem: "imagens/mcsbrinz.jpg"
    },
    {
        titulo: "McLaks",
        descricao: "Hambúrguer de salmão, alface, tomate, cebola, molho especial, pão de hambúrguer.",
        localizacao: {
            nome: "Noruega",
            link: "https://www.google.com/maps/place/Noruega"
        },
        curiosidade: "Uma opção de peixe muito popular na Noruega.",
        imagem: "imagens/mclaks.jpg"
    },
    {
        titulo: "McNoodles",
        descricao: "Macarrão, vegetais, carne ou frango, molho especial.",
        localizacao: {
            nome: "Áustria",
            link: "https://www.google.com/maps/place/Áustria"
        },
        curiosidade: "Um prato de noodles inspirado na culinária asiática.",
        imagem: "imagens/mcnoodles.jpg"
    },
    {
        titulo: "McTofu",
        descricao: "Tofu frito, alface, tomate, molho teriyaki, pão de hambúrguer.",
        localizacao: {
            nome: "Japão",
            link: "https://www.google.com/maps/place/Japão"
        },
        curiosidade: "Uma opção vegetariana com tofu, muito popular no Japão.",
        imagem: "imagens/mctofu.jpg"
    },
    {
        titulo: "McCamembert",
        descricao: "Hambúrguer de carne, queijo camembert, alface, tomate, pão de hambúrguer.",
        localizacao: {
            nome: "França",
            link: "https://www.google.com/maps/place/França"
        },
        curiosidade: "Queijo camembert é uma especialidade francesa.",
        imagem: "imagens/mccamembert.jpg"
    },
    {
        titulo: "McBeef Prosperity",
        descricao: "Hambúrguer de carne, molho pimenta preta, cebola, pão longo.",
        localizacao: {
            nome: "Malásia",
            link: "https://www.google.com/maps/place/Malásia"
        },
        curiosidade: "Lançado durante o Ano Novo Chinês.",
        imagem: "imagens/mcbeef-prosperity.jpg"
    },
    {
        titulo: "McCrispy Chicken",
        descricao: "Frango crocante empanado, alface, maionese, pão de hambúrguer.",
        localizacao: {
            nome: "Tailândia",
            link: "https://www.google.com/maps/place/Tailândia"
        },
        curiosidade: "Uma opção de frango crocante no menu tailandês.",
        imagem: "imagens/mccrispy-chicken.jpg"
    },
    {
        titulo: "McRaclette",
        descricao: "Hambúrguer de carne, queijo raclette, alface, tomate, pão de hambúrguer.",
        localizacao: {
            nome: "Suíça",
            link: "https://www.google.com/maps/place/Suíça"
        },
        curiosidade: "Raclette é um tipo de queijo derretido muito popular na Suíça.",
        imagem: "imagens/mcraclette.jpg"
    },
    {
        titulo: "McPatatas Deluxe",
        descricao: "Batatas fritas, bacon, molho de queijo.",
        localizacao: {
            nome: "Espanha",
            link: "https://www.google.com/maps/place/Espanha"
        },
        curiosidade: "Uma variação de batata frita popular na Espanha.",
        imagem: "imagens/mcpatatas-deluxe.jpg"
    },
    {
        titulo: "McRib",
        descricao: "Costela de porco desossada, molho barbecue, cebola, picles, pão de hambúrguer.",
        localizacao: {
            nome: "Estados Unidos",
            link: "https://www.google.com/maps/place/Estados+Unidos"
        },
        curiosidade: "Lançado esporadicamente nos Estados Unidos.",
        imagem: "imagens/mcrib.jpg"
    },
    {
        titulo: "McSpicy Paneer",
        descricao: "Hambúrguer de queijo paneer, alface, maionese picante, pão de hambúrguer.",
        localizacao: {
            nome: "Índia",
            link: "https://www.google.com/maps/place/Índia"
        },
        curiosidade: "Paneer é um queijo indiano muito popular.",
        imagem: "imagens/mcspicy-paneer.jpg"
    },
    {
        titulo: "McArabia",
        descricao: "Pão pita, carne de frango, alface, tomate, molho de alho.",
        localizacao: {
            nome: "Emirados Árabes Unidos",
            link: "https://www.google.com/maps/place/Emirados+Árabes+Unidos"
        },
        curiosidade: "Uma opção popular no Oriente Médio.",
        imagem: "imagens/mcarabia.jpg"
    },
    {
        titulo: "McDeluxe",
        descricao: "Hambúrguer de carne, queijo, alface, tomate, maionese, pão de hambúrguer.",
        localizacao: {
            nome: "Brasil",
            link: "https://www.google.com/maps/place/Brasil"
        },
        curiosidade: "Um dos lanches mais vendidos no Brasil.",
        imagem: "imagens/mcdeluxe.jpg"
    },
    {
        titulo: "McShrimp",
        descricao: "Camarão empanado, alface, molho tártaro, pão de hambúrguer.",
        localizacao: {
            nome: "Rússia",
            link: "https://www.google.com/maps/place/Rússia"
        },
        curiosidade: "Camarão empanado é uma opção popular na Rússia.",
        imagem: "imagens/mcshrimp.jpg"
    },
    {
        titulo: "McLobster",
        descricao: "Lagosta, alface, maionese, pão de hot dog.",
        localizacao: {
            nome: "Canadá",
            link: "https://www.google.com/maps/place/Canadá"
        },
        curiosidade: "Uma especialidade de frutos do mar muito popular no Canadá.",
        imagem: "imagens/mclobster.jpg"
    },
    {
        titulo: "McParmesan",
        descricao: "Hambúrguer de frango, queijo parmesão, alface, tomate, pão de hambúrguer.",
        localizacao: {
            nome: "Itália",
            link: "https://www.google.com/maps/place/Itália"
        },
        curiosidade: "Inspirado nos sabores italianos.",
        imagem: "imagens/mcparmesan.jpg"
    },
    {
        titulo: "McBaguette",
        descricao: "Pão baguette, carne de frango ou boi, queijo, alface, tomate, molho especial.",
        localizacao: {
            nome: "França",
            link: "https://www.google.com/maps/place/França"
        },
        curiosidade: "Uma variação do tradicional hambúrguer, servido no pão baguette.",
        imagem: "imagens/mcbaguette.jpg"
    },
    {
        titulo: "McFiesta",
        descricao: "Hambúrguer de carne, queijo, alface, tomate, pão de hambúrguer.",
        localizacao: {
            nome: "Argentina",
            link: "https://www.google.com/maps/place/Argentina"
        },
        curiosidade: "Um dos lanches mais populares na Argentina.",
        imagem: "imagens/mcfiesta.jpg"
    },
    {
        titulo: "McRoyale",
        descricao: "Hambúrguer de carne, queijo, alface, tomate, maionese, pão de hambúrguer.",
        localizacao: {
            nome: "Egito",
            link: "https://www.google.com/maps/place/Egito"
        },
        curiosidade: "Um dos lanches mais vendidos no Egito.",
        imagem: "imagens/mcroyale.jpg"
    },
    {
        titulo: "McFarmhouse",
        descricao: "Hambúrguer de carne, queijo, alface, tomate, pão de hambúrguer.",
        localizacao: {
            nome: "Reino Unido",
            link: "https://www.google.com/maps/place/Reino+Unido"
        },
        curiosidade: "Um lanche popular nas áreas rurais do Reino Unido.",
        imagem: "imagens/mcfarmhouse.jpg"
    },
    {
        titulo: "McBratwurst",
        descricao: "Salsicha Bratwurst, cebola, mostarda, pão de hot dog.",
        localizacao: {
            nome: "Alemanha",
            link: "https://www.google.com/maps/place/Alemanha"
        },
        curiosidade: "Inspirado na tradicional salsicha alemã.",
        imagem: "imagens/mcbratwurst.jpg"
    },
    {
        titulo: "McKimchi",
        descricao: "Hambúrguer de carne, kimchi, alface, molho picante, pão de hambúrguer.",
        localizacao: {
            nome: "Coreia do Sul",
            link: "https://www.google.com/maps/place/Coreia+do+Sul"
        },
        curiosidade: "Kimchi é um prato tradicional coreano.",
        imagem: "imagens/mckimchi.jpg"
    },
    {
        titulo: "McGourmet",
        descricao: "Hambúrguer de carne gourmet, queijo, alface, tomate, pão especial.",
        localizacao: {
            nome: "Estados Unidos",
            link: "https://www.google.com/maps/place/Estados+Unidos"
        },
        curiosidade: "Uma opção gourmet para os fãs de hambúrguer nos EUA.",
        imagem: "imagens/mcgourmet.jpg"
    },
    {
        titulo: "McRosti",
        descricao: "Hambúrguer de carne, batata rösti, queijo, alface, tomate, pão de hambúrguer.",
        localizacao: {
            nome: "Suíça",
            link: "https://www.google.com/maps/place/Suíça"
        },
        curiosidade: "Rösti é um prato suíço feito de batata.",
        imagem: "imagens/mcrosti.jpg"
    },
    {
        titulo: "McPoutine",
        descricao: "Batata frita, molho gravy, queijo coalho.",
        localizacao: {
            nome: "Canadá",
            link: "https://www.google.com/maps/place/Canadá"
        },
        curiosidade: "Poutine é um prato típico do Canadá.",
        imagem: "imagens/mcpoutine.jpg"
    },
    {
        titulo: "McSamba",
        descricao: "Hambúrguer de carne, alface, tomate, maionese, pão de hambúrguer.",
        localizacao: {
            nome: "Brasil",
            link: "https://www.google.com/maps/place/Brasil"
        },
        curiosidade: "Inspirado nos sabores brasileiros.",
        imagem: "imagens/mcsamba.jpg"
    },
    {
        titulo: "McZeppelin",
        descricao: "Salsicha bratwurst, chucrute, mostarda, pão de hot dog.",
        localizacao: {
            nome: "Alemanha",
            link: "https://www.google.com/maps/place/Alemanha"
        },
        curiosidade: "Inspirado na culinária alemã.",
        imagem: "imagens/mczeppelin.jpg"
    }
];