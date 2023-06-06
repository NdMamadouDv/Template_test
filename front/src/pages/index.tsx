import Layout from "@/Components/layout/Layout";
import { getOwnerInfoData } from "@/lib/fetchOwnerInfo";
import HomeContainer from "@/modules/home/Home.Container";

const Home = ({ owners }) => {
  // console.log(owners);
  return (
    <>
      <Layout navFixed>
        <HomeContainer />
      </Layout>
    </>
  );
};
export default Home;

export const getStaticProps = async () => {
  const owners = await getOwnerInfoData();
  if (!owners) {
    console.log("error, no owners found");
  } else {
    return { props: { owners } };
  }
};
