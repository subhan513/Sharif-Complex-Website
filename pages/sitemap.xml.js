import content from "./blogposts.json";
import allproducts from "./products";
function generateSiteMap(posts,products) {
  

  return `<?xml version="1.0" encoding="UTF-8"?><?xml-stylesheet type="text/xsl" href="/images/main-sitemap.xsl"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
    <loc>https://spica.edu.pk</loc>
    <lastmod>2023-02-01</lastmod>
   </url> 
   <url>
    <loc>https://spica.edu.pk/about</loc>
    <lastmod>2023-02-01</lastmod>
   </url> 
      
     
<url>
<loc>https://spica.edu.pk/blog</loc>
<lastmod>2023-02-01</lastmod>
</url>       
     
                     
<url>
<loc>https://spica.edu.pk/contact-us</loc>
<lastmod>2023-02-01</lastmod>
</url> 

<url>
<loc>https://spica.edu.pk/privacy-policy</loc>
<lastmod>2023-02-01</lastmod>
</url> 
<url>
<loc>https://spica.edu.pk/disclaimer</loc>
<lastmod>2023-02-01</lastmod>
</url> 
<url>
<loc>https://spica.edu.pk/terms</loc>
<lastmod>2023-02-01</lastmod>
</url> 


     ${posts
       .map(({ slug,lastmod }) => {
         return `
       <url>
       <loc>${`https://spica.edu.pk/blog/${slug}`}</loc>
       <lastmod>${`${lastmod}`}</lastmod>
       </url> 
     `;
       })
       .join("")}

       ${products
        .map(({ slug,lastmod }) => {
          return `
        <url>
        <loc>${`https://spica.edu.pk/products/${slug}`}</loc>
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
