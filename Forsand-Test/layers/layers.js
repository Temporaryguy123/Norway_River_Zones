var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_Newscratchlayer_1 = new ol.format.GeoJSON();
var features_Newscratchlayer_1 = format_Newscratchlayer_1.readFeatures(json_Newscratchlayer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Newscratchlayer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Newscratchlayer_1.addFeatures(features_Newscratchlayer_1);
var lyr_Newscratchlayer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Newscratchlayer_1, 
                style: style_Newscratchlayer_1,
                popuplayertitle: 'New scratch layer',
                interactive: true,
                title: '<img src="styles/legend/Newscratchlayer_1.png" /> New scratch layer'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_Newscratchlayer_1.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_Newscratchlayer_1];
lyr_Newscratchlayer_1.set('fieldAliases', {});
lyr_Newscratchlayer_1.set('fieldImages', {});
lyr_Newscratchlayer_1.set('fieldLabels', {});
lyr_Newscratchlayer_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});