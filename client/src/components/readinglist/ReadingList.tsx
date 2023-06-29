import Image from "next/image";


export default function Articles() {
    const articles = [
        {
          creatorProfileURL: "/assets/creator_1.png",
          creatorName: "John Smith",
          creatorBio: "Passionate advocate for social justice and equality.",
          title: "The Impact of Income Inequality on Education",
          description: "Explore how income inequality affects access to quality education, perpetuating social disparities.",
          imageURL: "/assets/articles/article_1.jpg",
          tags: ["Social", "Economic", "Education"],
        },
        {
          creatorProfileURL: "/assets/creator_2.png",
          creatorName: "Emily Davis",
          creatorBio: "Political analyst and researcher.",
          title: "Climate Change Policies: Local vs. Global Perspectives",
          description: "Compare the effectiveness of local and global approaches to combating climate change and their impact on economies.",
          imageURL: "/assets/articles/article_2.jpg",
          tags: ["Political", "Environmental", "Economic"],
        },
        {
          creatorProfileURL: "/assets/creator_5.png",
          creatorName: "Michael Johnson",
          creatorBio: "Economist and financial advisor.",
          title: "The Role of Technological Advancements in Income Inequality",
          description: "Analyze how technological progress can exacerbate income disparities and propose strategies for a more equitable society.",
          imageURL: "/assets/articles/article_3.jpg",
          tags: ["Economic", "Social", "Technology"],
        },
        {
          creatorProfileURL: "/assets/creator_3.png",
          creatorName: "Sophia Chen",
          creatorBio: "Political commentator and activist.",
          title: "The Influence of Lobbying on Democratic Processes",
          description: "Examine the impact of lobbying on democratic decision-making and the need for transparency and regulation.",
          imageURL: "/assets/articles/article_4.webp",
          tags: ["Political", "Social", "Democracy"],
        },
        {
          creatorProfileURL: "/assets/creator_6.png",
          creatorName: "David Adams",
          creatorBio: "Social economist and researcher.",
          title: "Universal Basic Income: A Solution to Poverty?",
          description: "Discuss the potential benefits and challenges of implementing a universal basic income to alleviate poverty.",
          imageURL: "/assets/articles/article_5.avif",
          tags: ["Economic", "Social", "Poverty"],
        },
        {
          creatorProfileURL: "/assets/creator_4.png",
          creatorName: "Rachel Cooper",
          creatorBio: "Human rights advocate.",
          title: "The Impact of Gender Wage Gap on Society",
          description: "Highlight the consequences of gender pay disparities on individuals, families, and the economy as a whole.",
          imageURL: "/assets/articles/article_6.png",
          tags: ["Social", "Economic", "Gender Equality"],
        },
        // {
        //   creatorProfileURL: "/assets/creator_7.png",
        //   creatorName: "Mark Thompson",
        //   creatorBio: "Political scientist and researcher.",
        //   title: "Rise of Populism: Challenges to Democratic Systems",
        //   description: "Analyze the factors contributing to the global rise of populism and its implications for democratic governance.",
        //   imageURL: "/assets/articles/article_7.png",
        //   tags: ["Political", "Social", "Democracy"],
        // },
        // {
        //   creatorProfileURL: "/assets/creator_8.png",
        //   creatorName: "Olivia Brown",
        //   creatorBio: "Economic journalist and commentator.",
        //   title: "The Gig Economy: Opportunities and Inequalities",
        //   description: "Explore the pros and cons of the gig economy, its impact on workers' rights, and income disparities.",
        //   imageURL: "/assets/articles/article_8.png",
        //   tags: ["Economic", "Social", "Labor"],
        // },
        // {
        //   creatorProfileURL: "/assets/creator_9.png",
        //   creatorName: "Andrew Miller",
        //   creatorBio: "Political analyst and writer.",
        //   title: "The Impact of Fake News on Democratic Discourse",
        //   description: "Examine the influence of fake news on public opinion, polarization, and the erosion of trust in media.",
        //   imageURL: "/assets/articles/article_9.jpg",
        //   tags: ["Political", "Social", "Media"],
        // },
        // {
        //   creatorProfileURL: "/assets/creator_10.png",
        //   creatorName: "Grace Lee",
        //   creatorBio: "Economist and social researcher.",
        //   title: "The Cost of Healthcare: Balancing Accessibility and Affordability",
        //   description: "Discuss the challenges of ensuring affordable and accessible healthcare without compromising quality.",
        //   imageURL: "/assets/articles/article_10.webp",
        //   tags: ["Economic", "Social", "Healthcare"],
        // },
      ];
      
    return (
        <section className="xl:pl-10 lg:pl-5 lg:pr-0 md:pr-10 mt-10 md:w-[65%] lg:w-full">
            <h2 className="text-xl font-bold border-b border-black/20 pb-3">
                Your Reading List
            </h2>
            <div>
                {
                    articles.map((article, index) => (
                        <div key={index} className="border-b border-black/20">
                            <div className="my-5">
                                <div className="lg:h-[150px] h-[200px]">
                                  <Image className="w-full h-full object-cover filter grayscale rounded-md" src={article.imageURL} alt={article.title} width={400} height={400}/>
                                </div>
                                <div className="mt-2">
                                    <h2 className="text-md font-bold">{article.title}</h2>
                                    <p className="text-sm text-clip my-2">{article.description}</p>
                                    <div className="flex items-center w-full">
                                         <Image className="w-12 h-12 filter grayscale rounded-full" src={article.creatorProfileURL} alt={article.creatorName} width={100} height={100}/>
                                        <div className="ml-3">
                                            <p className="text-md font-bold">{article.creatorName}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </section>
    )
}
