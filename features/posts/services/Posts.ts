import fs from 'fs';
import matter from 'gray-matter';

const POSTS_FOLDER_NAME = 'posts';

export const getPosts = () => {
  const files = fs.readdirSync(POSTS_FOLDER_NAME);
  const markdownPosts = files.filter((file) => file.endsWith('.md'));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(
      `${POSTS_FOLDER_NAME}/${fileName}`,
      'utf8'
    );
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    };
  });

  return posts;
};
