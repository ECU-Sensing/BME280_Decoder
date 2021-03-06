// BME280 and Feather ID Decoder
function Decoder(bytes, port) {
    var decoded = {};
  
    // Decode bytes to int
    var celciusInt = (bytes[1] << 8) | bytes[2];
    var humidInt = (bytes[3] << 8) | bytes[4];
    var pressInt = (bytes[5] << 8) | bytes[6];
    
    // Decode Feather ID
    decoded.featherID = bytes[0]
    // Decode int to float
    decoded.celcius = celciusInt / 100;
    decoded.humid = humidInt / 100;
    decoded.pressure = pressInt /1000;
  
    return decoded;
  }
