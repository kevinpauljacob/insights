import Image from "next/image";

export default function Creators() {
    const creators = [
        {
          creatorProfileURL: "/assets/creator_1.png",
          creatorName: "John Smith",
          creatorBio: "Passionate advocate for social justice and equality.",
        },
        {
          creatorProfileURL: "/assets/creator_2.png",
          creatorName: "Emily Davis",
          creatorBio: "Political analyst and researcher.",
        },
        {
          creatorProfileURL: "/assets/creator_5.png",
          creatorName: "Michael Johnson",
          creatorBio: "Economist and financial advisor.",
        },
        {
          creatorProfileURL: "/assets/creator_3.png",
          creatorName: "Sophia Chen",
          creatorBio: "Political commentator and activist.",
        },
        {
          creatorProfileURL: "/assets/creator_6.png",
          creatorName: "David Adams",
          creatorBio: "Social economist and researcher.",
        },
        // {
        //   creatorProfileURL: "/assets/creator_4.png",
        //   creatorName: "Rachel Cooper",
        //   creatorBio: "Human rights advocate.",
        // },
        // {
        //   creatorProfileURL: "/assets/creator_7.png",
        //   creatorName: "Mark Thompson",
        //   creatorBio: "Political scientist and researcher.",
        // },
        // {
        //   creatorProfileURL: "/assets/creator_8.png",
        //   creatorName: "Olivia Brown",
        //   creatorBio: "Economic journalist and commentator.",
        // },
        // {
        //   creatorProfileURL: "/assets/creator_9.png",
        //   creatorName: "Andrew Miller",
        //   creatorBio: "Political analyst and writer.",
        // },
        // {
        //   creatorProfileURL: "/assets/creator_10.png",
        //   creatorName: "Grace Lee",
        //   creatorBio: "Economist and social researcher.",
        // },
      ];
  return (
    <section className="xl:pl-10 lg:pl-5 mt-10 md:w-[35%] min-w-[300px] lg:w-full">
        <h2 className="text-xl font-bold border-b border-black/20 pb-3">
            Top Creators
        </h2>
        <div>
            {creators.map((creator, index) => (
                <div key={index} className="flex flex-col xl:flex-row xl:justify-between xl:items-center p-2 my-2">
                    <div className="flex items-center mr-2">
                        <div className="w-[50px]">
                            <Image className="min-w-10 min-h-10 filter grayscale rounded-full" src={creator.creatorProfileURL} alt={creator.creatorName} width={100} height={100}/>
                        </div>
                        <div className="w-[80%] ml-3">
                            <h3 className="font-bold">
                                {creator.creatorName}
                            </h3>
                            <p className="text-sm font-medium">
                                {creator.creatorBio}
                            </p>
                        </div>
                    </div>
                    <div className="bg-black/10 text-sm text-center font-semibold rounded-md py-2 px-3 mt-2 xl:mt-0 xl:w-[25%] w-full">
                        Follow
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}
