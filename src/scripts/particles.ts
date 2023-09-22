declare var particlesJS: any

export function setParticles(id: string, config: string) {
  particlesJS.load(id, config)
}
