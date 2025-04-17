import React from 'react';
import ImageLoader from '../components/ImageLoader';
import './Education.css';

function Education() {
  return (
    <div className="education-page">
      <section className="education-hero">
        <div className="container">
          <h1>Ethiopian Coffee Education</h1>
          <p>Learn about the birthplace of coffee and its unique traditions</p>
        </div>
      </section>

      <section className="coffee-origin section">
        <div className="container">
          <h2 className="section-title">The Birthplace of Coffee</h2>
          <p className="section-subtitle">Ethiopia's Rich Coffee Heritage</p>
          
          <div className="origin-content">
            <div className="origin-text">
              <p>Ethiopia is widely celebrated as the birthplace of Coffea arabica. According to legend, coffee was first discovered in Ethiopia when a goat herder named Kaldi noticed his goats becoming energetic after eating berries from a certain tree.</p>
              <p>Coffee plants have been growing wild in Ethiopian forests for millennia. This heritage means Ethiopia boasts a greater natural diversity of coffee genetic material than any other country, with estimates suggesting between six to ten thousand distinct coffee varieties still flourishing in Ethiopia's highlands and forests.</p>
              <p>Unlike many coffee-producing countries that grow a handful of modern cultivars, Ethiopia's heirloom varieties (often referred to as "landrace" varieties) produce an incredible spectrum of flavors. This genetic diversity is why Ethiopian coffees can range from delicate and tea-like, to winey and fruit-forward, to rich and chocolatey – a diversity unmatched by any single origin.</p>
            </div>
            <div className="origin-image">
              <ImageLoader src="/images/products/coffee-plantation.jpg" alt="Ethiopian Wild Coffee Forest" />
              <p className="image-caption">Ethiopia's forests are home to thousands of wild coffee varieties</p>
            </div>
          </div>
        </div>
      </section>

      <section className="microclimates section">
        <div className="container">
          <h2 className="section-title">Diverse Microclimates</h2>
          <p className="section-subtitle">How Geography Shapes Ethiopian Coffee</p>
          
          <div className="climate-cards">
            <div className="climate-card hover-lift">
              <h3>Highland Elevations</h3>
              <p>Most Ethiopian coffee grows at elevations between 1,400-2,200 meters, qualifying as "Strictly High Grown." These high elevations mean beans mature slowly, developing concentrated flavor compounds.</p>
            </div>
            <div className="climate-card hover-lift">
              <h3>Regional Diversity</h3>
              <p>From the lush, rainy highlands of Sidama/Yirgacheffe, to the drier mountains of Harrar, to the tropical forests of Kaffa, each area's unique elevation, temperature, and soil composition imparts different characteristics to the coffee.</p>
            </div>
            <div className="climate-card hover-lift">
              <h3>Terroir Expression</h3>
              <p>Southern regions with higher rainfall produce coffees with bright acidity and floral aromas, while the drier eastern region (Harrar) yields beans with wild fruitiness and heavy body.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="processing-methods section light-section">
        <div className="container">
          <h2 className="section-title">Processing Methods</h2>
          <p className="section-subtitle">Traditional and Modern Techniques</p>
          
          <div className="methods-grid">
            <div className="method-item">
              <div className="method-image">
                <ImageLoader src="/images/products/coffee-cherries.jpg" alt="Natural Process Coffee" />
              </div>
              <div className="method-content">
                <h3>Natural (Dry) Process</h3>
                <p>The traditional Ethiopian process where whole coffee cherries are sun-dried on raised beds. This method originated in Ethiopia and is still widely practiced, especially in Harrar and much of the south.</p>
                <p>Natural processing imparts sweet, fruity, and wine-like characteristics to the beans. The fruit sugars permeate the bean during drying, creating distinctive fruit-forward flavor profiles.</p>
                <p>After drying, the dried cherry pods are removed through hulling, and the beans are sorted and graded.</p>
              </div>
            </div>
            
            <div className="method-item">
              <div className="method-image">
                <ImageLoader src="/images/process/coffee-processing.jpg" alt="Washed Process Coffee" />
              </div>
              <div className="method-content">
                <h3>Washed (Wet) Process</h3>
                <p>Introduced later to Ethiopia, the washed process has become common in regions like Yirgacheffe, Sidama, and Limu.</p>
                <p>Coffee cherries are depulped promptly after harvesting, fermented for the right duration, washed in clean water, and then dried on raised beds under careful monitoring.</p>
                <p>This method yields cleaner, brighter flavor profiles with enhanced acidity and clarity. Washed coffees are known for highlighting the inherent terroir characteristics of the bean.</p>
              </div>
            </div>
          </div>
          
          <div className="method-note">
            <p>Ethiopian producers are skilled in both methods, and the choice of processing often accentuates different attributes of the heirloom coffees. Few countries produce top-quality washed and natural coffees at the scale Ethiopia does, giving coffee buyers a delightful range of taste experiences from one origin.</p>
          </div>
        </div>
      </section>

      <section className="cultural-significance section">
        <div className="container">
          <h2 className="section-title">Cultural Significance of Coffee</h2>
          <p className="section-subtitle">Ethiopia's Coffee Ceremony</p>
          
          <div className="culture-content">
            <div className="culture-text">
              <p>In Ethiopia, coffee is not just a crop but a way of life. The country has a rich coffee culture with perhaps the most elaborate coffee ceremony in the world. Brewing and serving coffee (locally called <em>bunna</em>) is a traditional ritual of hospitality and community.</p>
              <p>The Ethiopian coffee ceremony follows these traditional steps:</p>
              <ol>
                <li><strong>Preparation:</strong> Fresh green coffee beans are pan-roasted over a fire</li>
                <li><strong>Grinding:</strong> The freshly roasted beans are ground by hand using a mortar and pestle</li>
                <li><strong>Brewing:</strong> Coffee is brewed three times in a <em>jebena</em> (clay pot)</li>
                <li><strong>Serving:</strong> The coffee is served in small cups, often accompanied by conversation and incense</li>
              </ol>
              <p>This ceremony is performed daily in many homes and is central to Ethiopian social life. Such deep cultural integration means Ethiopian farmers and local traders take enormous pride in their coffee quality. The knowledge of coffee cultivation and appreciation is generational.</p>
            </div>
            <div className="culture-image">
              <ImageLoader src="/images/products/cupping-session.jpg" alt="Ethiopian Coffee Ceremony" />
              <p className="image-caption">Traditional Ethiopian coffee ceremony</p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-section cupping-section">
        <div className="container">
          <div className="cupping-grid">
            <div className="cupping-content">
              <h2>Tasting Ethiopian Coffee</h2>
              <p>Ethiopian coffees are renowned for their complex flavor profiles that can vary dramatically between regions and processing methods. Here are some common flavor notes to look for:</p>
              
              <div className="flavor-notes">
                <div className="flavor-category">
                  <h3>Yirgacheffe</h3>
                  <ul>
                    <li>Jasmine and floral aromas</li>
                    <li>Bright, lemony acidity</li>
                    <li>Tea-like elegance</li>
                    <li>Stone fruit or berry notes</li>
                  </ul>
                </div>
                
                <div className="flavor-category">
                  <h3>Sidamo</h3>
                  <ul>
                    <li>Well-balanced complexity</li>
                    <li>Bright citrus notes</li>
                    <li>Sweet berry tones</li>
                    <li>Clean, crisp finish</li>
                  </ul>
                </div>
                
                <div className="flavor-category">
                  <h3>Harrar</h3>
                  <ul>
                    <li>Wild blueberry notes</li>
                    <li>Wine-like fruitiness</li>
                    <li>Heavy body</li>
                    <li>Chocolate or "mocha" character</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="cupping-image">
              <ImageLoader src="/images/process/coffee-cupping.jpg" alt="Coffee Cupping Session" />
            </div>
          </div>
        </div>
      </section>

      <section className="sustainable-practices section">
        <div className="container">
          <h2 className="section-title">Sustainable Coffee Practices</h2>
          <p className="section-subtitle">Traditional Methods Meet Modern Sustainability</p>
          
          <div className="practices-grid">
            <div className="practice-card hover-lift">
              <h3>Traditional Cultivation</h3>
              <p>A large portion of Ethiopian coffee is grown in traditional ways that are essentially organic and sustainable. Smallholder farmers typically grow coffee in garden plots or semi-forest settings, intercropped with other plants, and using organic compost as fertilizer.</p>
            </div>
            
            <div className="practice-card hover-lift">
              <h3>Forest-Grown Coffee</h3>
              <p>In many cases, coffee is literally forest-grown under the shade of indigenous trees (especially in regions like Kaffa and Bench Maji), requiring little human intervention. Such methods preserve the environment and result in coffees with distinctive terroir-driven flavors.</p>
            </div>
            
            <div className="practice-card hover-lift">
              <h3>Organic by Default</h3>
              <p>Because chemical use is minimal, a lot of Ethiopian coffee is effectively organic by default. This makes Ethiopia one of the world's most naturally sustainable coffee origins.</p>
            </div>
            
            <div className="practice-card hover-lift">
              <h3>Biodiversity Conservation</h3>
              <p>Ethiopia's traditional coffee systems help preserve forest biodiversity. Farmers understand that maintaining the natural ecosystem helps produce better coffee while protecting their environment for future generations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Experience Exceptional Ethiopian Coffee</h2>
          <p>Contact our team to learn more about our coffee offerings and export capabilities</p>
          <a href="/contact" className="btn btn-primary">Contact Us Today</a>
        </div>
      </section>
    </div>
  );
}

export default Education;