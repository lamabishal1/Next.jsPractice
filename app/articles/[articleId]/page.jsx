import Link from 'next/link';

export default async function NewsArticle({ params, searchParams }) {

    const { articleId } = await params;
    const { lang } = await searchParams;

    const supportedLangs = ["en", "es", "jp"];
    const safeLang = supportedLangs.includes(lang) ? lang : "en";

    return (
        <>
        
        <div className='text-3xl'>
            <h1>News Article {articleId}</h1>
            <p>Reading in {safeLang}</p>
        </div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
        <Link href={`/articles/${articleId}?lang=jp`}>Japanese</Link>
        </>
    );
}