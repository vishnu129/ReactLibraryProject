import Hello from '../Components/hello';
import Blogs from '../Home/blogs';
import blogdata from '../Home/blogs.json';
import Books from '../Home/Books';
const footerjson =
    [{ name: "Vision", component: Hello },
    { name: "Volunteer", component: Hello },
    { name: "Blogs", component: Blogs,data:blogdata},
    { name: "Careers", component: Hello },
    { name: "Home", component: Hello },
    { name: "Books", component: Books },
    { name: "Contact Us", component: Hello },];
    
export default footerjson