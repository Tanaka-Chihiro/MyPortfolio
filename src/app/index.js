import fs from 'fs';

export const getStaticProps = () => {
  const posts = fs.readdirSync('posts');
  console.log('files:', posts);

  return{
    props:{
      posts: [],
    },
  };
};

export default function Home({ posts }) {
  return <div className='my-8'>コンテンツ</div>
}