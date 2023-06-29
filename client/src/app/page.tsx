import Articles from "@/components/articles/Articles"
import Creators from "@/components/creators/Creators"
import ReadingList from "@/components/readinglist/ReadingList"
import Footer from "@/components/layouts/Footer"
import Navbar from "@/components/layouts/Navbar"

export default function Home() {
  return (
    <main className="">
      <Navbar/>
      <div className="flex flex-col lg:flex-row">
        <Articles/>
        <div className="flex flex-col-reverse md:flex-row-reverse lg:flex-col lg:w-[30%] md:mt-10 lg:mt-0">
          <Creators/>
          <ReadingList />
        </div>
      </div>
      <Footer/>
    </main>
  )
}
