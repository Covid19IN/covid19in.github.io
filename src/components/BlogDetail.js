import React, { useState, useEffect } from 'react';
import {Helmet} from 'react-helmet';
import Footer from './Footer';

// TODO(slightlyoff): factor out common JSON parsing & caching of this file
const DATA_URL = 'https://www.opengraph.xyz/.netlify/functions/metadata?url=${match.faq.answer}';

function BlogDetail() {
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
             
              <img className="image" src={faq.image} alt={faq.question} />
              
               <a href= {faq.answer} > {faq.question}</a>
              
        
            
            </div>
          );
        })}
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default BlogDetail;
