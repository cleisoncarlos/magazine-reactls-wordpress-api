
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import axios from "axios";



export default function NewsText({ categoryId, numPosts, textColor = '#000', tagColor ='#cccccc' }) {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para rastrear o status de carregamento
  //const [categoryDescription, setCategoryDescription] = useState('');

        
  useEffect(() => {

    // const fetchCategoryDetails = async () => {
    //     try {
    //       const response = await axios.get(`https://aprovinciadopara.com.br/wp-json/wp/v2/categories/${categoryId}`);
    //       setCategoryDescription(response.data.description);
    //     } catch (error) {
    //       console.error('Erro ao buscar detalhes da categoria:', error);
    //     }
    //   };


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
{posts.map(post => (
        <div key={post.id} className="mb-3">
<Link to={`/post/${post.slug}`} title={post.title.rendered} className="text-decoration-none">
   
      
        <h5 style={{color: textColor}}>{post.title.rendered}</h5>    
  {/* <span className="px-2 text-white small" style={{backgroundColor: tagColor}}><BookmarkSimple size={16} weight="duotone"/>{categoryDescription}</span> */}
  <span className="text-secondary small">Publicado em: {post.date}</span>
      
     

    </Link>
    <hr/>
        </div>
      ))}
      </>
    );
  }  