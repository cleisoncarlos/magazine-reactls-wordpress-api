import CardImage from "../components/CardImage"
import NewsImage from "../components/NewsImage"
import NewsText from "../components/NewsText"
import Title from "../components/Title"

export default function Home() {

  return (
<main>

<div className="container mb-5">

  <div className="row">
    <div className="col-lg-6">
    <CardImage textColor="#ffffff" tagColor="#ffffff" categoryId={147} numPosts={1}/>
    </div>

  <div className="col-lg-6">
    <div className="row">

    <div className="col-lg-6 mb-2">
    <CardImage textColor="#ffffff" tagColor="#ffffff" categoryId={147} numPosts={1}/>
    </div>
    <div className="col-lg-6 mb-2">
    <CardImage textColor="#ffffff" tagColor="#ffffff" categoryId={147} numPosts={1}/>
    </div>
    <div className="col-lg-6 mb-2">
    <CardImage textColor="#ffffff" tagColor="#ffffff" categoryId={147} numPosts={1}/>
    </div>
    <div className="col-lg-6 mb-2">
    <CardImage textColor="#ffffff" tagColor="#ffffff" categoryId={147} numPosts={1}/>
    </div>
    </div>
  </div>
  </div>

</div>



<div className="container">
    <div className="row">          
        <div className="col-lg-8">
        <Title color="red" title="vermelho"/>
        <hr/>
        <NewsImage textColor="green" tagColor="green" categoryId={1} numPosts={1} />       
        <NewsImage textColor="green" tagColor="green" categoryId={43} numPosts={1} />
        <NewsImage textColor="green" tagColor="green" categoryId={147} numPosts={1} />    
        </div>   

        <div className="col-lg-4">

        <Title color="green" title="verde"/>
        <hr/>

        <NewsText textColor="green" tagColor="green" categoryId={1} numPosts={1} />       
        <NewsText textColor="green" tagColor="green" categoryId={147} numPosts={1} />    
        <NewsText textColor="green" tagColor="green" categoryId={43} numPosts={1} />
          
          </div>         
    </div>
</div>



<div className="container my-5">

<Title color="red" title="teste de titulo"/>
<hr/>
    <div className="row">
   <div className="col-lg-4">
   <CardImage textColor="green" tagColor="green" categoryId={1} numPosts={1}/>
   </div>

   <div className="col-lg-4">
   <CardImage textColor="green" tagColor="green" categoryId={147} numPosts={1}/>
   </div>

   <div className="col-lg-4">
   <CardImage textColor="green" tagColor="green" categoryId={34} numPosts={1}/>
   </div>




    </div>
</div>

</main>
  )
}
