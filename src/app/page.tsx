import Hero from "../../components/Hero";
import { FloatingNav } from "../../components/ui/FloatingNav";
import Grid from "../../components/Grid";
import RecentProjects from "../../components/RecentProjects";
import { navItems } from "../../data";
import Clients from "../../components/Clients";
import Experience from "../../components/Experience";
import Approach from "../../components/Approach";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}></FloatingNav>
        <Hero></Hero>
        <Grid></Grid>
        <RecentProjects></RecentProjects>
        <Clients></Clients>
        <Experience></Experience>
        <Approach></Approach>
      </div>
    </main>
  );
}
