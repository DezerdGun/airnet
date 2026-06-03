import BlogDynamic, { getStaticPaths, fetchPost } from "../../blog/[slug].jsx";

export { getStaticPaths };

export async function getStaticProps({ params }) {
  return fetchPost(params.slug, "uz");
}

export default BlogDynamic;
