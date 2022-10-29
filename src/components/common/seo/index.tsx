import Head from "next/head";

const BASE_URL = "https://likelionSungGuk.github.io/";

type SEOProps = {
  canonicalPath: string;
  title: string;
  description?: string;
  imageUrl?: string;
  type?: string;
  jsonld?: Record<any, any>;
};

function SEO({
  canonicalPath,
  title,
  description = "Frontend Dev likelionSungGuk Blog",
  imageUrl = "",
  type = "website",
  jsonld = {},
}: SEOProps) {
  const url = BASE_URL + canonicalPath;

  const openGraphTags = [
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: imageUrl },
    { property: "og:url", content: url },
    { property: "og:type", content: type },
  ].filter((v) => !!v.content);

  const twitterTags = [
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: imageUrl },
    { name: "twitter:description", content: description },
  ].filter((v) => !!v.content);

  return (
    <Head>
      <title>{`${title}`}</title>
      <meta name="description" content={description} key="description" />
      {openGraphTags.map((prop) => (
        <meta key={prop.property} {...prop} />
      ))}
      {twitterTags.map((prop) => (
        <meta key={prop.name} {...prop} />
      ))}
      <link rel="canonical" href={url} />
      {Object.keys(jsonld).length > 0 && (
        <script type="application/ld+json">{JSON.stringify(jsonld)}</script>
      )}
    </Head>
  );
}

export const getBlogJSONLD = ({
  path,
  title,
  imageUrl,
  description,
  datePublished,
}: {
  path: string;
  title: string;
  imageUrl?: string;
  description: string;
  datePublished: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  image: imageUrl,
  editor: "likelionSungGuk",
  url: BASE_URL + path,
  datePublished,
  dateCreated: datePublished,
  dateModified: datePublished,
  description: description,
  author: {
    "@type": "Person",
    name: "likelionSungGuk",
  },
});

export default SEO;
