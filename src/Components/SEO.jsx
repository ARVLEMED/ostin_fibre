import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "OSTIN Internet Services - Fast & Affordable Fiber Internet in Kitengela",
  description = "Get high-speed fiber internet in Kitengela with OSTIN. Free installation, free router, and 24/7 support. Packages from KES 1,069/month. Call 0717 447 792 today!",
  keywords = "fiber internet Kitengela, home fiber Kenya, affordable internet Kitengela, OSTIN internet, fast internet Kenya, fiber packages Kitengela, internet service provider Kajiado",
  image = "/og-image.jpg",
  url = "https://www.ostin.co.ke",
  type = "website"
}) => {
  const siteName = "OSTIN Internet Services";
  const twitterHandle = "@ostinfiber";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_KE" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:creator" content={twitterHandle} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="OSTIN Internet Services" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="KE-200" />
      <meta name="geo.placename" content="Kitengela" />
      <meta name="geo.position" content="-1.4520;36.9630" />
      <meta name="ICBM" content="-1.4520, 36.9630" />
      
      {/* Contact Information */}
      <meta name="contact" content="0717 447 792" />
      <meta name="coverage" content="Kitengela, Kajiado County, Kenya" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data - Local Business */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "OSTIN Internet Services",
          "image": image,
          "description": description,
          "@id": url,
          "url": url,
          "telephone": "+254717447792",
          "priceRange": "KES 1,069 - KES 2,359",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kitengela",
            "addressLocality": "Kitengela",
            "addressRegion": "Kajiado County",
            "postalCode": "00204",
            "addressCountry": "KE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -1.4520,
            "longitude": 36.9630
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          },
          "sameAs": [
            "https://www.facebook.com/ostinfiber",
            "https://www.tiktok.com/@ostin",
            "https://wa.me/254717447792"
          ]
        })}
      </script>
      
      {/* Structured Data - Products/Services */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": [
            {
              "@type": "Product",
              "position": 1,
              "name": "Silver Package - 5 Mbps",
              "description": "Basic fiber internet package with speeds up to 5 Mbps. Perfect for browsing and social media.",
              "offers": {
                "@type": "Offer",
                "price": "1069",
                "priceCurrency": "KES",
                "availability": "https://schema.org/InStock"
              }
            },
            {
              "@type": "Product",
              "position": 2,
              "name": "Gold Package - 10 Mbps",
              "description": "Mid-tier fiber internet package with speeds up to 10 Mbps. Ideal for HD streaming and video calls.",
              "offers": {
                "@type": "Offer",
                "price": "1299",
                "priceCurrency": "KES",
                "availability": "https://schema.org/InStock"
              }
            },
            {
              "@type": "Product",
              "position": 3,
              "name": "Diamond Package - 15 Mbps",
              "description": "Premium fiber internet package with speeds up to 15 Mbps. Great for 4K streaming and multiple devices.",
              "offers": {
                "@type": "Offer",
                "price": "1729",
                "priceCurrency": "KES",
                "availability": "https://schema.org/InStock"
              }
            },
            {
              "@type": "Product",
              "position": 4,
              "name": "Platinum Package - 20 Mbps",
              "description": "Ultimate fiber internet package with speeds up to 20 Mbps. Perfect for business use and heavy streaming.",
              "offers": {
                "@type": "Offer",
                "price": "2359",
                "priceCurrency": "KES",
                "availability": "https://schema.org/InStock"
              }
            }
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
