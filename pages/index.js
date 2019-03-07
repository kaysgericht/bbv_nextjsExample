/* Without CSS Modules, maybe with PostCSS */
import Link from 'next/link';

import '../bootstrap.css'
import { Button } from 'react-bootstrap';
import Layout from '../components/MyLayout.js'
import myPosts from '../myPostApi';
import '../style.css'

const PostLink = ({ post }) => (
    <li>
        <Link as={`/p/${post.id}`} href={`/posts?id=${post.id}`}>
               <a>{post.title}</a>  
        </Link>
        {/* <Link href={`/posts?title=${post.title}`}>
        <a>{post.title}</a>
        </Link> */}
        <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
        font-size: 1.5em;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
        <p>{post.content.split(' ').slice(0,20).join(' ')}...</p>
    </li>
    
)

const PostLinkRecent = ({ post }) => (
    <li>
        <Link as={`/p/${post.id}`} href={`/posts?post=${post}`}>
               <a>{post.title}</a>  
        </Link>
        {/* <Link href={`/posts?title=${post.title}`}>
        <a>{post.title}</a>
        </Link> */}
        <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
        font-size: 1em;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>       
    </li>
    
)

export default () =>
    <Layout>
        <div className="container-fluid">
            <div className='row'>
                <div className="col-md-12">
                    <h2><a href="">Blindtext Blog</a></h2>
                    <p>Ein toller Blog.</p>
                    <hr />
                </div>
                
            </div>
            <div className="row">
                    <div className="col-md-8" style={{border: '1px solid #DDD'}}>
                        <ul>
                            {myPosts(-1).map((post) => (
                                <PostLink key={post.id} post={post} />
                            ))}
                        </ul>
                    </div>
                    <div className="col-md-4" style={{border: '1px solid #DDD'}}>
                        <h4>Aktuelle Artikel</h4>
                        <p>Vergangenes:</p>
                        <ul>
                            {myPosts(-1).map((post) => (
                                <PostLinkRecent key={post.id} post={post} />
                            ))}
                        </ul>                       
                    </div>
                </div>
        </div>
    </Layout>
/* With CSS Modules */
/*
import css from "../style.css"

export default () => <div className={css.example}>Hello World, I am being styled using CSS Modules!</div>
*/