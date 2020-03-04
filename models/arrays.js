const mongoose = require('mongoose')





let grains =['CaraFoam','UK Pilsner 2 Row', 'Pilsen', 'Flaked Oats', 'Malted Oats', 'Flaked Corn', '2 Row Malt', 'Flaked Barley', '6 Row Malt', 'Golden Promise', 'Bohemian Pilsner', 'Irish Stout Malt', 'German Wheat', 'White Wheat', 'Wheat Malt', 'Carapils', 'Flaked Rye', 'Acidulated Malt', 'Red Wheat', 'Oak Smoked Wheat', 'Maris Otter', 'Kolsch Malt', 'Pale Ale', 'Vienna Malt', 'Cherrywood Beechwood Smoked Malt', 'Light Munich Malt', 'Golden Naked Oats', 'Munich Malt', 'Munich 10', 'Red X', 'Abbey Malt', 'Beechwood Smoked Malt', 'Crystal 10', 'CaraHel', 'CaraBelge', 'Crystal 20', ' CaraRed', 'Melanoidin Malt', 'Amber Malt', 'CaraVienna Malt', 'Biscuit Malt', 'Honey Malt', 'Aromatic Malt', 'Victory Malt', 'Crystal 40', 'CaraMunich I', 'Special Roast', 'CaraMunich II', 'Crystal 60', 'Brown Malt', 'Crystal 120', 'Extra Special', 'CaraAroma', 'Special B', 'Chocolate Rye', 'Roasted Barley', 'Carafa 1', 'Pale Chocolate', 'Chocolate Malt', 'Chocolate Wheat', 'Carafa II', 'Dark Chocolate Malt', 'Black Patent', 'Black Malt'];

function getAllGrains(){
    return grains;
}

let hops = ['Admiral','Agnus','Ahtanum','Amarillo','Apollo','Bohemie','Bor','Bramling','Brewers Gold','Bullion','Cascade','Centennial','Challenger','Chinook','Citra®','Cluster','Columbus','Crystal','Eroica','Feux-Coeur Francais','First Gold','Fuggle','Galaxy','Galena','Glacier','Goldings','Green Bullet','Greenburg','Hallertau','Harmonie','Herald','Herkules','Hersbrucker','Horizon','Kazbek','Liberty','Lublin','Magnum','Merkur','Millennium','Mosaic','Motueka','Mount Hood','Mount','Rainier','Nelson Sauvin','Newport','Northdown','Northern Brewer','Nugget','Opal','Pacific Gem','Pacific Jade','Pacifica','Palisade','Perle','Phoenix','Pilgrim','Pilot','Pioneer','Polnischer','Premiant','Pride of Ringwood','Progress','Riwaka'	,'Rubin'	,'Saaz'	,'Saaz Late','San Juan Ruby Red','Santiam','Saphir','Satus','Select','Simcoe','Sladek','Smaragd','Sorachi Ace','Southern Cross','Spalt','Sterling','Strisselspalt','Styrian Aurora','Styrian Bobek','Styrian Celeia','Styrian Goldings','Summit','Tardif de Bourgogne','Target','Taurus','Tettnang','Tomahawk','Tomyski'	,'Tradition','Ultra','Vanguard','Vital','Waimea','Warrior','Whitbread Golding','Willamette','Zeus'];

function getAllHops(){
    return hops;
}

let lagers=[
,'German-Style Pilsener'
,'Bohemian-Style Pilsener'
,'Munich-Style Helles'
,'Dortmunder/European-Style Export'
,'Vienna-Style Lager'
,'Franconian-Style Rotbier'
,'German-Style Maerzen'
,'German-Style Oktoberfest/Wiesn'
,'Munich-Style Dunkel'
,'European-Style Dark Lager'
,'German-Style Schwarzbier'
,'German-Style Leichtbier'
,'Bamberg-Style Helles Rauchbier'
,'Bamberg-Style Maerzen Rauchbier'
,'Bamberg-Style Bock Rauchbier'
,'German-Style Heller Bock/Maibock'
,'Traditional German-Style Bock'
,'German-Style Doppelbock'
,'German-Style Eisbock'
,'American-Style Lager'
,'Contemporary American-Style Lager'
,'American-Style Light Lager'
,'American-Style Amber Light Lager'
,'Contemporary American-Style Light Lager'
,'American-Style Pilsener'
,'Contemporary American-Style Pilsener'
,'American-Style India Pale Lager'
,'American-Style Malt Liquor'
,'American-Style Amber Lager'
,'American-Style Maerzen/Oktoberfest'
,'American-Style Dark Lager'
,'Baltic-Style Porter'
,'Australasian, Latin American or Tropical-Style Light Lager'
,'International-Style Pilsener'];

function getAllLagers(){
    return lagers;
}
let hybrids =['Session Beer','Session India Pale Ale','American-Style Cream Ale','California Common Beer','American-Style Wheat Beer','Kellerbier or Zwickelbier'
,'American-Style Fruit Beer','Fruit Wheat Beer'
,'Belgian-Style Fruit Beer','Field Beer','Pumpkin Spice Beer','Pumpkin/Squash Beer','Chocolate or Cocoa Beer','Coffee Beer','Chili Pepper Beer','Herb and Spice Beer','Specialty Beer','Specialty Honey Beer','Rye Beer','Brett Beer','Mixed-Culture Brett Beer','Ginjo Beer or Sake-Yeast Beer','Fresh Hop Beer','Wood- and Barrel-Aged Beer','Wood- and Barrel-Aged Sour Beer','Aged Beer','Experimental Beer','Experimental India Pale Ale','Historical Beer','Wild Beer','Smoke Beer','Other Strong Ale or Lager','Gluten-Free Beer','Non-Alcohol Malt Beverage']
function getAllHybrids(){
    return hybrids;
}
let ales=['Ordinary Bitter','Special Bitter or Best Bitter','Extra Special Bitter','Scottish-Style Light Ale','Scottish-Style Heavy Ale','Scottish-Style Export Ale','English-Style Summer Ale','Classic English-Style Pale Ale','English-Style India Pale Ale','Strong Ale','Old Ale','English-Style Pale Mild Ale','English-Style Dark Mild Ale','English-Style Brown Ale','Brown Porter','Robust Porter','Sweet Stout or Cream Stout','Oatmeal Stout','Scotch Ale or Wee Heavy','British-Style Imperial Stout','British-Style Barley Wine Ale','Irish-Style Red Ale','Classic Irish-Style Dry Stout','Export-Style Stout','Golden or Blonde Ale','American-Style Amber/Red Ale','American-Style Pale Ale','Juicy or Hazy Pale Ale','American-Style Strong Pale Ale','Juicy or Hazy Strong Pale Ale','American-Style India Pale Ale','Juicy or Hazy India Pale Ale','American-Belgo-Style Ale','American-Style Brown Ale','American-Style Black Ale','American-Style Stout','American-Style Imperial Porter','American-Style Imperial Stout','Double Hoppy Red Ale','Imperial Red Ale','American-Style Imperial or Double India Pale Ale','Juicy or Hazy Imperial or Double India Pale Ale','American-Style Barley Wine Ale','American-Style Wheat Wine Ale','Smoke Porter','American-Style Sour Ale','American-Style Fruited Sour Ale','German-Style Koelsch','German-Style Altbier','Berliner-Style Weisse','Leipzig-Style Gose','Contemporary-Style Gose','South German-Style Hefeweizen','South German-Style Kristal Weizen','German-Style Leichtes Weizen','South German-Style Bernsteinfarbenes Weizen','South German-Style Dunkel Weizen','South German-Style Weizenbock','German-Style Rye Ale','Bamberg-Style Weiss Rauchbier','Belgian-Style Blonde Ale','Belgian-Style Pale Ale','Belgian-Style Pale Strong Ale','Belgian-Style Dark Strong Ale','Belgian-Style Dubbel','Belgian-Style Tripel','Belgian-Style Quadrupel','Belgian-Style Witbier','Classic French & Belgian-Style Saison','Specialty Saison','French-Style Bière de Garde','Belgian-Style Flanders Oud Bruin or Oud Red Ale','Belgian-Style Lambic','Traditional Belgian-Style Gueuze Lambic','Contemporary Belgian-Style Spontaneous Fermented Ale','Belgian-Style Fruit Lambic','Other Belgian-Style Ale','Belgian-Style Table Beer','Grodziskie','Adambier','Dutch-Style Kuit, Kuyt or Koyt','Classic Australian-Style Pale Ale','Australian-Style Pale Ale','International-Style Pale Ale','Finnish-Style Sahti','Swedish-Style Gotlandsdricke','Breslau-Style Schoeps'];
function getAllAles(){
    return ales;
}

module.exports= {
    getAllGrains,
    getAllHops,
    getAllLagers,
    getAllAles,
    getAllHybrids
}


