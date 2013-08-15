var THREEx = THREEx || {}

/**
 * from http://stemkoski.blogspot.fr/2013/07/shaders-in-threejs-glow-and-halo.html
 * @return {[type]} [description]
 */
THREEx.createAtmosphereMaterial	= function(){
	var vertexShader	= [
		'uniform float	coeficient;',
		'uniform float	power;',
		'uniform vec3	viewVector;',

		'varying float	intensity;',

		'void main(){',
		'	// compute intensity',
		'	vec3 vNormal	= normalize(normalMatrix * normal);',

		// '	vec3 vNormel	= normalize( normalMatrix * cameraPosition );',
		// '	intensity	= pow( coeficient - dot(vNormal, vNormel), power );',

		// '	vec3 camPosition= normalize(normalMatrix * cameraPosition);',
		// '	intensity	= pow( coeficient - dot(vNormal, camPosition), power );',

		// '	intensity	= pow( coeficient - dot(vNormal, normalize(viewVector)), power );',


		'	vec3 vertex2Cam	= normalMatrix * cameraPosition;',
		'	vertex2Cam	= vertex2Cam - (modelViewMatrix * vec4(position, 1.0 )).xyz;',
		'	vertex2Cam	= normalize(vertex2Cam);',
		'	intensity	= pow(coeficient - dot(vNormal, vertex2Cam), power);',

		'	// set gl_Position',
		'	gl_Position	= projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
		'}',

		].join('\n')
	var fragmentShader	= [
		'uniform vec3	glowColor;',

		'varying float	intensity;',

		'void main(){',
		'	gl_FragColor	= vec4(glowColor, intensity);',
		// '	gl_FragColor	= vec4(glowColor*intensity, intensity);',

		// '	gl_FragColor	= vec4(vec3(intensity), 1.0);',
		// '	gl_FragColor	= vec4(length(normalMatrix[0]), length(normalMatrix[1]), length(normalMatrix[2])), 1.0);',
		// '	gl_FragColor	= vec4(glowColor, intensity);',
		// '	gl_FragColor	= vec4(normalize(cameraPosition2), 1.0);',
		'}',
	].join('\n')

	// create custom material from the shader code above
	//   that is within specially labeled script tags
	var material	= new THREE.ShaderMaterial({
		uniforms: { 
			coeficient	: {
				type	: "f", 
				value	: 1.0
			},
			power		: {
				type	: "f",
				value	: 2
			},
			glowColor	: {
				type	: "c",
				value	: new THREE.Color('pink')
			},
			viewVector	: {
				type	: "v3",
				value	: new THREE.Vector3(0,0,1)
			},
		},
		vertexShader	: vertexShader,
		fragmentShader	: fragmentShader,
		blending	: THREE.AdditiveBlending,
		transparent	: true,
		depthWrite	: false,
	});
	return material
}