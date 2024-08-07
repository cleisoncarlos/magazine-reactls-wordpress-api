import {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom' 
import Loading from '../components/Loading';
import axios from 'axios';
import Title from '../components/Title';

export default function Post() {

    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`https://aprovinciadopara.com.br/wp-json/wp/v2/posts/${id}`);
          setPost(response.data);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };
  
      fetchPost();
    }, [id]);
  
    if (loading) return <Loading/>;
    if (error) return <p>Erro ao carregar o post: {error.message}</p>;
  


  return (
    <div className='container'>

<div className='row'>
<div className='col-lg-9'>
   <Title title={post.title.rendered}/>
   <hr/>
      
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
</div>
        
    </div>
  )
}
