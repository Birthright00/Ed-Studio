import React from 'react';

const About = () => {
  return (
    <>
      {/* About Header */}
      <section className="section" style={{paddingTop: '8rem'}}>
        <div className="container">
          <div className="text-center">
            <h1 className="fade-in mb-4">
              About Ed Studio
            </h1>
            <p className="fade-in fade-in-delay-1" style={{
              maxWidth: '800px', 
              margin: '0 auto',
              fontSize: '1.2rem',
              lineHeight: '1.8'
            }}>
              Ed Studio represents a vision of photography that goes beyond mere documentation. 
              Belief in the power of light, shadow, and human intersect and form to create images that 
              resonate on a deeper level.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="fade-in mb-4">
              My Approach
            </h2>
            <div style={{maxWidth: '900px', margin: '0 auto'}}>
              <p className="fade-in fade-in-delay-1 mb-4" style={{fontSize: '1.1rem', lineHeight: '1.7'}}>
                Every session begins with understanding the subject's story, their vision, and the message they want to convey. 
                Through careful attention to lighting, composition, and atmosphere, I want to craft images that capture not just 
                appearance, but essence.
              </p>
              <p className="fade-in fade-in-delay-2 mb-4" style={{fontSize: '1.1rem', lineHeight: '1.7'}}>
                My specialization in physique, modeling, and cosplay photography stems from a deep appreciation 
                for the artistry in each discipline. Whether showcasing the dedication of an athlete, 
                the elegance of a model, or the creativity of a cosplayer, each image tells a unique story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section">
        <div className="container">
          <div className="image-grid grid-three">
            <div className="text-center fade-in">
              <h3 style={{fontSize: '4rem', fontWeight: '200', marginBottom: '1rem', color: '#ffffff'}}>
                30+
              </h3>
              <p style={{textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1rem'}}>
                Sessions Completed
              </p>
            </div>
            <div className="text-center fade-in fade-in-delay-1">
              <h3 style={{fontSize: '4rem', fontWeight: '200', marginBottom: '1rem', color: '#ffffff'}}>
                3
              </h3>
              <p style={{textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1rem'}}>
                Specializations
              </p>
            </div>
            <div className="text-center fade-in fade-in-delay-2">
              <h3 style={{fontSize: '4rem', fontWeight: '200', marginBottom: '1rem', color: '#ffffff'}}>
                2+
              </h3>
              <p style={{textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '1rem'}}>
                Years Experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <blockquote className="fade-in" style={{
              maxWidth: '700px',
              margin: '0 auto',
              fontSize: '1.3rem',
              fontStyle: 'italic',
              lineHeight: '1.6',
              color: '#cccccc',
              position: 'relative'
            }}>
              "Photography is not about capturing what you see, but revealing what others cannot see. 
              Every frame is an opportunity to showcase the extraordinary in the everyday."
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;