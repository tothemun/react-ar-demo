import MTLLoader from 'three-mtl-loader';
import OBJLoader from 'three-react-obj-loader';

const loadModel = (obj, mtl, cb) => {
  const mtlLoader = new MTLLoader();
  mtlLoader.load(mtl, (materials) => {
    materials.preload();

    const objLoader = new OBJLoader();
    objLoader.setMaterials(materials);
    objLoader.load(
      obj,
      (object) => {
        cb(object);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        console.log('An error happened');
      }
    );
  });
};

export default loadModel;
