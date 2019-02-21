import express from 'express';
const router = express.Router();

// UTILS
import {generateToken} from '../../utils/utils';
import * as constants from '../../utils/constants';
import * as json from '../../utils/jsonHelper';


// MODELS
import User from '../../models/bin';

// DAO
import * as dao from '../../dao/bin';

router.get('/getNearestBin', (req, res) => {
	let coord = req.query.coordinates;
	let result = [];
	dao.findAll().then((bins) => {
		bins.forEach(function(element) {
			if (calculateDistance(Number(coord[1]), Number(coord[0]), element.latitude, element.longitude) <= 0.02) {
				result.push(element);
			} 
		});
		if (result.length > 0) {
			res.status(200).json(result);
		} else {
			json.handleError(constants.CODE_400, res);
		}
	})
});

function calculateDistance(lat1, long1, lat2, long2){    

      //radians
      lat1 = (lat1 * 2.0 * Math.PI) / 60.0 / 360.0;      
      long1 = (long1 * 2.0 * Math.PI) / 60.0 / 360.0;    
      lat2 = (lat2 * 2.0 * Math.PI) / 60.0 / 360.0;   
      long2 = (long2 * 2.0 * Math.PI) / 60.0 / 360.0;       


      // use to different earth axis length    
      var a = 6378137.0;        // Earth Major Axis (WGS84)    
      var b = 6356752.3142;     // Minor Axis    
      var f = (a-b) / a;        // "Flattening"    
      var e = 2.0*f - f*f;      // "Eccentricity"      

      var beta = (a / Math.sqrt( 1.0 - e * Math.sin( lat1 ) * Math.sin( lat1 )));    
      var cos = Math.cos( lat1 );    
      var x = beta * cos * Math.cos( long1 );    
      var y = beta * cos * Math.sin( long1 );    
      var z = beta * ( 1 - e ) * Math.sin( lat1 );      

      beta = ( a / Math.sqrt( 1.0 -  e * Math.sin( lat2 ) * Math.sin( lat2 )));    
      cos = Math.cos( lat2 );   
      x -= (beta * cos * Math.cos( long2 ));    
      y -= (beta * cos * Math.sin( long2 ));    
      z -= (beta * (1 - e) * Math.sin( lat2 ));       

      return (Math.sqrt( (x*x) + (y*y) + (z*z) )/1000);  
  }

  export default router;