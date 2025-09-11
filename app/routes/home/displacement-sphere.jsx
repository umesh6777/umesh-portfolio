import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { useReducedMotion, useSpring } from 'framer-motion';
import { useInViewport, useWindowSize } from '~/hooks';
import { startTransition, useEffect, useRef, useState } from 'react';
import {
  AmbientLight,
  DirectionalLight,
  LinearSRGBColorSpace,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  SphereGeometry,
  UniformsUtils,
  Vector2,
  WebGLRenderer,
} from 'three';
import { media } from '~/utils/style';
import { throttle } from '~/utils/throttle';
import { cleanRenderer, cleanScene, removeLights } from '~/utils/three';
import fragmentShader from './displacement-sphere-fragment.glsl';
import vertexShader from './displacement-sphere-vertex.glsl';
import styles from './displacement-sphere.module.css';

const springConfig = {
  stiffness: 30,
  damping: 20,
  mass: 2,
};

export const DisplacementSphere = props => {
  const { theme } = useTheme();
  const start = useRef(Date.now());
  const canvasRef = useRef();
  const mouse = useRef();
  const renderer = useRef();
  const camera = useRef();
  const scene = useRef();
  const lights = useRef();
  const uniforms = useRef();
  const material = useRef();
  const geometry = useRef();
  const sphere = useRef();
  const reduceMotion = useReducedMotion();
  const isInViewport = useInViewport(canvasRef);
  const windowSize = useWindowSize();
  const rotationX = useSpring(0, springConfig);
  const rotationY = useSpring(0, springConfig);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    // Check if WebGL is supported
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch (e) {
      setWebglSupported(false);
      return;
    }

    const { innerWidth, innerHeight } = window;
    mouse.current = new Vector2(0.8, 0.5);
    
    try {
      renderer.current = new WebGLRenderer({
        canvas: canvasRef.current,
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
        failIfMajorPerformanceCaveat: false, // Changed to false to prevent failures
      });
      
      if (!renderer.current.getContext()) {
        setWebglSupported(false);
        return;
      }
      
      renderer.current.setSize(innerWidth, innerHeight);
      renderer.current.setPixelRatio(Math.min(2, window.devicePixelRatio)); // Use appropriate pixel ratio
      renderer.current.outputColorSpace = LinearSRGBColorSpace;

      camera.current = new PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100);
      camera.current.position.z = 52;

      scene.current = new Scene();

      // Create a basic material first as fallback
      material.current = new MeshPhongMaterial({
        color: theme === 'light' ? 0xeeeeee : 0x222222,
        shininess: 30,
      });

      // Only apply custom shaders if they compile correctly
      try {
        material.current.onBeforeCompile = shader => {
          uniforms.current = UniformsUtils.merge([
            shader.uniforms,
            { 
              time: { type: 'f', value: 0 },
              // Add any other uniforms your shaders need
            },
          ]);

          shader.uniforms = uniforms.current;
          shader.vertexShader = vertexShader;
          shader.fragmentShader = fragmentShader;
        };
      } catch (shaderError) {
        console.warn('Shader compilation failed, using fallback material:', shaderError);
        // Keep the basic material without custom shaders
      }

      startTransition(() => {
        geometry.current = new SphereGeometry(32, 64, 64); // Reduced complexity for performance
        sphere.current = new Mesh(geometry.current, material.current);
        sphere.current.position.z = 0;
        sphere.current.modifier = Math.random();
        scene.current.add(sphere.current);
      });

    } catch (error) {
      console.error('Three.js initialization failed:', error);
      setWebglSupported(false);
    }

    return () => {
      if (scene.current) cleanScene(scene.current);
      if (renderer.current) cleanRenderer(renderer.current);
    };
  }, []);

  useEffect(() => {
    if (!scene.current || !webglSupported) return;

    const dirLight = new DirectionalLight(0xffffff, theme === 'light' ? 1.8 : 2.0);
    const ambientLight = new AmbientLight(0xffffff, theme === 'light' ? 2.7 : 0.4);

    dirLight.position.z = 200;
    dirLight.position.x = 100;
    dirLight.position.y = 100;

    lights.current = [dirLight, ambientLight];
    lights.current.forEach(light => scene.current.add(light));

    return () => {
      if (lights.current) removeLights(lights.current);
    };
  }, [theme, webglSupported]);

  useEffect(() => {
    if (!renderer.current || !camera.current || !sphere.current || !webglSupported) return;

    const { width, height } = windowSize;

    const adjustedHeight = height + height * 0.3;
    renderer.current.setSize(width, adjustedHeight);
    camera.current.aspect = width / adjustedHeight;
    camera.current.updateProjectionMatrix();

    // Render a single frame on resize when not animating
    if (reduceMotion) {
      renderer.current.render(scene.current, camera.current);
    }

    if (width <= media.mobile) {
      sphere.current.position.x = 14;
      sphere.current.position.y = 10;
    } else if (width <= media.tablet) {
      sphere.current.position.x = 18;
      sphere.current.position.y = 14;
    } else {
      sphere.current.position.x = 22;
      sphere.current.position.y = 16;
    }
  }, [reduceMotion, windowSize, webglSupported]);

  useEffect(() => {
    const onMouseMove = throttle(event => {
      const position = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      };

      rotationX.set(position.y / 2);
      rotationY.set(position.x / 2);
    }, 100);

    if (!reduceMotion && isInViewport && webglSupported) {
      window.addEventListener('mousemove', onMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY, webglSupported]);

  useEffect(() => {
    if (!renderer.current || !scene.current || !camera.current || !webglSupported) return;

    let animation;

    const animate = () => {
      animation = requestAnimationFrame(animate);

      if (uniforms.current !== undefined) {
        uniforms.current.time.value = 0.00005 * (Date.now() - start.current);
      }

      if (sphere.current) {
        sphere.current.rotation.z += 0.001;
        sphere.current.rotation.x = rotationX.get();
        sphere.current.rotation.y = rotationY.get();
      }

      renderer.current.render(scene.current, camera.current);
    };

    if (!reduceMotion && isInViewport) {
      animate();
    } else {
      renderer.current.render(scene.current, camera.current);
    }

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY, webglSupported]);

  if (!webglSupported) {
    return (
      <div className={styles.fallback} {...props}>
        {/* Fallback content when WebGL is not supported */}
      </div>
    );
  }

  return (
    <Transition in timeout={3000} nodeRef={canvasRef}>
      {({ visible, nodeRef }) => (
        <canvas
          aria-hidden
          className={styles.canvas}
          data-visible={visible}
          ref={nodeRef}
          {...props}
        />
      )}
    </Transition>
  );
};