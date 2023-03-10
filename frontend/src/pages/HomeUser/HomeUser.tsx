import { useEffect, useState } from "react";
import { Post } from "../../components/Posts/Post";
import * as S from "./styles"
import { apiService } from "../../api/api";
import { useNavigate } from "react-router-dom";

interface Post{
    _id:String;
    author:String;
    content:String;
    interactions?:Array<String>
    comment?:Array<String>
}

const local:any = localStorage.getItem("user")
const user = JSON.parse(local)

export function HomeUser(){
    
    const [post,setPost]=useState('')
    const [posts,setPosts]=useState<Post[]>([])
   
  
    const navigate = useNavigate()

    function verifyUser(){
        if(!user||user==undefined||user=="null"){
            navigate("/")
        }else{
            ""      
        }
    }

    verifyUser()
    async function createPost(event:any){
        event.preventDefault()
        const payload={
            author:user.id,
            content:post
        }

        console.log(payload)
        await apiService.post.createURL(payload)
        .then(response=>{
            const data = response.data
            console.log(data)
            
        })
        .catch((e:Error)=>{
            console.log(e)
        })
        
        document.getElementById("contentPost").value =""

        getPost()
    }
    async function getPost(){
        await apiService.post.readAllURL()
        .then((response:any)=>{
            const data = response.data

        
            setPosts(data)
        })
        .catch((e:Error)=>{
            console.log(e)
        })
    }
    
    
    useEffect(()=>{
        
        getPost()
        
    },[])

    
    return(
        <S.Conteiner>
            <S.Post onSubmit={createPost}>
                <textarea id="contentPost" placeholder="Digite sua mensagem" onChange={e=>setPost(e.target.value)}/>
                {!post?<div className="button"><button>Enviar</button></div>:<div className="button"><button className="postButton" >Enviar</button></div>}

            </S.Post >

            {
                posts.map((post:Post,index:number)=>(
                    <Post key={`${post._id}${index}`} author={post.author} content={post.content} interations={post.interactions} comment={post.comment} idPost={post._id} refreshPost={getPost}/>
                ))
            }
        </S.Conteiner>
    )
}