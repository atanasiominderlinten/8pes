jQuery(document).ready(function () {
  jQuery("#nanogallery2").nanogallery2({
  	items:[
      
      // album organo
      { src: 'indexorgano.jpg', srct: 'indexorgano.jpg', title: 'Órgano', ID: 1, kind: 'album'},
			{ src: 'organo_001.jpg', srct: 'organo_001t.jpg', title: 'Fachada', ID: 10, albumID: 1},
			{ src: 'organo_002.jpg', srct: 'organo_002t.jpg', title: 'Fachada desde o interior', ID: 11, albumID: 1},
      
      // album foles
      { src: 'indexfoles.jpg', srct: 'indexfoles.jpg', title: 'Foles', ID: 3, kind: 'album'},
			{ src: 'foles_001.jpg', srct: 'foles_001t.jpg', title: 'Depósitos de vento', ID: 30, albumID: 3},
			{ src: 'foles_002.jpg', srct: 'foles_002t.jpg', title: 'Ventilador eléctrico', ID: 31, albumID: 3},
			{ src: 'foles_003.jpg', srct: 'foles_003t.jpg', title: 'Portavento', ID: 32, albumID: 3},
     
      
      // album consola
      { src: 'indexconsola.jpg', srct: 'indexconsola.jpg', title: 'Consola', ID: 2, kind: 'album'},
			{ src: 'consola_001.jpg', srct: 'consola_001t.jpg', title: 'Vista xeral da consola', ID: 21, albumID: 2},
			{ src: 'consola_002.jpg', srct: 'consola_002t.jpg', title: 'Teclados manuais e plaquetas de rexistro', ID: 22, albumID: 2},
			{ src: 'consola_003.jpg', srct: 'consola_003t.jpg', title: 'Pedaleiro e pedal de expresión', ID: 23, albumID: 2},
			{ src: 'consola_004.jpg', srct: 'consola_004t.jpg', title: 'Ordenador da consola', ID: 24, albumID: 2},
			{ src: 'consola_005.jpg', srct: 'consola_005t.jpg', title: 'Contactos electrónicos dos secretos', ID: 25, albumID: 2},
			{ src: 'consola_006.jpg', srct: 'consola_006t.jpg', title: 'Relés electro-pneumáticos dos secretos', ID: 26, albumID: 2},
			{ src: 'consola_007.webm', srct: 'consola_006t.jpg', title: 'VIDEO TEST 1', ID: 27, albumID: 2},
			{ src: 'https://www.youtube.com/watch?v=5mzvfJ7279s', srct: 'consola_006t.jpg', title: 'VIDEO TEST 2', ID: 28, albumID: 2},
      
      // album tubos
      { src: 'indextubos.jpg', srct: 'indextubos.jpg', title: 'Tubos', ID: 4, kind: 'album'},
			{ src: 'tubos_001.jpg', srct: 'tubos_001t.jpg', title: 'Tubos do «Órgano mayor»', ID: 40, albumID: 4},
			{ src: 'tubos_001b.jpg', srct: 'tubos_001bt.jpg', title: 'Tubos do rexistro de Trompeta Real 8’', ID: 41, albumID: 4},
			{ src: 'tubos_002.jpg', srct: 'tubos_002.jpg', title: 'Tubos do «Órgano mayor»', ID: 42, albumID: 4},
			{ src: 'tubos_003.jpg', srct: 'tubos_003.jpg', title: 'Tubos do «Órgano mayor»', ID: 43, albumID: 4},
			{ src: 'tubos_004.jpg', srct: 'tubos_004.jpg', title: 'Tubos do «Recitativo»', ID: 44, albumID: 4},
			{ src: 'tubos_005.jpg', srct: 'tubos_005.jpg', title: 'Tubos do «Pedal»', ID: 45, albumID: 4},
			{ src: 'tubos_006.jpg', srct: 'tubos_006.jpg', title: 'Tubos do «Pedal»', ID: 46, albumID: 4},
			{ src: 'tubos_007.jpg', srct: 'tubos_007.jpg', title: 'Tubos máis graves do Fagot 16’', ID: 47, albumID: 4},
			{ src: 'tubos_008.jpg', srct: 'tubos_008.jpg', title: 'Detalle dos tubos do Fagot 16’', ID: 48, albumID: 4},
      
      // album historia
      { src: 'indexorgano.jpg', srct: 'indexorgano.jpg', title: 'Historia', ID: 5, kind: 'album'},
			{ src: 'historia_001.jpg', srct: 'historia_001t.jpg', title: 'O órgano no taller de Alberdi', ID: 50, albumID: 5},
			{ src: 'historia_002.jpg', srct: 'historia_002t.jpg', title: 'Os talleres de Alberdi', ID: 51, albumID: 5},
      
		],
    itemsBaseURL: 'https://atanasiominderlinten.github.io/8pes/',
		locationHash: false,

          // GALLERY AND THUMBNAIL LAYOUT
          galleryL1DisplayMode: 'fullContent',                // first level display mode -> fullContent
          galleryDisplayMode: 'rows',                         // other levels display mode -> 4 rows
          galleryMaxRows: 4,
         // gallerySorting: 'titleAsc',
        

          // thumbnail on first gallery level
          thumbnailL1Height: 600, thumbnailL1Width: 600,      // first level -> grid kayout
          thumbnailL1GutterWidth: 20,
          thumbnailL1GutterHeight: 20,
          thumbnailL1BorderHorizontal: 0,
          thumbnailL1BorderVertical: 0,

          // thumbnail on other gallery level
          thumbnailHeight: 400, thumbnailWidth: 'auto',       // other levels -> justified layout
          thumbnailGutterWidth: 2,
          thumbnailGutterHeight: 2,
          thumbnailBorderHorizontal: 0,
          thumbnailBorderVertical: 0,

          thumbnailAlignment: 'fillWidth',

          // THUMBNAIL TOOLS & LABEL
          thumbnailToolbarImage : null,
          thumbnailToolbarAlbum: null,
          // first level label
          <!-- thumbnailL1Label: { display: true, position:'overImageOnBottom', hideIcons: true, titleFontSize: '1em', align: 'center', titleMultiLine:true, displayDescription: false}, -->
          thumbnailL1Label: { display: true, valign:'bottom', hideIcons: true, titleFontSize: '3.2em', align: 'left', titleMultiLine:true, displayDescription: false},
          // other level label
          thumbnailLabel: { display: true, position:'overImageOnBottom', hideIcons: true, titleFontSize: '1em', align: 'center', titleMultiLine:true, displayDescription: false},

					// thumbnailToolbarAlbum: { topRight: 'counter' },

          // DISPLAY ANIMATION
          thumbnailL1DisplayTransition: 'flipUp',         // first level display animation
          thumbnailDisplayTransition: 'slideDown',        // other levels display animation
          thumbnailDisplayTransitionDuration: 500,
          thumbnailDisplayInterval: 30,

          // THUMBNAIL'S HOVER ANIMATION
          // first level
          <!-- thumbnailL1BuildInit2: 'title_font-weight_bold|image_scale_0.8|label_left_-5px|label_text-transform_uppercase|label_top_95%|label_rotateZ_-90deg|label_transform-origin_top left', -->
          thumbnailL1BuildInit2: 'title_font-weight_bold|image_scale_0.8|label_left_-10px|label_top_92%|label_rotateZ_-90deg|label_transform-origin_top left',
          thumbnailL1HoverEffect2: 'imageGrayOff|title_color_#C176AE_#aaaaaa|labelOpacity50',
          // other levels -> no hover effect

          // touch handling
          touchAnimation: false,
          touchAutoOpenDelay: 800,
    
    navigationFontSize: '1.25em',

          // GALLERY THEME
          galleryTheme : { 
            thumbnail: { background: '#000', titleShadow : 'none', descriptionShadow : 'none', titleColor: '#fff', borderColor: '#000' },
            navigationBreadcrumb: { background : '#C176AE', colorHover: '#ccc', },
          },
    
viewerToolbar:    {
        display:    true,
        standard:   'minimizeButton, label',
        minimized:  'minimizeButton, label, rotateRight'
      },
    
viewerTools:     {
        "topLeft":    "pageCounter",
        "topRight":   "zoomButton, closeButton"
      }  

  });
});