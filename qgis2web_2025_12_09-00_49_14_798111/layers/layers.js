var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_VAUCLUSE_1 = new ol.format.GeoJSON();
var features_VAUCLUSE_1 = format_VAUCLUSE_1.readFeatures(json_VAUCLUSE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VAUCLUSE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VAUCLUSE_1.addFeatures(features_VAUCLUSE_1);
var lyr_VAUCLUSE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VAUCLUSE_1, 
                style: style_VAUCLUSE_1,
                popuplayertitle: 'VAUCLUSE',
                interactive: true,
                title: '<img src="styles/legend/VAUCLUSE_1.png" /> VAUCLUSE'
            });
var format_Acteurs_2 = new ol.format.GeoJSON();
var features_Acteurs_2 = format_Acteurs_2.readFeatures(json_Acteurs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acteurs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acteurs_2.addFeatures(features_Acteurs_2);
var lyr_Acteurs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acteurs_2, 
                style: style_Acteurs_2,
                popuplayertitle: 'Acteurs ',
                interactive: true,
    title: 'Acteurs <br />\
    <img src="styles/legend/Acteurs_2_0.png" /> Acteurs associatifs<br />\
    <img src="styles/legend/Acteurs_2_1.png" /> Acteurs Privés<br />\
    <img src="styles/legend/Acteurs_2_2.png" /> Acteurs Publics<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_VAUCLUSE_1.setVisible(true);lyr_Acteurs_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_VAUCLUSE_1,lyr_Acteurs_2];
lyr_VAUCLUSE_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nom_com': 'nom_com', 'nom_com_m': 'nom_com_m', 'insee_com': 'insee_com', 'statut': 'statut', 'insee_can': 'insee_can', 'insee_arr': 'insee_arr', 'insee_dep': 'insee_dep', 'insee_reg': 'insee_reg', 'code_epci': 'code_epci', 'population': 'population', 'type': 'type', });
lyr_Acteurs_2.set('fieldAliases', {'VILLES': 'VILLES', 'NOMS Codés': 'NOMS Codés', 'NOMS': 'NOMS', 'ADRESSE': 'ADRESSE', 'STATUT': 'STATUT', 'longitude': 'longitude', 'latitude': 'latitude', 'result_score': 'result_score', 'result_score_next': 'result_score_next', 'result_label': 'result_label', 'result_type': 'result_type', 'result_id': 'result_id', 'result_housenumber': 'result_housenumber', 'result_name': 'result_name', 'result_street': 'result_street', 'result_postcode': 'result_postcode', 'result_city': 'result_city', 'result_context': 'result_context', 'result_citycode': 'result_citycode', 'result_oldcitycode': 'result_oldcitycode', 'result_oldcity': 'result_oldcity', 'result_district': 'result_district', 'result_status': 'result_status', });
lyr_VAUCLUSE_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'nom_com': 'TextEdit', 'nom_com_m': 'TextEdit', 'insee_com': 'TextEdit', 'statut': 'TextEdit', 'insee_can': 'TextEdit', 'insee_arr': 'TextEdit', 'insee_dep': 'TextEdit', 'insee_reg': 'TextEdit', 'code_epci': 'TextEdit', 'population': 'TextEdit', 'type': 'TextEdit', });
lyr_Acteurs_2.set('fieldImages', {'VILLES': 'TextEdit', 'NOMS Codés': 'TextEdit', 'NOMS': 'TextEdit', 'ADRESSE': 'TextEdit', 'STATUT': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'result_score': 'TextEdit', 'result_score_next': 'TextEdit', 'result_label': 'TextEdit', 'result_type': 'TextEdit', 'result_id': 'TextEdit', 'result_housenumber': 'TextEdit', 'result_name': 'TextEdit', 'result_street': 'TextEdit', 'result_postcode': 'TextEdit', 'result_city': 'TextEdit', 'result_context': 'TextEdit', 'result_citycode': 'TextEdit', 'result_oldcitycode': 'TextEdit', 'result_oldcity': 'TextEdit', 'result_district': 'TextEdit', 'result_status': 'TextEdit', });
lyr_VAUCLUSE_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'nom_com': 'hidden field', 'nom_com_m': 'hidden field', 'insee_com': 'hidden field', 'statut': 'hidden field', 'insee_can': 'hidden field', 'insee_arr': 'hidden field', 'insee_dep': 'hidden field', 'insee_reg': 'hidden field', 'code_epci': 'hidden field', 'population': 'hidden field', 'type': 'hidden field', });
lyr_Acteurs_2.set('fieldLabels', {'VILLES': 'inline label - visible with data', 'NOMS Codés': 'inline label - visible with data', 'NOMS': 'inline label - visible with data', 'ADRESSE': 'hidden field', 'STATUT': 'inline label - visible with data', 'longitude': 'hidden field', 'latitude': 'hidden field', 'result_score': 'hidden field', 'result_score_next': 'hidden field', 'result_label': 'hidden field', 'result_type': 'hidden field', 'result_id': 'hidden field', 'result_housenumber': 'hidden field', 'result_name': 'hidden field', 'result_street': 'hidden field', 'result_postcode': 'hidden field', 'result_city': 'hidden field', 'result_context': 'hidden field', 'result_citycode': 'hidden field', 'result_oldcitycode': 'hidden field', 'result_oldcity': 'hidden field', 'result_district': 'hidden field', 'result_status': 'hidden field', });
lyr_Acteurs_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});