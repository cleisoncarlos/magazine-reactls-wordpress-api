import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";




export default function CardImage(
  { categoryId, numPosts, textColor = '#000', tagColor ='#cccccc' }) {

        
          const [posts, setPosts] = useState([]);
        const [loading, setLoading] = useState(true); // Estado para rastrear o status de carregamento



        useEffect(() => {

      
      
          const fetchPosts = async () => {
            setLoading(true); // Iniciar o carregamento
            try {
              const response = await axios.get(`https://aprovinciadopara.com.br/wp-json/wp/v2/posts?categories=${categoryId}&per_page=${numPosts}`);
              const postsWithImages = await Promise.all(response.data.map(async post => {
                if (post.featured_media) {
                  try {
                    const mediaResponse = await axios.get(`https://aprovinciadopara.com.br/wp-json/wp/v2/media/${post.featured_media}`);
                    post.featured_image = mediaResponse.data.source_url;
                  } catch (mediaError) {
                    console.error('Erro ao buscar imagem destacada:', mediaError);
                    post.featured_image = null; // Defina como null caso haja erro na busca da imagem
                  }
                } else {
                  post.featured_image = null; // Defina como null se não houver imagem destacada
                }
                return post;
              }));
              setPosts(postsWithImages);
            } catch (error) {
              console.error('Erro ao buscar posts:', error);
            } finally {
              setLoading(false); // Concluir o carregamento
            }
          };
      
        //  fetchCategoryDetails();
          fetchPosts();
        }, [categoryId, numPosts]);
      
        if (loading) {
          return <Loading/>; // Indicador de carregamento
        }
            







    return (

<>

{/* <Link to={`/post/${post.slug}`} title={post.title.rendered} className="text-decoration-none">
<div class="image_multimidia">
<div class="card text-bg-dark border-0 ">
<figure>
       {post.featured_image ? (
            <img src={post.featured_image} alt={post.title.rendered} className="img-fluid rounded" />
          ) : (
           <img src="https://picsum.photos/800/600" className="img-fluid rounded" alt="WEBSITE"/>
          )}
       </figure>
  <div class="card-img-overlay">

  <div class="titulo_multimidia">
  <span className="small text-white bg-primary px-2">{categoryImage}</span>
    <h5 style={{color: textColor}}>{post.title.rendered}</h5>   
  
  </div>
 
  </div>
  </div>
  </div>
  
   
    </Link> */}


{posts.map(post => (
        <div key={post.id}>

<Link to={`/post/${post.slug}`} title={post.title.rendered} className="text-decoration-none">

<div class="image_multimidia">
<div class="card text-bg-dark border-0 ">
<figure>
       {post.featured_image ? (
            <img src={post.featured_image} alt={post.title.rendered} className="img-fluid" />
          ) : (
           <img src="https://picsum.photos/800/600" className="img-fluid" alt="WEBSITE"/>
          )}
       </figure>
  <div class="card-img-overlay">

  <div class="titulo_multimidia">
  {/* <span className="small text-white bg-primary px-2">{categoryImage}</span> */}
  <h5 style={{color: textColor}}>{post.title.rendered}</h5> 
  <span className="text-secondary small">Publicado em: {post.date}</span>   
  
  </div>
 
  </div>
  </div>
  </div>
    </Link>


</div>



      ))}
</>

    );
  }
  