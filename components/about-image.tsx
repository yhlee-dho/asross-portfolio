import cn from 'classnames';
import Link from 'next/link';

interface AboutImageProps {
	title: string;
	src: string;
	slug?: string;
}

const AboutImage = ({
	src,
	title,
	slug
}: AboutImageProps) => {
	const image = (
		<img
			src={src}
			alt={title}
			className={cn(
				'w-aboutImage500 max-w-aboutImage500 h-full max-h-full z-2',
				{
					'hover:shadow-medium transition-shadow duration-300': slug
				}
			)}
		/>
	);
	return (
		<div className='mx-auto max-w-aboutImage500 overflow-y-hidden overflow-x-hidden bg-portfolio block'>
			{slug ? (
				<Link as={`/about/${slug}`} href='/about/[slug]' passHref>
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
					image
			)}
			{/* <a aria-label={title}>
				<img
					src={src}
					alt={title}
					className=' w-aboutImage500 max-w-aboutImage500 h-full max-h-full z-2 '
				/>
			</a> */}
		</div>
	);
};

export default AboutImage;