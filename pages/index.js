import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../components";
import { getPosts } from "../services";
import { FeaturedPosts } from "../sections";

export default function Home({ posts }) {
	return (
		<div className="container mx-auto px-10 mb-8">
			<Head>
				<meta charset="UTF-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta name="description" content="Technical blog" />
				<title>Crono Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<FeaturedPosts />
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
				<div className="lg:col-span-8 col-span-1">
					{posts.map((post, index) => (
						<PostCard post={post.node} key={index} />
					))}
				</div>

				<div className="lg:col-span-4 col-span-1">
					<div className="lg:sticky relative top-8">
						<PostWidget />
						<Categories />
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const posts = (await getPosts()) || [];

	return { props: { posts } };
}
