import React from 'react';
import Particles from 'react-tsparticles';
import ParticlesConfig from './config/particles-config';

const ParticlesBackground = () => (
  <Particles id="tsparticles" params={ParticlesConfig} />
);
export default ParticlesBackground;
