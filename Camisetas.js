const camisetas = [

 // La Liga
 { nombre: "Futbol Club Barcelona 24/25", liga: "La Liga", imagen: "https://images.footballfanatics.com/barcelona/mens-nike-royal-barcelona-2024/25-home-authentic-custom-jersey_ss5_p-201545709+pv-2+u-lua8h3o9wmlkvhehm8v5+v-xt5ehwdla41giwzw94zh.jpg?_hv=2&w=900", url: "La liga.html" },
 { nombre: "Real Madrid 24/25", liga: "La Liga", imagen: "https://shop.realmadrid.com/_next/image?url=https%3A%2F%2Flegends.broadleafcloud.com%2Fapi%2Fasset%2Fcontent%2FRMCFMZ0195-01-1.jpg%3FcontextRequest%3D%257B%2522forceCatalogForFetch%2522%3Afalse%2C%2522forceFilterByCatalogIncludeInheritance%2522%3Afalse%2C%2522forceFilterByCatalogExcludeInheritance%2522%3Afalse%2C%2522applicationId%2522%3A%252201H4RD9NXMKQBQ1WVKM1181VD8%2522%2C%2522tenantId%2522%3A%2522REAL_MADRID%2522%257D&w=1200&q=50", url: "La liga.html" },
 { nombre: "Atlético de Madrid 24/25", liga: "La Liga", imagen: "https://shop.atleticodemadrid.com/on/demandware.static/-/Sites-atm-master-catalog/default/dw4514c340/FN8769-405.jpg", url: "La liga.html" },
 { nombre: "Sevilla 24/25", liga: "La Liga", imagen: "https://shop.sevillafc.es/cdn/shop/files/camiseta1.png?v=1723030301", url: "La liga.html" },
 { nombre: "Real Betis 24/25", liga: "La Liga", imagen: "https://footzilla.shop/cdn/shop/files/1_ed35412e-89a6-4b9b-8443-d385d32d39a6.jpg?v=1728322046&width=1800", url: "La liga.html" },
 { nombre: "Real Sociedad 24/25", liga: "La Liga", imagen: "https://mediarsstore.realsociedad.eus/2703-thickbox_default/kamiseta-home-2425.jpg", url: "La liga.html" },
 { nombre: "Athletic Club 24/25", liga: "La Liga", imagen: "https://images.footballfanatics.com/athletic-club-bilbao/athletic-bilbao-castore-home-shirt-2024-25_ss5_p-200827566+pv-2+u-ilspzyudhxfjvrfsfg5a+v-acaczxsw0dphrvnzzhoc.jpg?_hv=2&w=900", url: "La liga.html" },
 { nombre: "Valencia 24/25", liga: "La Liga", imagen: "https://footzilla.shop/cdn/shop/files/1_ff06f8ac-e9bd-4f4f-8c83-36298fa1295f.jpg?v=1722515171&width=1800", url: "La liga.html" },
 { nombre: "Villarreal 24/25", liga: "La Liga", imagen: "sport.com/dw/image/v2/BFRV_PRD/on/demandware.static/-/Sites-joma-masterCatalog/default/dwc9331b7a/images/medium/AI10601B0201_1.jpg?sw=460&sh=475&sm=fit", url: "La liga.html" },
 { nombre: "Girona 24/25", liga: "La Liga", imagen: "https://botiga.gironafc.cat/wp-content/uploads/2024/06/producte-retail-06-homekit-768x768.jpg", url: "La liga.html" },

  // Premier League
  { nombre: "Liverpool 24/25", liga: "Premier League", imagen: "https://www.futbolemotion.com/imagesarticulos/218559/grandes/camiseta-nike-liverpool-fc-primera-equipacion-authentic-2024-2025-gym-red-white-chrome-yellow-7.webp", url: "Premier.html" },
  { nombre: "Manchester City 24/25", liga: "Premier League", imagen: "https://shop.mancity.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog-MAN/default/dw887b23ea/images/large/701230876001_pp_01_mcfc.png?sw=1600&sh=1600&sm=fit", url: "Premier.html" },
  { nombre: "Chelsea 24/25", liga: "Premier League", imagen: "https://images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2024-25_ss5_p-200851164+pv-2+u-canixtzkdetrqr6ldmyh+v-urvlapfisvffp6cea3w2.jpg?_hv=2&w=900", url: "Premier.html" },
  { nombre: "Manchester United 24/25", liga: "Premier League", imagen: "https://mufc-live.cdn.scayle.cloud/images/032465a23bed509d050589e6439809a2.jpg?brightness=1&width=1536&height=2048&quality=75&bg=ffffff", url: "Premier.html" },
  { nombre: "Arsenal 24/25", liga: "Premier League", imagen: "https://cf.soccerdealshop.cc/upload/ttmall/img/20240516/fa66a6bbbe494a6e535dffa0d5cc292a.png=z-800,800_f-webp", url: "Premier.html" },
  { nombre: "Tottenham 24/25", liga: "Premier League", imagen: "https://cdn11.bigcommerce.com/s-5e8c3uvulz/images/stencil/900w/products/15485/31540/home-mens-kit-mens-stadium-tottenham-hotspur-home-shirt-202425__45523.1718792904.jpg?c=1", url: "Premier.html" },
  { nombre: "Aston Villa 24/25", liga: "Premier League", imagen: "https://cf.soccerdealshop.cc/upload/ttmall/img/20240516/fa66a6bbbe494a6e535dffa0d5cc292a.png=z-800,800_f-webp", url: "Premier.html" },
  { nombre: "Nottingham Forest 24/25", liga: "Premier League", imagen: "https://shop.nottinghamforest.co.uk/cdn/shop/files/nffc-home-shirt-2425-nottingham-forest-fc-762344_1000x.jpg?v=1730244527", url: "Premier.html" },
  { nombre: "West Ham 24/25", liga: "Premier League", imagen: "https://footzilla.shop/cdn/shop/files/1_1acc600a-738d-446f-84fc-41ce8d951738.jpg?v=1722936912&width=1800", url: "Premier.html" },
  { nombre: "Newcastle 24/25", liga: "Premier League", imagen: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e9cb6df6973d4dda8af7b5162dc0c1ae_9366/Newcastle_United_FC_24-25_Home_Jersey_Black_IX3165_HM30.jpg", url: "Premier.html" },

  // Bundesliga
  { nombre: "Bayern Munich 24/25", liga: "Bundesliga", imagen: "https://footballcentral.co.nz/cdn/shop/files/FCBayernAdultHomeJersey2425_1000x1000.jpg?v=1718933331", url: "Bundesliga.html" },
  { nombre: "Borussia Dortmund 24/25", liga: "Bundesliga", imagen: "https://shop.bvbcdn.de/media/image/bd/3c/b1/83912-1b73527656435_600x600@2x.jpg", url: "Bundesliga.html" },
  { nombre: "Bayer Leverkusen 24/25", liga: "Bundesliga", imagen: "https://b04-ep-media-prod.azureedge.net/pickerimages-shop/2002878_Heimtrikot-ERW-Castore-2425_Front1_636732_XL.jpg", url: "Bundesliga.html" },
  { nombre: "RB Leipzig 24/25", liga: "Bundesliga", imagen: "https://footzilla.shop/cdn/shop/files/1_a3cdef91-d217-4701-9890-8bef5dc39fdf.jpg?v=1722259308&width=1800", url: "Bundesliga.html" },
  { nombre: "Wolfsburg 24/25", liga: "Bundesliga", imagen: "https://static-shop6.vfl-wolfsburg.de/media/a9/0b/ef/1720082548/2401010101-HeimtrikotBundesliga202425-VfLWolfsburg-1-BCItem1.png", url: "Bundesliga.html" },

  // Serie A
  { nombre: "Juventus", liga: "Serie A", imagen: "https://store.juventus.com/images/juventus/products/large/JU24A01.webp", url: "Serie A.html" },
  { nombre: "AC Milan 24/25", liga: "Serie A", imagen: "https://footzilla.shop/cdn/shop/files/1_34ca363a-b0c3-4d59-b215-dabcc39de5c4.jpg?v=1721077298&width=1800", url: "Serie A.html" },
  { nombre: "Inter de Milán 24/25", liga: "Serie A", imagen: "https://store.inter.it/dw/image/v2/BJBQ_PRD/on/demandware.static/-/Sites-inter-master-catalog/default/dw4de19501/images/large/24N001M0103_01.jpg?sw=1400&q=80", url: "Serie A.html" },
  { nombre: "AS Roma 24/25", liga: "Serie A", imagen: "https://footzilla.shop/cdn/shop/files/1_8dc70212-3223-4432-8adb-e2a903a94a3e.jpg?v=1723219927&width=1800", url: "Serie A.html" },
  { nombre: "Napoli 24/25", liga: "Serie A", imagen: "https://static.sscnapoli.it/img/p/9/7/7/4/9774-large_default.jpg", url: "Serie A.html" },
  { nombre: "Lazio 24/25", liga: "Serie A", imagen: "https://www.laziostylestore.com/images/lazio/products/small/LZ24A01.webp", url: "Serie A.html" },
  { nombre: "Atalanta 24/25", liga: "Serie A", imagen: "https://store.atalanta.it/images/atalanta/products/large/AT24A01.webp", url: "Serie A.html" },
  { nombre: "Fiorentina 24/25", liga: "Serie A", imagen: "https://www.fiorentinastore.com/images/fiorentina/products/large/FI24A10.webp", url: "Serie A.html" },
    
  // Ligue 1
  { nombre: "PSG 24/25", liga: "Ligue 1", imagen: "https://images.footballfanatics.com/paris-saint-germain/psg-nike-home-stadium-shirt-2024-25_ss5_p-200827669+pv-2+u-zsehjrrtq4aszhqrqd0f+v-gfgancmusfnavrx7ghgz.jpg?_hv=2&w=900", url: "Ligue one.html" },
  { nombre: "Olympique de Marsella 24/25", liga: "Ligue 1", imagen: "https://boutique.om.fr/media/catalog/product/cache/559a0c2b66077761cf75542946381af7/m/a/maillot-om-domicile-24-25-homme-0_4.jpg", url: "Ligue one.html" },
  { nombre: "Olympique de Lyon 24/25", liga: "Ligue 1", imagen: "https://olbtqtwiccdn.ol.fr/39711-zoom_default/24-25-men-s-home-jersey.jpg", url: "Ligue one.html" },
  { nombre: "AS Mónaco 24/25", liga: "Ligue 1", imagen: "https://shop.asmonaco.com/cdn/shop/files/351P33W_A13_1APM_1800x1800.jpg?v=1720074917", url: "Ligue one.html" },
  { nombre: "Lille OSC 24/25", liga: "Ligue 1", imagen: "https://www.boutique-losc.fr/assets/uploads/images/products/max/3361-2z80.webp", url: "Ligue one.html" },

  // Selecciones
  { nombre: "Argentina 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" },
  { nombre: "Francia 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" },
  { nombre: "España 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" },
  { nombre: "Inglaterra 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" },
  { nombre: "Brasil 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" },
  { nombre: "Portugal 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" },
  { nombre: "Países Bajos 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" },
  { nombre: "Bélgica 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" },
  { nombre: "Italia 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" },
  { nombre: "Alemania 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" },
  { nombre: "Polonia 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" },
  { nombre: "Colombia 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" },
  { nombre: "Croacia 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" },
  { nombre: "Marruecos 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" },
  { nombre: "Japón 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" },
  { nombre: "Estados Unidos 24/25", liga: "Selecciones", imagen: "", url: "Selecciones.html" }
];
