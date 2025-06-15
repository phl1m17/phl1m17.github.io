function AboutSection() {
  const age = new Date().getFullYear() - 2007;

  return (
    <section>
      <hr />
      <h2>About Me</h2>
      <p>
        Hi, I’m an {age} year old student interested in software development,
        programming, game development, and photography. This website showcases
        my projects and passions across these areas.
      </p>
    </section>
  );
}

export default AboutSection;
