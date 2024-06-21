import './Home.scss';

import Heroe from '../../components/Heroe/Heroe';
import ProjectList from '../../components/ProjectList/ProjectList';

function Home() {

  return (
    <div className="homepage__container">
        <Heroe />
        <ProjectList />
    </div>
  )
}

export default Home;