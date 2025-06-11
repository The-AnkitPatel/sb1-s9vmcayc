import { memo } from 'react';
import { Link } from 'react-router-dom';

interface Author {
  name: string;
  image: string;
  path: string;
}

interface Post {
  id: number;
  title: string;
  image: string;
  readTime: string;
  date: string;
  author: Author;
  tags: string[];
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = memo(({ post }) => {
  return (
    <article className="bg-gray-900 rounded-lg overflow-hidden group transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl will-change-transform">
      <Link to={`/post/${post.id}`} className="block relative">
        <div className="relative aspect-[16/9] overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            decoding="async"
            width={400}
            height={225}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
            <span className="text-sm text-white/90 font-medium">{post.readTime}</span>
          </div>
        </div>
      </Link>
      
      <div className="p-5">
        <Link to={`/post/${post.id}`}>
          <h2 className="text-xl font-semibold mb-3 group-hover:text-gray-300">{post.title}</h2>
        </Link>
        
        <div className="flex items-center mb-4">
          <Link to={post.author.path} className="flex items-center">
            <img 
              src={post.author.image} 
              alt={post.author.name} 
              className="w-8 h-8 rounded-full object-cover mr-3"
              loading="lazy"
              width={32}
              height={32}
            />
            <div>
              <span className="font-medium text-sm">{post.author.name}</span>
              <p className="text-xs text-gray-400">{post.date}</p>
            </div>
          </Link>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <Link 
              key={index} 
              to={`/category/${tag.toLowerCase()}`} 
              className="text-xs px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded-full transition"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
});

export default PostCard;