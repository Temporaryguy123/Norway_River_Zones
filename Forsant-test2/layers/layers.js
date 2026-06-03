var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Newscratchlayer_2 = new ol.format.GeoJSON();
var features_Newscratchlayer_2 = format_Newscratchlayer_2.readFeatures(json_Newscratchlayer_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Newscratchlayer_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Newscratchlayer_2.addFeatures(features_Newscratchlayer_2);
var lyr_Newscratchlayer_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Newscratchlayer_2, 
                style: style_Newscratchlayer_2,
                popuplayertitle: 'New scratch layer',
                interactive: true,
                title: '<img src="styles/legend/Newscratchlayer_2.png" /> New scratch layer'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_Newscratchlayer_2.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_ESRISatellite_1,lyr_Newscratchlayer_2];
lyr_Newscratchlayer_2.set('fieldAliases', {});
lyr_Newscratchlayer_2.set('fieldImages', {});
lyr_Newscratchlayer_2.set('fieldLabels', {});
lyr_Newscratchlayer_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});