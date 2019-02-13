import {withRouter} from 'next/router'
import Layout from '../components/MyLayout.js'
import myPosts from '../myPostApi';
import Link from 'next/link';


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

const Content = withRouter((props) => {

    
    var content23 = '';
    
    if ( myPosts(props.router.query.id)[0]) {
        content23 = myPosts(props.router.query.id)[0].content
    }

    
    return (
        <div class="container-fluid">
        <div className='row'>
            <div className="col-md-12">
                <h2><a href="/">Blindtext Blog</a></h2>
                <p>Ein toller Blog.</p>
                <hr />
            </div>
            <div className="row">
                <div className="col-md-8">
                <h1>{props.router.query.id}</h1>
                    <p>{content23}</p>
                </div>
                <div className="col-md-4">
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
    </div>   
        
   );
})

const Page = (props) => (
    <Layout>
       <Content />
    </Layout>
)

export default Page
