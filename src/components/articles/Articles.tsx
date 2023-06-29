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
        {
          creatorProfileURL: "/assets/creator_7.png",
          creatorName: "Mark Thompson",
          creatorBio: "Political scientist and researcher.",
          title: "Rise of Populism: Challenges to Democratic Systems",
          description: "Analyze the factors contributing to the global rise of populism and its implications for democratic governance.",
          imageURL: "/assets/articles/article_7.png",
          tags: ["Political", "Social", "Democracy"],
        },
        {
          creatorProfileURL: "/assets/creator_8.png",
          creatorName: "Olivia Brown",
          creatorBio: "Economic journalist and commentator.",
          title: "The Gig Economy: Opportunities and Inequalities",
          description: "Explore the pros and cons of the gig economy, its impact on workers' rights, and income disparities.",
          imageURL: "/assets/articles/article_8.png",
          tags: ["Economic", "Social", "Labor"],
        },
        {
          creatorProfileURL: "/assets/creator_9.png",
          creatorName: "Andrew Miller",
          creatorBio: "Political analyst and writer.",
          title: "The Impact of Fake News on Democratic Discourse",
          description: "Examine the influence of fake news on public opinion, polarization, and the erosion of trust in media.",
          imageURL: "/assets/articles/article_9.jpg",
          tags: ["Political", "Social", "Media"],
        },
        {
          creatorProfileURL: "/assets/creator_10.png",
          creatorName: "Grace Lee",
          creatorBio: "Economist and social researcher.",
          title: "The Cost of Healthcare: Balancing Accessibility and Affordability",
          description: "Discuss the challenges of ensuring affordable and accessible healthcare without compromising quality.",
          imageURL: "/assets/articles/article_10.webp",
          tags: ["Economic", "Social", "Healthcare"],
        },
      ];
      
    return (
        <section className="lg:w-[70%] lg:border-r border-black/20 xl:pr-10 lg:pr-5">
            <h2 className="text-xl font-bold border-b border-black/20 pb-3 pt-10">
                Articles
            </h2>
            <div>
                {
                    articles.map((article, index) => (
                        <div key={index} className="border-b border-black/20 sm:py-5">
                            <div className="flex flex-col-reverse md:flex-row my-5">
                              <div className="md:w-[65%] pr-5">
                                <div className="flex items-center mt-5 md:mt-0">
                                  <Image className="w-12 h-12 filter grayscale rounded-full" src={article.creatorProfileURL} alt={article.creatorName} width={100} height={100}/>
                                  <div className="ml-3">
                                      <p className="text-md font-bold">{article.creatorName}</p>
                                      <p className="text-sm font-medium">{article.creatorBio}</p>
                                  </div>
                                </div>
                                <div className="my-3">
                                    <h2 className="text-2xl font-bold">{article.title}</h2>
                                    <p>{article.description}</p>
                                </div>
                                <div className="flex flex-wrap">
                                      {
                                          article.tags.map((tag, index) => (
                                              <p key={index} className="text-sm font-semibold rounded-md bg-black/10 p-2 mr-2 mt-2 md:mt-0">{tag}</p>
                                          ))
                                      }
                                </div>
                              </div>
                              <div className="md:w-[35%] xl:min-w-[400px] lg:min-w-[300px] md:min-w-[350px] h-[300px] rounded-md">
                                <Image className="w-full h-full object-cover filter grayscale rounded-md" src={article.imageURL} alt={article.title} width={400} height={400}/>
                              </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
