import content from "./blogposts.json";
import allproducts from "./products";
function generateSiteMap(posts,products) {
  

  return `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="/images/main-sitemap.xsl"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
    <loc>https://solnyne.com</loc>
    <lastmod>2023-02-01</lastmod>
   </url> 
   <url>
    <loc>https://solnyne.com/about</loc>
    <lastmod>2023-02-01</lastmod>
   </url> 
   <url>
   <loc>https://solnyne.com/installation-services</loc>
   <lastmod>2023-02-01</lastmod>
  </url> 
  <url>
  <loc>https://solnyne.com/maintenance-services</loc>
  <lastmod>2023-02-01</lastmod>
 </url> 
 <url>
 <loc>https://solnyne.com/project-consultation</loc>
 <lastmod>2023-02-01</lastmod>
</url> 
<url>
 <loc>https://solnyne.com/advisory-services</loc>
 <lastmod>2023-02-01</lastmod>
</url> 
<url>
 <loc>https://solnyne.com/system-design</loc>
 <lastmod>2023-02-01</lastmod>
</url> 
<url>
 <loc>https://solnyne.com/net-metering</loc>
 <lastmod>2023-02-01</lastmod>
</url> 
<url>
 <loc>https://solnyne.com/sale-services</loc>
 <lastmod>2023-02-01</lastmod>
</url>
<url>
 <loc>https://solnyne.com/solutions</loc>
 <lastmod>2023-02-01</lastmod>
</url>
<url>
 <loc>https://solnyne.com/solutions/on-grid-solar-solutions</loc>
 <lastmod>2023-02-01</lastmod>
</url>
<url>
<loc>https://solnyne.com/solutions/off-grid-solar-solutions</loc>
<lastmod>2023-02-01</lastmod>
</url>    
<url>
<loc>https://solnyne.com/solutions/hybrid-solar-solutions</loc>
<lastmod>2023-02-01</lastmod>
</url>       
<url>
<loc>https://solnyne.com/projects</loc>
<lastmod>2023-02-01</lastmod>
</url>       
<url>
<loc>https://solnyne.com/blog</loc>
<lastmod>2023-02-01</lastmod>
</url>       
<url>
<loc>https://solnyne.com/products</loc>
<lastmod>2023-02-01</lastmod>
</url>       
                     
<url>
<loc>https://solnyne.com/contact-us</loc>
<lastmod>2023-02-01</lastmod>
</url> 
<url>
<loc>https://solnyne.com/solar-calculator</loc>
<lastmod>2023-02-01</lastmod>
</url>
<url>
<loc>https://solnyne.com/privacy-policy</loc>
<lastmod>2023-02-01</lastmod>
</url> 
<url>
<loc>https://solnyne.com/disclaimer</loc>
<lastmod>2023-02-01</lastmod>
</url> 
<url>
<loc>https://solnyne.com/terms</loc>
<lastmod>2023-02-01</lastmod>
</url> 


     ${posts
       .map(({ slug,lastmod }) => {
         return `
       <url>
       <loc>${`https://solnyne.com/blog/${slug}`}</loc>
       <lastmod>${`${lastmod}`}</lastmod>
       </url> 
     `;
       })
       .join("")}

       ${products
        .map(({ slug,lastmod }) => {
          return `
        <url>
        <loc>${`https://solnyne.com/products/${slug}`}</loc>
        <lastmod>${`${lastmod}`}</lastmod>
        </url> 
      `;
        })
        .join("")}
   </urlset>

 `;
}
function SiteMap() {}
export async function getServerSideProps({ res }) {
  const posts = content.posts; 
  const products = allproducts.products;   
  const sitemap = generateSiteMap(posts,products);  
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}

export default SiteMap;
