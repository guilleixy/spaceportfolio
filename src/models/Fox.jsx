/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: victory_mirosya (https://sketchfab.com/victory_mirosya)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
Title: Fox
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import scene from '../assets/3d/fox.glb'

const Fox = ({currentAnimation, ...props})  =>  {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

    useEffect(()=>{
        Object.values(actions).forEach((action) => action.stop());
        if(actions[currentAnimation]){
            actions[currentAnimation].play();
        }
    }, [actions,currentAnimation])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="RootNode_0">
                <group
                  name="RobotArmature_1"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                >
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_94"
                      geometry={nodes.Object_94.geometry}
                      material={materials.Main}
                      skeleton={nodes.Object_94.skeleton}
                    />
                    <skinnedMesh
                      name="Object_95"
                      geometry={nodes.Object_95.geometry}
                      material={materials.Grey}
                      skeleton={nodes.Object_95.skeleton}
                    />
                    <skinnedMesh
                      name="Object_98"
                      geometry={nodes.Object_98.geometry}
                      material={materials.Main}
                      skeleton={nodes.Object_98.skeleton}
                    />
                    <skinnedMesh
                      name="Object_99"
                      geometry={nodes.Object_99.geometry}
                      material={materials.Grey}
                      skeleton={nodes.Object_99.skeleton}
                    />
                    <group
                      name="HandR_72_correction"
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.01}
                    >
                      <group
                        name="HandR_72"
                        position={[-0.003, 2.37, -0.021]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                    </group>
                    <group
                      name="HandL_73_correction"
                      rotation={[Math.PI / 2, 0, 0]}
                      scale={0.01}
                    >
                      <group
                        name="HandL_73"
                        position={[-0.003, 2.37, -0.021]}
                        rotation={[-Math.PI / 2, 0, 0]}
                        scale={100}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

export default Fox;
