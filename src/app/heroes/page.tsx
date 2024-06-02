import Image from "next/image";

type BannerImage = {
  id: number;
  alt: string;
  caption: any;
  updatedAt: string;
  createdAt: string;
  url: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  focalX: number;
  focalY: number;
};

type Hero = {
  id: number;
  name: string;
  title: string;
  bannerImage: BannerImage;
  updatedAt: string;
  createdAt: string;
};

type Root = {
  docs: Hero[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: any;
  page: number;
  pagingCounter: number;
  prevPage: any;
  totalDocs: number;
  totalPages: number;
};

const getHeroes = async () => {
  try {
    const res = await fetch("http://localhost:4000/api/heroes");
    const data: Root = await res.json();
    return data;
  } catch (error) {
    console.log(`An error occurred when trying to get gists: ${error}`);
  }
};

const HeroesPage = async () => {
  const heroes = await getHeroes();
  console.log("heroes: ", heroes);

  return (
    <div>
      <h1>HeroesPage</h1>

      <p>Heroes:</p>
      <ul>
        {heroes?.docs.map((hero) => (
          <li key={hero.id}>
            <h2>{hero.name}</h2>
            <p>{hero.title}</p>

            <Image
              src={hero.bannerImage.url}
              alt={hero.bannerImage.alt}
              width={hero.bannerImage.width}
              height={hero.bannerImage.height}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroesPage;
