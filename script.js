jQuery(document).ready(function () {
  jQuery("#nanogallery2").nanogallery2({
  	items:[
      // album 1
    	{
					src:    'berlin1.jpg',		  // image url
					srct:   'berlin1t.jpg',	  // thumbnail url
					title:  'Tubería',      // element title
          ID:     1,
          kind:   'album'
			},
			{ src: 'berlin1.jpg', srct: 'berlin1t.jpg', title: 'Berlin 1-A', ID: 10, albumID: 1},
			{ src: 'berlin1.jpg', srct: 'berlin1t.jpg', title: 'Berlin 1-B', ID: 11, albumID: 1},

      // album 2
      { src: 'berlin2.jpg', srct: 'berlin2t.jpg', title: 'Consola', ID: 2, kind: 'album'},
			{ src: 'consola_001.jpeg', srct: 'consola_001t.jpg', title: 'Consola', ID: 21, albumID: 2},
			{ src: 'berlin2.jpg', srct: 'berlin2t.jpg', title: 'Berlin 2-B', ID: 22, albumID: 2},
			{ src: 'berlin2.jpg', srct: 'berlin2t.jpg', title: 'Berlin 2-C', ID: 23, albumID: 2},
			{ src: 'berlin2.jpg', srct: 'berlin2t.jpg', title: 'Berlin 2-D', ID: 24, albumID: 2},
      
		],
    itemsBaseURL: 'https://atanasiominderlinten.github.io/8pes/',
		locationHash: false,

          // GALLERY AND THUMBNAIL LAYOUT
          galleryL1DisplayMode: 'fullContent',                // first level display mode -> fullContent
          galleryDisplayMode: 'rows',                         // other levels display mode -> 4 rows
          galleryMaxRows: 4,
          gallerySorting: 'random',

          // thumbnail on first gallery level
          thumbnailL1Height: 400, thumbnailL1Width: 600,      // first level -> grid kayout
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
          thumbnailL1Label: { display: true, valign:'bottom', hideIcons: true, titleFontSize: '3em', align: 'left', titleMultiLine:true, displayDescription: false},
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
          thumbnailL1BuildInit2: 'title_font-weight_bold|image_scale_0.8|label_left_-20px|label_top_92%|label_rotateZ_-90deg|label_transform-origin_top left',
          thumbnailL1HoverEffect2: 'imageGrayOff|title_color_#C176AE_#aaaaaa|labelOpacity50',
          // other levels -> no hover effect

          // touch handling
          touchAnimation: false,
          touchAutoOpenDelay: 800,

          // GALLERY THEME
          galleryTheme : { 
            thumbnail: { background: '#000', titleShadow : 'none', descriptionShadow : 'none', titleColor: '#fff', borderColor: '#000' },
            navigationBreadcrumb: { background : '#C176AE' },
          },

  });
});
