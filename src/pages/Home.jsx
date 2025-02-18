// import React, {useEffect, useState} from 'react'
// import appwriteService from "../appwrite/config";
// import {Container, PostCard} from '../component'
// import { useDispatch, useSelector } from 'react-redux';

// function Home() {
//     const [posts, setPosts] = useState([])
//     const status = useSelector(state=>state.auth.status)

//     useEffect(() => {
//         appwriteService.getPosts().then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents)
//             }
//         })
//     }, [])
//     if (!status && posts.length === 0) {
//         return (
//             <div className="w-full py-8 mt-4 text-center">
//                 <Container>
//                     <div className="flex flex-wrap">
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold hover:text-gray-500">
//                                 Login to read posts
//                             </h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         )
//     }
    
//     return (
//         <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-2 w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     )
// }

// export default Home

// import React, { useEffect, useState } from "react";
// import appwriteService from "../appwrite/config";
// import { Container, PostCard } from "../component";
// import { useDispatch, useSelector } from "react-redux";

// function Home() {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true); // New loading state
//     const status = useSelector((state) => state.auth.status);

//     useEffect(() => {
//         setLoading(true);
//         appwriteService.getPosts().then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents);
//             }
//             setLoading(false);
//         });
//     }, []);

//     if (loading) {
//         return (
//             <div className="w-full h-screen flex justify-center items-center">
//                 <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
//             </div>
//         );
//     }

//     if (!status && posts.length === 0) {
//         return (
//             <div className="w-full py-8 mt-4 text-center">
//                 <Container>
//                     <div className="flex flex-wrap">
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold hover:text-gray-500">
//                                 Login to read posts
//                             </h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         );
//     }

//     return (
//         <div className="w-full py-8">
//             <Container>
//                 <div className="flex flex-wrap">
//                     {posts.map((post) => (
//                         <div key={post.$id} className="p-2 w-1/4">
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     );
// }

// export default Home;

import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../component";
import { useSelector } from "react-redux";

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const status = useSelector((state) => state.auth.status);

    useEffect(() => {
        setLoading(true);
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
            setLoading(false);
        });
    }, []);

    if (!status && posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <Container>
                <div className="flex flex-wrap">
                    {loading
                        ? [...Array(4)].map((_, index) => (
                            <div key={index} className="p-2 w-1/4 animate-pulse">
                                <div className="bg-gray-300 h-40 rounded-xl mb-4"></div>
                                <div className="h-6 bg-gray-300 w-3/4 rounded"></div>
                            </div>
                        ))
                        : posts.map((post) => (
                            <div key={post.$id} className="p-2 w-1/4">
                                <PostCard {...post} />
                            </div>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
}

export default Home;
