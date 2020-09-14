import Link from 'next/link';
import ReactMarkdown from 'react-markdown/with-html';

interface BlogTitleProps {
	title: string;
	postTitle: string;
	slug?: string;
}

const BlogTitle = ({ title, slug, postTitle }: BlogTitleProps) => {
	// const titleSansHyphens = title.replace('-', ' ').replace('-', ' ');
	return (
		<div className='font-somaRoman text-oneFiveBlack hover:text-fiveOBlack dark:text-eaWhite dark:hover:text-afWhite md:text-customExcerptMobile text-customTitleMobile even:pl-paddingBlog'>
			<Link as={`/blog/${slug}`} href='/blog/[slug]' passHref scroll={true}>
				<a
					className='font-somaRoman hover:text-fiveOBlack'
					aria-label={`${title}`}
					id={`home-${title}`}
				>
					<ReactMarkdown
						escapeHtml={false}
						source={postTitle}
						className='text-customTitleMobile md:text-customExcerptMobile text-left block even:pl-paddingBlog'
					/>
				</a>
			</Link>
		</div>
	);
};

export default BlogTitle;
