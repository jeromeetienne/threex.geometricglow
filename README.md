threex.geometricglow
====================

threex.geometricglow is a three.js extension to make any object glow at geometric level.
It is done at the geometry level. An important feature which provide 
multiple advantages.

* the 'glow' is a mesh. so you can add it in your scene whenever you want.
* It isnt in screenspace. so simpler to handle and easier to tune
  * screenspace glow may have a single glow level no matter the depth
    of the glowing object.


```
var glowMesh	= new THREEx.GlowMesh(mesh);
mesh.add(glowMesh)
```

### Examples

* [Geometric Glow Mesh](http://jeromeetienne.github.io/threex.geometricglow/examples/geometricglowmesh.html)
examples show how to easily get a prebuilt glow mesh.
* [Atmosphere Material](http://jeromeetienne.github.io/threex.geometricglow/examples/atmospherematerial.html)
  shows how to use the atmosphere material
* [Dilate Geometry](http://jeromeetienne.github.io/threex.geometricglow/examples/dilategeometry.html)
  shows how to dilate/erode a geometry (and yes this is different than object.scale :)


