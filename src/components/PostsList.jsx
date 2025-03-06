import { useState, useEffect } from 'react'

function PostsList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPosts = async () => {
    try {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!response.ok) {
        throw new Error('Erro ao carregar os posts')
      }
      const data = await response.json()
      setPosts(data.slice(0, 10)) // Limitando a 10 posts para exemplo
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  if (error) {
    return (
      <div className="posts-list error">
        <h3>Erro ao carregar posts</h3>
        <p>{error}</p>
        <button onClick={fetchPosts}>Tentar Novamente</button>
      </div>
    )
  }

  return (
    <div className="posts-list">
      <h3>Lista de Posts</h3>
      
      {loading ? (
        <div className="loading">
          <p>Carregando posts...</p>
        </div>
      ) : (
        <>
          <button onClick={fetchPosts} className="reload-button">
            Recarregar Posts
          </button>
          
          <div className="posts">
            {posts.map(post => (
              <div key={post.id} className="post-card">
                <h4>{post.title}</h4>
                <p>{post.body}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default PostsList 