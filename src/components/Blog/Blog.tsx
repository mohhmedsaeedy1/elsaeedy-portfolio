import { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'Getting Started with React and TypeScript',
      excerpt: 'Learn how to set up a modern React application with TypeScript, covering best practices and essential configurations for scalable development.',
      image: '/images/540x400 - Copy.jpg',
      date: 'Dec 15, 2024',
      author: 'Mohamed Elsaeedy',
      category: 'Web Development',
      readTime: '5 min read',
      tags: ['React', 'TypeScript', 'Frontend'],
      featured: true
    },
    {
      id: 2,
      title: 'Building RESTful APIs with Node.js',
      excerpt: 'A comprehensive guide to creating scalable and secure REST APIs using Node.js, Express, and MongoDB with authentication.',
      image: '/images/370x250x2.jpg',
      date: 'Dec 10, 2024',
      author: 'Mona Hamed',
      category: 'Backend',
      readTime: '8 min read',
      tags: ['Node.js', 'API', 'MongoDB'],
      featured: false
    },
    {
      id: 3,
      title: 'Modern CSS Techniques for 2024',
      excerpt: 'Explore the latest CSS features including Grid, Flexbox, Container Queries, and custom properties to create stunning responsive layouts.',
      image: '/images/190x160x1.png',
      date: 'Dec 5, 2024',
      author: ' Gana Saeed',
      category: 'Frontend',
      readTime: '6 min read',
      tags: ['CSS', 'Design', 'Frontend'],
      featured: false
    },
    {
      id: 4,
      title: 'Mastering Docker for Developers',
      excerpt: 'Learn containerization with Docker, from basics to advanced deployment strategies, orchestration, and best practices.',
      image: '/images/370x250x1.jpg',
      date: 'Nov 28, 2024',
      author: 'Ali Kamal',
      category: 'DevOps',
      readTime: '10 min read',
      tags: ['Docker', 'DevOps', 'Deployment'],
      featured: false
    },
    {
      id: 5,
      title: 'Understanding JavaScript Closures',
      excerpt: 'Deep dive into JavaScript closures, scope, and how they work under the hood with practical examples and use cases.',
      image: '/images/370x250x3.jpg',
      date: 'Nov 20, 2024',
      author: 'Elsayed Ibrahim',
      category: 'Web Development',
      readTime: '7 min read',
      tags: ['JavaScript', 'Programming', 'Concepts'],
      featured: false
    },
    {
      id: 6,
      title: 'Building Mobile Apps with React Native',
      excerpt: 'Complete guide to developing cross-platform mobile applications using React Native, including navigation and state management.',
      image: '/images/team-3.jpg',
      date: 'Nov 15, 2024',
      author: 'Lotfy ELeslemany',
      category: 'Mobile',
      readTime: '12 min read',
      tags: ['React Native', 'Mobile', 'iOS', 'Android'],
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', count: blogPosts.length },
    { id: 'Web Development', label: 'Web Dev', count: blogPosts.filter(p => p.category === 'Web Development').length },
    { id: 'Backend', label: 'Backend', count: blogPosts.filter(p => p.category === 'Backend').length },
    { id: 'Frontend', label: 'Frontend', count: blogPosts.filter(p => p.category === 'Frontend').length },
    { id: 'Mobile', label: 'Mobile', count: blogPosts.filter(p => p.category === 'Mobile').length },
    { id: 'DevOps', label: 'DevOps', count: blogPosts.filter(p => p.category === 'DevOps').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <div className="blog-header">
          <div className="section-title-wrapper">
            <h2 className="section-title">Latest Blog Posts</h2>
            <p className="section-subtitle">
              Insights, tutorials, and thoughts on web development, programming, and technology
            </p>
          </div>

          <div className="blog-controls">
            <div className="search-bar">
              <i className="fa fa-search"></i>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="category-filters">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                  <span className="category-count">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeCategory === 'all' && !searchTerm && featuredPost && (
          <article className="featured-post">
            <div className="featured-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
              <span className="featured-badge">
                <i className="fa fa-star"></i> Featured
              </span>
            </div>
            <div className="featured-content">
              <div className="featured-meta">
                <span className="blog-category">{featuredPost.category}</span>
                <span className="blog-date">
                  <i className="fa fa-calendar"></i> {featuredPost.date}
                </span>
                <span className="blog-read-time">
                  <i className="fa fa-clock-o"></i> {featuredPost.readTime}
                </span>
              </div>
              <h2 className="featured-title">{featuredPost.title}</h2>
              <p className="featured-excerpt">{featuredPost.excerpt}</p>
              <div className="blog-tags">
                {featuredPost.tags.map((tag, idx) => (
                  <span key={idx} className="blog-tag">#{tag}</span>
                ))}
              </div>
              <a href="#" className="read-more featured-read-more">
                Read Full Article <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </article>
        )}

        <div className="blog-grid">
          {regularPosts.length > 0 ? (
            regularPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                  <span className="blog-category">{post.category}</span>
                </div>
                
                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-date">
                      <i className="fa fa-calendar"></i> {post.date}
                    </span>
                    <span className="blog-read-time">
                      <i className="fa fa-clock-o"></i> {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  
                  <div className="blog-tags">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="blog-tag">#{tag}</span>
                    ))}
                  </div>

                  <div className="blog-footer">
                    <div className="blog-author-info">
                      <i className="fa fa-user-circle"></i>
                      <span>{post.author}</span>
                    </div>
                    <a href="#" className="read-more">
                      Read More <i className="fa fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="no-results">
              <i className="fa fa-search"></i>
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blog;
