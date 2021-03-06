import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet';

// TODO(slightlyoff): factor out common JSON parsing & caching of this file
const DATA_URL = 'https://mnrlive.github.io/api/website_data.json';

function Blog() {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    getFAQs();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getFAQs = () => {
    fetch(DATA_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFaq(data.faq);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>News On Covid19</title>
        <meta
          name="title"
          content="Coronavirus Outbreak in India: Latest Map and Case Count"
        />
      </Helmet>

      <div className="About">
        {faq.map((faq, index) => {
          return (
            <div key={index} className="faq fadeInUp" style={{animationDelay: `${0.5 + index * 0.1}s`}} > 
              <NavLink to={`/Blog/${faq.answer}`} className="navLink" key={faq.answer}>
            
              <img className="image" src={faq.image} alt={faq.question} />
              
               <a href= {faq.answer} > {faq.question}</a>
              
        
              </NavLink>
            </div>
          );
        })}
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Blog;
