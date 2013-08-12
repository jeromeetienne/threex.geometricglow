threex.geometricglow
====================

threex.geometricglow is a three.js extension to make any object glow at geometric level.
It is done at the geometry level. An important feature which provide 
multiple advantages.

* the 'glow' is a mesh. so you can add it in your scene whenever you want.
* It isnt in screenspace. so simpler to handle and easier to tune
  * screenspace glow may have a single glow level no matter the depth
    of the glowing object.

It is released under MIT License.

### Notes

* normalMatrix is in view coordinates
  * deduced from https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGLRenderer.js#L5668
* cameraPosition is in world coordinates
  * deduced from https://github.com/mrdoob/three.js/blob/master/src/renderers/WebGLRenderer.js#L5165
* modelMatrix is object3dmatrixWorld


### Examples

* [Geometric Glow Mesh](http://jeromeetienne.github.io/threex.geometricglow/examples/geometricglowmesh.html)
examples show how to easily get a prebuilt glow mesh.
* [Atmosphere Material](http://jeromeetienne.github.io/threex.geometricglow/examples/atmospherematerial.html)
  shows how to use the atmosphere material
* [Dilate Geometry](http://jeromeetienne.github.io/threex.geometricglow/examples/dilategeometry.html)
  shows how to dilate/erode a geometry (and yes this is different than object.scale :)

## bugs

* dilation fails: seems to fails on eroded cube
* formula for dot()
  * fix viewVector is false... better to take vector from vertex to camera
  

## threex.geometricglowmesh.js

Try this 
[Geometric Glow Mesh](http://jeromeetienne.github.io/threex.geometricglow/examples/geometricglowmesh.html)
and its
[source](http://jeromeetienne.github.io/threex.geometricglow/examples/geometricglowmesh.html).
It will shows you how to build a geometric glow mesh.
It depends on 
[threex.atmospherematerial.js](https://github.com/jeromeetienne/threex.geometricglow#threex.atmospherematerial.js)
and
[threex.dilategeometry.js](https://github.com/jeromeetienne/threex.geometricglow#threex.dilategeometry.js).
How to create a glowMesh for a mesh ? just like this.

```javascript
var glowMesh	= new THREEx.GlowMesh(mesh);
mesh.add(glowMesh)
```

example of customization of the default glowMesh

```javascript
var insideUniforms	= glowMesh.insideMesh.material.uniforms
insideUniforms.glowColor.value.set('hotpink')
var outsideUniforms	= glowMesh.outsideMesh.material.uniforms
outsideUniforms.glowColor.value.set('hotpink')
```

to help fine tuning you may use dat.gui helpers.

```javascript
var datGUI	= new dat.GUI()
new THREEx.addAtmosphereMaterial2DatGui(glowMesh.insideMesh.material, datGUI)	
new THREEx.addAtmosphereMaterial2DatGui(glowMesh.outsideMesh.material, datGUI)	
```

## threex.dilategeometry.js

It dilates a geometry along the vertex normals. 
Note that it isnt to be confused with ```object3d.scale```.
Scale changes the size but independantly of the vertex normal.
Try this
[example](http://jeromeetienne.github.io/threex.geometricglow/examples/dilategeometry.html)
and its
[source](http://jeromeetienne.github.io/threex.geometricglow/examples/dilategeometry.html).
It shows how to dilate/erode a geometry.
To dilate a geometry by 5%, just do

```javascript
THREEx.dilateGeometry(geometry, 0.05)
```

## threex.atmospherematerial.js

It provides a material which shine on border, like the earth atmostphere 
when you look at it from space. To create it, use the following line.

```javascript
var material	= THREEx.createAtmosphereMaterial()
```

It is a ```THREE.ShaderMaterial``` that you can tune thru its uniforms.
Here is a possible customisation.

```javascript
material.uniforms.glowColor.value	= new THREE.Color('cyan')
material.uniforms.coeficient.value	= 1.1
material.uniforms.power.value		= 0.7


For fine tuning, you can use datGUI

```javascript
var datGUI	= new dat.GUI()
new THREEx.addAtmosphereMaterial2DatGui(material, datGUI)
```