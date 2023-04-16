import { Grid } from '@mui/material';
import React from 'react'
import MainFeaturedPost from "../../components/MainFeaturedPost";
import FeaturedPost from "../../components/FeaturedPost";
const HomePage = () => {
  const mainFeaturedPost = {
    title: 'Lorem ipsum dolor sit amet.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus assumenda autem consequuntur eaque eius,error, exercitationem id impedit labore nulla obcaecati',
    image: 'https://images.unsplash.com/photo-1588873281272-14886ba1f737?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };

  const featuredPosts = [
    {
      title: 'Lorem ipsum dolor.',
      date: 'Nov 12',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, iusto?',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
    },
    {
      title: 'Lorem ipsum dolor',
      date: 'Nov 11',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, iusto?',
      image: 'https://source.unsplash.com/random',
      imageLabel: 'Image Text',
    },
  ];
return(<>
  <MainFeaturedPost post={mainFeaturedPost} />
  <Grid container spacing={4}>
    {featuredPosts.map((post) => (
      <FeaturedPost key={post.title} post={post} />
    ))}
  </Grid>
</>)
}
export default HomePage
