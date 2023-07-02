
import './App.css';
import Photocomponents from './components/Photocomponents';
import {useEffect, useState} from"react"

  function App() {
  
  const apiKey= `ThKl1aGknlICEGlH_GNAxzLcNSvoC_jiTYOFV2BedOM`
  const [photos,setPhotos] = useState([])
  const [page,setPage] =useState(1)
  const [isLoading,setIsLoading] =useState(false)

  const fetchImage=async()=>{
          setIsLoading(true)
          try{
            const apiUrl= `https://api.unsplash.com/photos/?client_id=${apiKey}&page=${page}`
            const response = await fetch(apiUrl)
            const data= await response.json()
            setPhotos((oldData)=>{
              return [...oldData,...data]
            })
          }catch(error){
            console.log(error)
          }
          setIsLoading(false)
  }


            useEffect(()=>{
           
            fetchImage()
            // eslint-disable-next-line
            },[page])


      useEffect(()=>{
        const event = window.addEventListener('scroll',()=>{
            if (window.innerHeight+window.scrollY>document.body.offsetHeight-500 && !isLoading){
              setPage((oldPage)=>{
              return oldPage+1})
            }
        })
        return ()=>window.removeEventListener('scroll',event)
        // eslint-disable-next-line
      },[])


  return (
   <main>
      
        <h1>Infinite Scroll Photo</h1>
        <section className="photos">
          <div className="display-photo">
            {photos.map((data,index)=>{
              return <Photocomponents key={index}{...data}/>
            })}

          </div>
        </section>
    </main>
  );
}

export default App;
//<p>
//Access Key
//ThKl1aGknlICEGlH_GNAxzLcNSvoC_jiTYOFV2BedOM
//Secret key
//4v2dkc90eTAIFZAShhe5sQT9HK_waS9ANbnVYzByAc8

//</p>