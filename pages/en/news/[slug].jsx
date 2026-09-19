import NewsDetailsPage, { getServerSideProps as getNewsProps } from "../../news/[slug].jsx";

export default NewsDetailsPage;

export async function getServerSideProps(context) {
  return getNewsProps({
    ...context,
    query: { ...context.query, language: "en" },
  });
}
