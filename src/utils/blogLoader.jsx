// Importaciones estáticas de los posts
import enPosts from '../content/blog/en/posts.json';
import esPosts from '../content/blog/es/posts.json';

// Importaciones dinámicas de componentes
const componentCache = new Map();

export const loadBlogPosts = async (language = 'en') => {
  try {
    const posts = language === 'es' ? esPosts : enPosts;
    return posts;
  } catch (error) {
    console.warn(`Error loading blog posts for ${language}:`, error);
    return [];
  }
};

export const loadBlogPost = async (slug, language = 'en') => {
  try {
    // Cargar posts
    const posts = language === 'es' ? esPosts : enPosts;
    const postData = posts.find(post => post.slug === slug);
    
    if (!postData) {
      console.warn(`Post not found: ${slug} in ${language}`);
      return null;
    }

    // Cargar componente dinámicamente
    const cacheKey = `${language}/${postData.component}`;
    
    if (!componentCache.has(cacheKey)) {
      let component;
      
      try {
        if (language === 'es') {
          component = await import(`../content/blog/es/${postData.component}.jsx`);
        } else {
          component = await import(`../content/blog/en/${postData.component}.jsx`);
        }
        
        componentCache.set(cacheKey, component.default);
      } catch (importError) {
        console.warn(`Component not found for ${cacheKey}:`, importError);
        // Crear un componente de fallback
        componentCache.set(cacheKey, () => (
          <div>
            <p>Content component not found for this article.</p>
            <p>Please check if the component file exists.</p>
          </div>
        ));
      }
    }

    const ContentComponent = componentCache.get(cacheKey);
    
    return {
      ...postData,
      Content: ContentComponent
    };
  } catch (error) {
    console.error('Error loading blog post:', error);
    return null;
  }
};

// Función para obtener posts destacados
export const getFeaturedPosts = async (language = 'en') => {
  const posts = await loadBlogPosts(language);
  return posts.filter(post => post.featured);
};

// Función para obtener posts por categoría
export const getPostsByCategory = async (category, language = 'en') => {
  const posts = await loadBlogPosts(language);
  return posts.filter(post => post.category === category);
};