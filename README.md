threex.geometricglow
====================

threex.geometricglow is a three.js extension to make any object glow at geometric level.
It is done at the geometry level. An important feature which provide 
multiple advantages.

* the 'glow' is a mesh. so you can add it in your scene whenever you want.
* It isnt in screenspace. so simpler to handle and easier to tune
  * screenspace glow may have a single glow level no matter the depth
    of the glowing object.


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

```
var glowMesh	= new THREEx.GlowMesh(mesh);
mesh.add(glowMesh)
```

example of customization of the default glowMesh

```
var insideUniforms	= glowMesh.insideMesh.material.uniforms
insideUniforms.glowColor.value.set('hotpink')
var outsideUniforms	= glowMesh.outsideMesh.material.uniforms
outsideUniforms.glowColor.value.set('hotpink')
```

to help fine tuning you may use dat.gui helpers.

```
var datGUI	= new dat.GUI()
new THREEx.addAtmosphereMaterial2DatGui(glowMesh.insideMesh.material, datGUI)	
new THREEx.addAtmosphereMaterial2DatGui(glowMesh.outsideMesh.material, datGUI)	
```

### Examples

* [Geometric Glow Mesh](http://jeromeetienne.github.io/threex.geometricglow/examples/geometricglowmesh.html)
examples show how to easily get a prebuilt glow mesh.
* [Atmosphere Material](http://jeromeetienne.github.io/threex.geometricglow/examples/atmospherematerial.html)
  shows how to use the atmosphere material
* [Dilate Geometry](http://jeromeetienne.github.io/threex.geometricglow/examples/dilategeometry.html)
  shows how to dilate/erode a geometry (and yes this is different than object.scale :)


