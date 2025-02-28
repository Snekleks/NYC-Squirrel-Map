var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2018CentralParkSquirrelCensusSquirrelData_20250227_1 = new ol.format.GeoJSON();
var features_2018CentralParkSquirrelCensusSquirrelData_20250227_1 = format_2018CentralParkSquirrelCensusSquirrelData_20250227_1.readFeatures(json_2018CentralParkSquirrelCensusSquirrelData_20250227_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2018CentralParkSquirrelCensusSquirrelData_20250227_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2018CentralParkSquirrelCensusSquirrelData_20250227_1.addFeatures(features_2018CentralParkSquirrelCensusSquirrelData_20250227_1);
var lyr_2018CentralParkSquirrelCensusSquirrelData_20250227_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2018CentralParkSquirrelCensusSquirrelData_20250227_1, 
                style: style_2018CentralParkSquirrelCensusSquirrelData_20250227_1,
                popuplayertitle: '2018 Central Park Squirrel Census - Squirrel Data_20250227',
                interactive: true,
    title: '2018 Central Park Squirrel Census - Squirrel Data_20250227<br />\
    <img src="styles/legend/2018CentralParkSquirrelCensusSquirrelData_20250227_1_0.png" /> Black<br />\
    <img src="styles/legend/2018CentralParkSquirrelCensusSquirrelData_20250227_1_1.png" /> Cinnamon<br />\
    <img src="styles/legend/2018CentralParkSquirrelCensusSquirrelData_20250227_1_2.png" /> Gray<br />\
    <img src="styles/legend/2018CentralParkSquirrelCensusSquirrelData_20250227_1_3.png" /> <br />' });

lyr_OSMStandard_0.setVisible(true);lyr_2018CentralParkSquirrelCensusSquirrelData_20250227_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_2018CentralParkSquirrelCensusSquirrelData_20250227_1];
lyr_2018CentralParkSquirrelCensusSquirrelData_20250227_1.set('fieldAliases', {'x': 'x', 'moans': 'moans', 'primary_fur_color': 'primary_fur_color', 'hectare': 'hectare', 'foraging': 'foraging', 'specific_location': 'specific_location', 'location': 'location', 'unique_squirrel_id': 'unique_squirrel_id', 'y': 'y', 'running': 'running', 'kuks': 'kuks', 'above_ground_sighter': 'above_ground_sighter', 'shift': 'shift', 'color_notes': 'color_notes', 'tail_twitches': 'tail_twitches', 'other_activities': 'other_activities', 'age': 'age', 'highlight_fur_color': 'highlight_fur_color', 'climbing': 'climbing', 'indifferent': 'indifferent', 'runs_from': 'runs_from', 'date': 'date', 'hectare_squirrel_number': 'hectare_squirrel_number', 'quaas': 'quaas', 'approaches': 'approaches', 'eating': 'eating', 'combination_of_primary_and': 'combination_of_primary_and', 'chasing': 'chasing', 'other_interactions': 'other_interactions', 'tail_flags': 'tail_flags', });
lyr_2018CentralParkSquirrelCensusSquirrelData_20250227_1.set('fieldImages', {'x': 'TextEdit', 'moans': 'TextEdit', 'primary_fur_color': 'TextEdit', 'hectare': 'TextEdit', 'foraging': 'TextEdit', 'specific_location': 'TextEdit', 'location': 'TextEdit', 'unique_squirrel_id': 'TextEdit', 'y': 'TextEdit', 'running': 'TextEdit', 'kuks': 'TextEdit', 'above_ground_sighter': 'TextEdit', 'shift': 'TextEdit', 'color_notes': 'TextEdit', 'tail_twitches': 'TextEdit', 'other_activities': 'TextEdit', 'age': 'TextEdit', 'highlight_fur_color': 'TextEdit', 'climbing': 'TextEdit', 'indifferent': 'TextEdit', 'runs_from': 'TextEdit', 'date': 'TextEdit', 'hectare_squirrel_number': 'TextEdit', 'quaas': 'TextEdit', 'approaches': 'TextEdit', 'eating': 'TextEdit', 'combination_of_primary_and': 'TextEdit', 'chasing': 'TextEdit', 'other_interactions': 'TextEdit', 'tail_flags': 'TextEdit', });
lyr_2018CentralParkSquirrelCensusSquirrelData_20250227_1.set('fieldLabels', {'x': 'no label', 'moans': 'no label', 'primary_fur_color': 'no label', 'hectare': 'no label', 'foraging': 'no label', 'specific_location': 'no label', 'location': 'no label', 'unique_squirrel_id': 'no label', 'y': 'no label', 'running': 'no label', 'kuks': 'no label', 'above_ground_sighter': 'no label', 'shift': 'no label', 'color_notes': 'no label', 'tail_twitches': 'no label', 'other_activities': 'no label', 'age': 'no label', 'highlight_fur_color': 'no label', 'climbing': 'no label', 'indifferent': 'no label', 'runs_from': 'no label', 'date': 'no label', 'hectare_squirrel_number': 'no label', 'quaas': 'no label', 'approaches': 'no label', 'eating': 'no label', 'combination_of_primary_and': 'no label', 'chasing': 'no label', 'other_interactions': 'no label', 'tail_flags': 'no label', });
lyr_2018CentralParkSquirrelCensusSquirrelData_20250227_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});