import { useState, useMemo, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import PostCard from './PostCard';
import SearchBar from './SearchBar';
import { postsData } from '../data/postsData';

const AllPosts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const { category } = useParams();
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredPosts = useMemo(() => {
    return postsData.filter((post: any) => {
      const matchesSearch = post.title.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        post.tags.some((tag: string) => tag.toLowerCase().includes(debouncedQuery.toLowerCase()));
      
      const matchesCategory = category 
        ? post.tags.some((tag: string) => tag.toLowerCase() === category.toLowerCase())
        : true;
      
      return matchesSearch && matchesCategory;
    });
  }, [debouncedQuery, category]);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  return (
    <div className="min-h-screen bg-black w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <SearchBar 
            value={searchQuery}
            onChange={handleSearchChange}
            onClear={handleClearSearch}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredPosts.map((post: any) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPosts;